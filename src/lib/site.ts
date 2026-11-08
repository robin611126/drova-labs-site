/* ---------------------------------------------------------------------------
   SITE CONTENT CONFIG
   Everything marked PLACEHOLDER renders visibly on the site. Replace it with
   real information before launch. Do not publish client names, logos or
   quotes you do not have permission to use.
--------------------------------------------------------------------------- */

export const SITE_URL = "https://drovalabs.com";
export const SITE_NAME = "Drova Labs";
export const CONTACT_EMAIL = "hello@drovalabs.com";

/** PLACEHOLDER - your Cal.com / Calendly link. Set to null to hide the button. */
export const BOOKING_URL: string | null = "https://cal.com/your-handle/intro";

/** PLACEHOLDER - showreel file in /public/reel. Set to null to hide the reel. */
export const REEL_SRC: string | null = "/reel/showreel.mp4";
export const REEL_POSTER: string | null = null;

export const NAV_ITEMS = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

/** PLACEHOLDER - replace "#" with your real profile URLs, or delete entries. */
export const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Vimeo", href: "#" },
  { label: "YouTube", href: "#" },
] as const;

/* ------------------------------- work ----------------------------------- */
export type Project = {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  /** Path in /public, e.g. "/work/project-one.jpg". Null shows the gradient. */
  image: string | null;
  tone: string;
};

/** PLACEHOLDER - six sample entries. Each one gets a /work/[slug] page. */
export const WORK: Project[] = [
  ["project-one", "AI Film", "linear-gradient(140deg, #101820 0%, #0a0a0a 60%)"],
  ["project-two", "Product CGI", "linear-gradient(140deg, #1a1420 0%, #0a0a0a 60%)"],
  ["project-three", "Social Campaign", "linear-gradient(140deg, #0e1a1c 0%, #0a0a0a 60%)"],
  ["project-four", "Brand Film", "linear-gradient(140deg, #1c1610 0%, #0a0a0a 60%)"],
  ["project-five", "3D Animation", "linear-gradient(140deg, #101a14 0%, #0a0a0a 60%)"],
  ["project-six", "Performance Creative", "linear-gradient(140deg, #1a1016 0%, #0a0a0a 60%)"],
].map(([slug, category, tone], i) => ({
  slug,
  title: `Project title ${i + 1}`,
  category,
  client: "Client name",
  year: "2026",
  summary: "One-line summary of the project goes here.",
  challenge:
    "PLACEHOLDER - describe the brief: what the client needed, the deadline and what made it hard.",
  approach:
    "PLACEHOLDER - describe how you approached it: direction, tools, pipeline and iterations.",
  outcome:
    "PLACEHOLDER - describe the result: deliverables shipped and any metrics you are allowed to share.",
  image: null,
  tone,
}));

/* ---------------------------- social proof ------------------------------ */
/** PLACEHOLDER - client names (rendered as text logos until you add SVGs). */
/** Past clients - logos live in /public/clients. width/height = intrinsic size (for aspect ratio). */
export const CLIENTS = [
  { name: "Scholar IQ", logo: "/clients/scholar-iq.svg", width: 2376, height: 656 },
  { name: "findHR", logo: "/clients/findhr.png", width: 145, height: 35 },
  { name: "Ace Tech", logo: "/clients/ace-tech.png", width: 1024, height: 471 },
  { name: "BE Infinity", logo: "/clients/be-infinity.jpg", width: 1024, height: 1024 },
  { name: "Bharosa 365", logo: "/clients/bharosa-365.png", width: 240, height: 240 },
  { name: "Indian Press Union", logo: "/clients/indian-press-union.png", width: 1024, height: 1024 },
];

/** PLACEHOLDER - only publish real figures. */
export const STATS = [
  { value: "00+", label: "Projects delivered" },
  { value: "00", label: "Countries served" },
  { value: "0x", label: "Faster than traditional production" },
];

/** PLACEHOLDER - only publish quotes you have permission to use. */
export const TESTIMONIALS = [
  { quote: "Testimonial quote goes here. Keep it short and specific about the result.", name: "Full Name", role: "Role, Company" },
  { quote: "Second testimonial quote goes here. Mention speed, quality or outcome.", name: "Full Name", role: "Role, Company" },
  { quote: "Third testimonial quote goes here. Real quotes convert best.", name: "Full Name", role: "Role, Company" },
];

/* ------------------------------- pricing -------------------------------- */
/** PLACEHOLDER - set your real prices and inclusions. */
export const PACKAGES = [
  {
    name: "Sprint",
    price: "From $X",
    blurb: "A single hero asset, fast.",
    features: ["1 short film or product spot", "2 rounds of revisions", "Delivery in X days"],
    featured: false,
  },
  {
    name: "Campaign",
    price: "From $X",
    blurb: "A full launch kit across formats.",
    features: ["Hero film + cutdowns", "Stills and social formats", "3 rounds of revisions", "Delivery in X weeks"],
    featured: true,
  },
  {
    name: "Retainer",
    price: "$X / month",
    blurb: "Ongoing creative volume.",
    features: ["Monthly asset quota", "Priority turnaround", "Dedicated creative lead"],
    featured: false,
  },
];

/* --------------------------------- team --------------------------------- */
/** PLACEHOLDER */
export const ABOUT_TEXT =
  "PLACEHOLDER - two or three sentences on who you are, where you are based and why you started Drova Labs.";
export const TEAM = [
  { name: "Full Name", role: "Founder, Creative Director" },
  { name: "Full Name", role: "Head of CGI" },
  { name: "Full Name", role: "AI Pipeline Lead" },
];

/* ---------------------------------- faq --------------------------------- */
/** Review these answers - they describe your policies. */
export const FAQS = [
  {
    q: "Who owns the rights to the work?",
    a: "PLACEHOLDER - state your usage and ownership terms, e.g. full commercial rights transfer on final payment.",
  },
  {
    q: "Is AI-generated content safe to use commercially?",
    a: "PLACEHOLDER - explain which tools and licences you use and how you avoid copyrighted material.",
  },
  {
    q: "How fast is turnaround?",
    a: "PLACEHOLDER - typical timelines per package.",
  },
  {
    q: "How many revisions are included?",
    a: "PLACEHOLDER - your revision policy.",
  },
  {
    q: "What do you need from us to start?",
    a: "PLACEHOLDER - e.g. brief, brand guidelines, product files or references, and a deposit.",
  },
];
