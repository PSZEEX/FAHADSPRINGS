// Single source of the published school information the assistant may answer from.
// Fees per term in Uganda Shillings (UGX). Shown on the Fees page and used by the Ask Us helper.
export const FEES = {
  tuition: [
    { section: "Nursery (Baby, Middle & Top)", day: 450000, boarding: null },
    { section: "Lower Primary (P.1 – P.3)", day: 550000, boarding: 950000 },
    { section: "Upper Primary (P.4 – P.6)", day: 600000, boarding: 1050000 },
    { section: "Candidate class (P.7)", day: 700000, boarding: 1200000 },
  ] as { section: string; day: number; boarding: number | null }[],
  other: [
    { item: "Admission / registration fee (once, new learners)", amount: 50000 },
    { item: "Uniform set (2 sets + sweater + hijab for girls)", amount: 180000 },
    { item: "Lunch (day learners, per term)", amount: 150000 },
    { item: "Islamic studies books & Qur'an materials (per year)", amount: 60000 },
    { item: "Swimming & co-curricular activities (per term)", amount: 40000 },
    { item: "School transport (per term, Kampala routes)", amount: 300000 },
  ],
  notes:
    "Fees are per term (three terms a year) and payable at the start of term. Boarding fees include meals and accommodation. Boarding is available from P.1. Sibling discount: 10% off tuition for the third child and beyond.",
};

export const ugx = (n: number) => `UGX ${n.toLocaleString("en-US")}`;

const feesText = [
  "Tuition per term (day / boarding):",
  ...FEES.tuition.map(
    (t) =>
      `- ${t.section}: day ${ugx(t.day)}; boarding ${t.boarding ? ugx(t.boarding) : "not offered"}`,
  ),
  "Other costs:",
  ...FEES.other.map((o) => `- ${o.item}: ${ugx(o.amount)}`),
  FEES.notes,
].join("\n");

// The school motto, as written on the school logo.
export const MOTTO = "Hard Work Pays";

// PLACEHOLDER contact details: replace with the school's real phone, email and address.
export const CONTACT = {
  phone: "+256 700 000 000",
  phoneHref: "tel:+256700000000",
  email: "info@fahadsprings.ac.ug",
  location: "Kampala, Uganda",
  hours: "Mon – Fri, 7:30am – 5:00pm",
  saturdayHours: "Sat, 8:00am – 1:00pm (office only)",
};

// Months only: exact opening and closing dates follow the Ministry of Education and Sports calendar.
export const TERMS = [
  {
    name: "Term I",
    period: "February – May",
    note: "New academic year begins; main intake for all classes.",
  },
  { name: "Term II", period: "May – August", note: "Mid-year assessments and sports season." },
  {
    name: "Term III",
    period: "September – December",
    note: "PLE for P.7, promotional exams and Speech Day.",
  },
];

export const ENTRY_AGES = [
  { level: "Baby Class", age: "3 years" },
  { level: "Middle Class", age: "4 years" },
  { level: "Top Class", age: "5 years" },
  { level: "Primary One (P.1)", age: "6 years" },
  { level: "P.2 – P.7", age: "By previous report card and placement interview" },
];

export const ADMISSION_DOCUMENTS = [
  "Completed admission form",
  "Copy of the child's birth certificate",
  "Most recent school report card (P.2 and above)",
  "Two recent passport photographs",
  "Copy of the child's immunisation card (Nursery and P.1)",
  "Copy of the parent's or guardian's National ID",
];

export const DAY_REQUIREMENTS = [
  "Full school uniform and black shoes",
  "School bag, exercise books, pens and pencils",
  "Mathematical set (P.4 and above)",
  "Qur'an or Juz' Amma and a prayer mat",
  "Water bottle and a packed break snack",
  "Two reams of photocopying paper per term",
];

export const BOARDING_REQUIREMENTS = [
  "Mattress, two pairs of bedsheets, blanket and mosquito net",
  "Metallic suitcase with padlock",
  "Basin, bucket, jerrycan and personal toiletries",
  "Plate, cup, spoon and a water bottle",
  "Casual wear, sports wear, sandals and a sweater",
  "Prayer garments, Qur'an and prayer mat",
];

