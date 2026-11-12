import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOGO_SRC, NAV, type NavItem } from "@/lib/nav";
import { CONTACT } from "@/lib/school-info";
import { cn } from "@/lib/utils";

const MOBILE_MENU_ID = "mobile-menu";
const SCROLLED_AFTER_PX = 12;

const DESKTOP_LINK =
  "nav-underline rounded-full px-3 py-2 text-foreground/80 transition-colors hover:text-primary";
const DESKTOP_ACTIVE = "text-primary font-semibold";
const MOBILE_LINK =
  "block rounded-xl px-4 py-3 text-base text-foreground/85 transition-colors hover:bg-secondary";
const MOBILE_ACTIVE = "bg-secondary text-primary font-semibold";

function usePathname() {
  return useLocation({ select: (l) => l.pathname });
}

function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLLED_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return isScrolled;
}

function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-1.5 hover:text-gold">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden items-center gap-1.5 hover:text-gold sm:inline-flex"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {CONTACT.email}
          </a>
        </div>
        <p className="hidden font-semibold tracking-widest text-gold uppercase md:block">
          Admissions open · Nursery to P.7
        </p>
      </div>
    </div>
  );
}

function DesktopDropdown({ label, items }: { label: string; items: NavItem[] }) {
  const pathname = usePathname();
  const isActive = items.some((i) => i.to === pathname);
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={cn(
          DESKTOP_LINK,
          "group inline-flex items-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isActive && DESKTOP_ACTIVE,
        )}
        data-status={isActive ? "active" : undefined}
      >
        {label}
        <ChevronDown
          className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-44 rounded-xl p-1.5">
        {items.map((i) => (
          <DropdownMenuItem key={i.to} asChild className="cursor-pointer rounded-lg px-3 py-2">
            <Link to={i.to}>{i.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DesktopNav() {
  return (
    <nav aria-label="Main" className="hidden items-center gap-0.5 text-sm xl:flex">
      {NAV.map((entry) =>
        "children" in entry ? (
          <DesktopDropdown key={entry.label} label={entry.label} items={entry.children} />
        ) : (
          <Link
            key={entry.to}
            to={entry.to}
            activeOptions={{ exact: true }}
            className={DESKTOP_LINK}
            activeProps={{ className: DESKTOP_ACTIVE }}
          >
            {entry.label}
          </Link>
        ),
      )}
      <Link
        to="/admissions"
        className="btn-motion ml-2 rounded-full bg-gold px-4 py-2 font-semibold text-gold-foreground"
      >
        Apply now
      </Link>
    </nav>
  );
}

function MobileLink({ item, isSub = false }: { item: NavItem; isSub?: boolean }) {
  return (
    <Link
      to={item.to}
      activeOptions={{ exact: true }}
      className={cn(MOBILE_LINK, isSub && "py-2.5 pl-8 text-[0.95rem]")}
      activeProps={{ className: MOBILE_ACTIVE }}
    >
      {item.label}
    </Link>
  );
}

function MobileGroup({ label, items }: { label: string; items: NavItem[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(() => items.some((i) => i.to === pathname));
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        className={cn(MOBILE_LINK, "flex w-full items-center justify-between text-left")}
      >
        {label}
        <ChevronDown
          className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        inert={!isOpen}
      >
        <div className="overflow-hidden">
          {items.map((i) => (
            <MobileLink key={i.to} item={i} isSub />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      id={MOBILE_MENU_ID}
      inert={!isOpen}
      className={cn(
        "grid transition-[grid-template-rows,opacity] duration-400 ease-out xl:hidden",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="overflow-hidden">
        <nav
          aria-label="Mobile"
          className="mx-auto max-h-[calc(100dvh-9rem)] max-w-6xl space-y-1 overflow-y-auto border-t border-border px-4 py-4"
        >
          {NAV.map((entry) =>
            "children" in entry ? (
              <MobileGroup key={entry.label} label={entry.label} items={entry.children} />
            ) : (
              <MobileLink key={entry.to} item={entry} />
            ),
          )}
          <Link
            to="/admissions"
            className="btn-motion mt-3 block rounded-full bg-gold px-5 py-3 text-center font-semibold text-gold-foreground"
          >
            Apply for admission
          </Link>
        </nav>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const isScrolled = useIsScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the mobile menu whenever the visitor lands on a new page.
  useEffect(() => setIsMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 bg-background/95 backdrop-blur transition-shadow duration-300",
        isScrolled || isMenuOpen ? "shadow-soft" : "border-b border-border",
      )}
    >
      <TopBar />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2">
        <Link to="/" className="group flex items-center gap-2 sm:gap-3">
          <img
            src={LOGO_SRC}
            alt="Fahad Springs Junior School logo"
            width={80}
            height={80}
            className="h-16 w-16 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105 sm:h-20 sm:w-20"
          />
          <span className="font-display text-lg leading-tight text-primary sm:text-xl">
            Fahad Springs
            <br />
            <span className="font-sans text-[0.65rem] tracking-[0.2em] text-accent-foreground uppercase sm:text-xs">
              Junior School
            </span>
          </span>
        </Link>
        <DesktopNav />
        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary transition-colors hover:bg-accent xl:hidden"
        >
          <span className="relative grid h-6 w-6 place-items-center">
            <Menu
              className={cn(
                "absolute h-6 w-6 transition-all duration-300",
                isMenuOpen ? "scale-50 rotate-90 opacity-0" : "opacity-100",
              )}
              aria-hidden="true"
            />
            <X
              className={cn(
                "absolute h-6 w-6 transition-all duration-300",
                isMenuOpen ? "opacity-100" : "scale-50 -rotate-90 opacity-0",
              )}
              aria-hidden="true"
            />
          </span>
        </button>
      </div>
      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
}
