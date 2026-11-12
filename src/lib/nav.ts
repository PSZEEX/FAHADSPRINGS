import type { LinkProps } from "@tanstack/react-router";

export const LOGO_SRC = "/fahad_logo.png";

type NavTo = NonNullable<LinkProps["to"]>;
export type NavItem = { to: NavTo; label: string };
export type NavEntry = NavItem | { label: string; children: NavItem[] };

export const NAV: NavEntry[] = [
  { to: "/", label: "Home" },
  {
    label: "About Us",
    children: [
      { to: "/about", label: "About Us" },
      { to: "/team", label: "Our Team" },
    ],
  },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/fees", label: "Fees" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/ask", label: "Ask Us" },
  { to: "/contact", label: "Contact" },
];

export const FOOTER_LINKS: { heading: string; links: NavItem[] }[] = [
  {
    heading: "Our school",
    links: [
      { to: "/about", label: "About us" },
      { to: "/team", label: "Our team" },
      { to: "/academics", label: "Academics" },
      { to: "/gallery", label: "Gallery" },
      { to: "/blog", label: "Blog" },
    ],
  },
  {
    heading: "For parents",
    links: [
      { to: "/admissions", label: "Admissions" },
      { to: "/fees", label: "Fees structure" },
      { to: "/events", label: "Events & term dates" },
      { to: "/ask", label: "Ask a question" },
      { to: "/contact", label: "Contact us" },
    ],
  },
];
