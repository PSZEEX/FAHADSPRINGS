// PLACEHOLDER content shared between pages. Everything here is sample data:
// replace it with the school's real events, news, staff and photos.

export const EVENTS = [
  {
    day: "20",
    month: "Nov",
    title: "Qur'an Recitation & Hifdh Competition",
    time: "9:00am – 1:00pm",
    place: "School Main Hall",
    text: "Learners from every class recite and compete in memorisation. Parents are welcome.",
  },
  {
    day: "27",
    month: "Nov",
    title: "End of Term III Examinations Begin",
    time: "All week",
    place: "All classes",
    text: "Final assessments for Nursery through P.6.",
  },
  {
    day: "04",
    month: "Dec",
    title: "Speech Day & Prize Giving",
    time: "10:00am – 3:00pm",
    place: "School Grounds",
    text: "Celebrating the year's academic, Islamic and co-curricular achievements.",
  },
  {
    day: "05",
    month: "Dec",
    title: "Term III Closes",
    time: "From 12:00pm",
    place: "School Office",
    text: "Report cards are issued and boarders are collected by parents.",
  },
  {
    day: "01",
    month: "Feb",
    title: "Term I Opens",
    time: "7:30am",
    place: "Whole school",
    text: "New and continuing learners report for the new academic year.",
  },
];

export const ANNUAL_HIGHLIGHTS = [
  {
    title: "Parents' visitation day",
    when: "Once every term",
    text: "Meet teachers, review your child's books and visit boarders.",
  },
  {
    title: "Sports day",
    when: "Term II",
    text: "Inter-house athletics, football and netball for all classes.",
  },
  {
    title: "Music, dance & drama",
    when: "Term II",
    text: "Class presentations, nasheeds and cultural performances.",
  },
  {
    title: "Ramadhan programme",
    when: "During Ramadhan",
    text: "Adjusted timetable, daily tafsir and a school iftar for boarders.",
  },
  {
    title: "Eid celebrations",
    when: "Eid al-Fitr & Eid al-Adha",
    text: "Learners celebrate together and share with the community.",
  },
  {
    title: "Educational tours",
    when: "Term I & II",
    text: "Study trips that bring classroom lessons to life.",
  },
];

export const POSTS = [
  {
    title: "Why we teach two curricula side by side",
    date: "November 2026",
    tag: "Academics",
    text: "Our learners follow the Uganda national syllabus and a full Islamic theology programme every day. Here is how the timetable balances both, and why it helps children grow in knowledge and in character.",
  },
  {
    title: "Helping your child with Qur'an memorisation at home",
    date: "October 2026",
    tag: "Islamic studies",
    text: "A few minutes of revision after Maghrib can make a big difference. Our Islamic studies teachers share simple routines that parents can use to support Hifdh at home.",
  },
  {
    title: "Preparing P.7 candidates for PLE",
    date: "September 2026",
    tag: "Academics",
    text: "From extra revision lessons to regular mock examinations, this is how the school supports candidates and what parents can do to keep them calm and confident.",
  },
  {
    title: "Settling into boarding life",
    date: "August 2026",
    tag: "School life",
    text: "Starting boarding is a big step for a young child. Our matron explains the daily routine, how prayers and prep are organised, and how families stay in touch.",
  },
  {
    title: "Good manners begin with small habits",
    date: "July 2026",
    tag: "Character",
    text: "Greeting with salaam, keeping time and caring for others: the small daily habits we practise in class that build honest, respectful and responsible young Muslims.",
  },
  {
    title: "What to expect on admission day",
    date: "June 2026",
    tag: "Admissions",
    text: "A step-by-step guide for new parents, from picking the admission form to the placement interview and receiving the requirements list.",
  },
];

export const NAME_PENDING = "Name to be added";

export const LEADERSHIP = [
  { role: "Director", bio: "Provides the vision and overall direction of the school." },
  { role: "Head Teacher", bio: "Leads the day-to-day running of the school and its staff." },
  { role: "Deputy Head Teacher", bio: "Oversees discipline, welfare and school routines." },
  { role: "Director of Studies", bio: "Coordinates teaching, assessment and PLE preparation." },
  { role: "Head of Islamic Studies", bio: "Leads Qur'an, Arabic and theology teaching." },
  {
    role: "Head of Nursery Section",
    bio: "Cares for our youngest learners in Baby, Middle and Top class.",
  },
  { role: "Bursar", bio: "Handles fees, payments and school accounts." },
  { role: "Boarding Matron", bio: "Looks after the wellbeing of our boarding learners." },
];

export const DEPARTMENTS = [
  {
    name: "Nursery teachers",
    text: "Trained early-childhood teachers who build confidence through play, song and story.",
  },
  {
    name: "Lower primary teachers",
    text: "Class teachers for P.1 – P.3 who lay strong foundations in literacy and numeracy.",
  },
  {
    name: "Upper primary teachers",
    text: "Subject specialists for P.4 – P.7 who prepare learners for PLE.",
  },
  {
    name: "Theology teachers",
    text: "Sheikhs and Ustadhas who teach Qur'an, Arabic, Fiqh and Islamic manners.",
  },
  {
    name: "Boarding & welfare staff",
    text: "Matrons, wardens and the school nurse who care for learners day and night.",
  },
  {
    name: "Support staff",
    text: "Cooks, cleaners, drivers and security who keep the school safe and running.",
  },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Classroom life",
  "Islamic studies",
  "School life",
  "Co-curricular",
  "Events",
] as const;

export type GalleryCategory = Exclude<(typeof GALLERY_CATEGORIES)[number], "All">;

export const GALLERY: { caption: string; category: GalleryCategory; isHero?: boolean }[] = [
  { caption: "Learners studying together", category: "Classroom life", isHero: true },
  { caption: "Qur'an recitation class", category: "Islamic studies" },
  { caption: "Morning assembly", category: "School life" },
  { caption: "Sports day", category: "Co-curricular" },
  { caption: "Computer lesson", category: "Classroom life" },
  { caption: "Nursery play time", category: "School life" },
  { caption: "Speech day & prize giving", category: "Events" },
  { caption: "Jumu'ah prayer", category: "Islamic studies" },
  { caption: "Music, dance & drama", category: "Co-curricular" },
  { caption: "Boarding section", category: "School life" },
  { caption: "Science lesson", category: "Classroom life" },
  { caption: "Eid celebrations", category: "Events" },
];