export const PAYMENT_METHODS = [
  {
    method: "Bank deposit",
    detail:
      "Pay at the school's bank using the bank slip issued by the bursar's office, then present the stamped slip.",
  },
  {
    method: "Mobile money",
    detail:
      "Pay by MTN Mobile Money or Airtel Money using the learner's payment code from the bursar.",
  },
  {
    method: "School bursar",
    detail:
      "Receipts are issued at the bursar's office for every payment. Please keep them for your records.",
  },
];

export const DAILY_ROUTINE = [
  { time: "7:30am", activity: "Arrival, morning du'a and assembly" },
  { time: "8:00am", activity: "Morning lessons (secular curriculum)" },
  { time: "10:30am", activity: "Break and porridge" },
  { time: "11:00am", activity: "Lessons continue" },
  { time: "1:00pm", activity: "Dhuhr prayer and lunch" },
  { time: "2:00pm", activity: "Qur'an, Arabic and Islamic studies" },
  { time: "4:00pm", activity: "Asr prayer, games, clubs and co-curricular activities" },
  { time: "5:00pm", activity: "Day learners go home; boarders begin evening routine" },
];

const list = (items: string[]) => items.map((i) => `- ${i}`).join("\n");

export const SCHOOL_INFO = `
School: Fahad Springs Junior School, a Ugandan Muslim primary school in Kampala, Uganda.
Motto: ${MOTTO}.
Mission: To provide quality integrated education that develops learners spiritually, intellectually, morally and physically.
Vision: A generation of God-fearing, knowledgeable and skilled leaders serving Uganda and the Ummah.
Values: Taqwa (God-consciousness), Ihsan (excellence), honesty, discipline, respect and compassion.
Options: Day and boarding.
Sections: Nursery (Baby, Middle & Top class); Lower Primary (P.1 – P.3); Upper Primary (P.4 – P.7, preparing for PLE).
Secular curriculum (Uganda NCDC national syllabus): English, Mathematics, Integrated Science, Social Studies & Religious Education, Literacy & Reading, Computer studies, Music, Art & Physical Education.
Islamic curriculum (theology): Qur'an recitation & Tajweed, Hifdh (memorisation), Arabic language, Tawheed & Aqeedah, Fiqh (salah, wudhu, fasting), Hadith & Seerah of the Prophet (peace be upon him), Akhlaq (Islamic manners). Daily prayers and adab are part of school life.
Admissions: New learners are welcomed each term, Nursery through P.7. Steps: 1) Visit the school or call to pick up an admission form. 2) Return the form with the child's birth certificate, previous report card and 2 passport photos. 3) The child sits a short placement interview. 4) Receive the admission letter, fees structure and requirements list.
Contact: Phone ${CONTACT.phone}; Email ${CONTACT.email}; Location ${CONTACT.location}. Office hours ${CONTACT.hours}; ${CONTACT.saturdayHours}.
School terms (three per year; exact dates follow the Ministry of Education and Sports calendar):
${TERMS.map((t) => `- ${t.name}: ${t.period}. ${t.note}`).join("\n")}
Entry ages:
${ENTRY_AGES.map((a) => `- ${a.level}: ${a.age}`).join("\n")}
Documents needed for admission:
${list(ADMISSION_DOCUMENTS)}
Requirements for day learners:
${list(DAY_REQUIREMENTS)}
Extra requirements for boarders:
${list(BOARDING_REQUIREMENTS)}
A typical school day:
${DAILY_ROUTINE.map((r) => `- ${r.time}: ${r.activity}`).join("\n")}
Assessment: beginning-of-term, mid-term and end-of-term examinations, with a report card every term. P.7 candidates sit the Primary Leaving Examination (PLE) set by UNEB in English, Mathematics, Integrated Science and Social Studies with Religious Education.
Co-curricular activities: football, netball, athletics, swimming, music dance and drama, debate, Qur'an and Islamic quiz competitions, scouts and art club.
How to pay fees:
${PAYMENT_METHODS.map((p) => `- ${p.method}: ${p.detail}`).join("\n")}
Fees:
${feesText}
`.trim();
