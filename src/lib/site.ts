/* ---------------------------------------------------------------------------
   SITE CONTENT CONFIG
   Everything marked PLACEHOLDER renders visibly on the site. Replace it with
   real information before launch. Do not publish client names, logos or
   quotes you do not have permission to use.
--------------------------------------------------------------------------- */

export const SITE_URL = "https://drovalabs.com";
export const SITE_NAME = "Drova Labs";
export const CONTACT_EMAIL = "hello@drovalabs.com";

/** Optional Cal.com / Calendly link. Set to null to hide the button until ready. */
export const BOOKING_URL: string | null = null;

/** Showreel configuration: Vimeo ID or local MP4 path */
export const REEL_VIMEO_ID: string | null = "1245760213";
export const REEL_SRC: string | null = null;
export const REEL_POSTER: string | null = "/reel/poster.jpg";

export const NAV_ITEMS = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

export const SOCIALS = [
  { label: "YouTube", href: "https://www.youtube.com/@drovalabs" },
  { label: "Instagram", href: "https://www.instagram.com/drovalabs" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/drovalabs" },
] as const;

/* ------------------------------- work ----------------------------------- */
export type Project = {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  tools?: string;
  challenge: string;
  approach: string;
  outcome: string;
  /** Path in /public, e.g. "/work/project-one.jpg". Null shows the gradient. */
  image: string | null;
  /** Optional YouTube video ID - embedded as the hero on the case study page. */
  youtubeId?: string;
  tone: string;
};

/** Real, published projects. Leave challenge/approach/outcome empty to hide that block. */
export const WORK: Project[] = [
  {
    slug: "be-infinity",
    title: "BE Infinity",
    category: "AI Commercial Ad",
    client: "BE Infinity",
    year: "2025",
    summary: "Brand commercial celebrating women empowerment, crafted with generative AI.",
    tools: "Google Flow",
    challenge:
      "BE Infinity needed a bold, memorable commercial ad that established their brand presence in the skincare space while centering a strong vision of women empowerment.",
    approach:
      "Directing AI synthesis with Google Flow, we engineered cinematic visuals, nuanced expressions, and warm golden lighting to capture confidence and modern femininity without traditional production bloat.",
    outcome:
      "Shipped a cinematic, high-impact commercial spot that delivered on the brand's vision with broadcast-grade fidelity at an order of magnitude faster turnaround.",
    image: "/work/be-infinity.jpg",
    youtubeId: "19mkTN1lt8U",
    tone: "linear-gradient(140deg, #2a1d16 0%, #0a0a0a 60%)",
  },
  {
    slug: "yogita-malik-classes",
    title: "Yogita Malik Classes",
    category: "AI Education Commercial",
    client: "Yogita Malik Coaching Classes",
    year: "2025",
    summary: "Inspiring commercial ad capturing the journey of academic ambition and mentorship.",
    tools: "Generative AI Pipeline",
    challenge:
      "Yogita Malik Coaching Classes needed an evocative, story-driven commercial that connected emotionally with aspiring students and parents, communicating trust, discipline, and modern mentorship in education.",
    approach:
      "We crafted a warm, relatable campus narrative centered on student aspiration and mentorship. Using an advanced generative AI video pipeline, we directed authentic character interactions, cinematic campus environments, and natural golden-hour cinematography.",
    outcome:
      "Delivered a 45-second high-conversion commercial spot that elevated the institute's brand positioning, building immediate trust with incoming cohorts while avoiding costly on-location shoot logistics.",
    image: "/work/yogita-malik.jpg",
    youtubeId: "T47mnkE_vCY",
    tone: "linear-gradient(140deg, #241c14 0%, #0a0a0a 60%)",
  },
  {
    slug: "bharosa-365",
    title: "Bharosa 365",
    category: "AI Brand Film",
    client: "Bharosa 365",
    year: "2025",
    summary: "Emotional family-first commercial highlighting peace of mind across distances.",
    tools: "Generative AI Pipeline",
    challenge:
      "Bharosa 365 needed an emotionally resonant ad film that spoke directly to NRI children and Indian families — turning an abstract digital safety & care app into a deeply human story of trust.",
    approach:
      "We directed a heartfelt narrative bridging New York and India over a family video call. Every facial micro-expression, living-room detail, and emotional beat was art-directed through our generative cinema pipeline.",
    outcome:
      "Produced a deeply relatable brand film that anchored Bharosa 365's launch messaging around family trust and everyday reliability.",
    image: "/work/bharosa-365.jpg",
    youtubeId: "KJ0D79r1V5M",
    tone: "linear-gradient(140deg, #102422 0%, #0a0a0a 60%)",
  },
  {
    slug: "redbull-spec",
    title: "Red Bull — Wedding Rush",
    category: "AI Spec Commercial",
    client: "Red Bull (Concept)",
    year: "2025",
    summary: "High-energy 100% AI-generated spec commercial set inside an Indian wedding.",
    tools: "Generative AI Pipeline",
    challenge:
      "Reimagine Red Bull's iconic high-octane energy inside the vibrant chaos and cultural richness of a traditional Indian wedding — without a single camera, crew, or location permit.",
    approach:
      "We combined split-screen storytelling, ornate bridal and groom wardrobe styling, product-accurate can integration, and dynamic pacing to match Red Bull's unmistakable global tone.",
    outcome:
      "A 100% AI-generated spec commercial demonstrating how global beverage brands can localize campaigns at cinema quality in days.",
    image: "/work/redbull.jpg",
    youtubeId: "FuhBngh3KxA",
    tone: "linear-gradient(140deg, #241418 0%, #0a0a0a 60%)",
  },
];

/* ---------------------------- social proof ------------------------------ */
/** Past clients - logos live in /public/clients. width/height = intrinsic size (for aspect ratio). */
export const CLIENTS = [
  { name: "Scholar IQ", logo: "/clients/scholar-iq.svg", width: 2376, height: 656 },
  { name: "findHR", logo: "/clients/findhr.png", width: 145, height: 35 },
  { name: "Ace Tech", logo: "/clients/ace-tech.png", width: 1024, height: 471 },
  { name: "BE Infinity", logo: "/clients/be-infinity-wordmark.png", width: 760, height: 460 },
  { name: "Bharosa 365", logo: "/clients/bharosa-365.png", width: 240, height: 240 },
  { name: "Indian Press Union", logo: "/clients/indian-press-union.png", width: 1024, height: 1024 },
];

/** Flip to true once STATS / TESTIMONIALS below contain real content. Hidden while they're placeholders. */
export const SHOW_STATS = false;
export const SHOW_TESTIMONIALS = false;

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
export const PACKAGES = [
  {
    name: "Sprint",
    price: "Custom",
    blurb: "A single hero commercial or product spot, shipped fast.",
    features: [
      "1 hero AI commercial or 3D product film (30–45s)",
      "Concept, script, art direction & sound design",
      "2 rounds of structured revisions",
      "Delivered in 5–7 business days",
    ],
    featured: false,
  },
  {
    name: "Campaign",
    price: "Most Popular",
    blurb: "A complete launch kit engineered across every format.",
    features: [
      "Hero commercial film + 3 social cutdowns (16:9, 9:16, 1:1)",
      "High-res product stills & campaign key visuals",
      "3 rounds of revisions at each gate",
      "Delivered in 10–14 business days",
    ],
    featured: true,
  },
  {
    name: "Retainer",
    price: "Monthly",
    blurb: "Dedicated creative pipeline for ongoing ad volume.",
    features: [
      "Monthly quota of ad spots, hooks & creative testing",
      "Priority 72-hour turnaround on variations",
      "Dedicated creative director & Slack channel",
      "Full commercial buyout on every deliverable",
    ],
    featured: false,
  },
];

/* --------------------------------- team --------------------------------- */
export const ABOUT_TEXT =
  "Drova Labs is an AI-first creative studio founded by Bhavik, Shivam, and Himashree. We combine high-taste human creative direction with bleeding-edge generative pipelines to produce broadcast-grade ad films, commercials, and brand visuals in days, not months.";

export type TeamMember = {
  name: string;
  role: string;
  image?: string | null;
};

export const TEAM: TeamMember[] = [
  { name: "Bhavik", role: "Co-Founder · Sales & Team Management" },
  { name: "Shivam", role: "Co-Founder · Marketing & Backend Operations" },
  { name: "Himashree", role: "Co-Founder · Creative Director" },
];

/* ---------------------------------- faq --------------------------------- */
export const FAQS = [
  {
    q: "Who owns the rights to the work?",
    a: "You do. Upon final payment, 100% of the commercial usage and broadcast rights for the final delivered assets transfer directly to your brand across all paid, organic, and broadcast channels.",
  },
  {
    q: "Is AI-generated content safe to use commercially?",
    a: "Yes. We run enterprise-licensed generative pipelines (including Google Flow, commercial 3D/CGI, and licensed sound libraries) and art-direct original scenes from scratch — never scraping competitor work or unlicensed likenesses.",
  },
  {
    q: "How fast is turnaround?",
    a: "A single hero spot (Sprint) typically ships in 5–7 business days from brief sign-off. Full multi-format launch kits (Campaign) take 10–14 business days — roughly 5× faster than traditional live-action shoots.",
  },
  {
    q: "How many revisions are included?",
    a: "We work through four clear sign-off gates (Brief, Direction, Production, Delivery) so nothing surprises you at the end. Sprints include 2 full revision rounds and Campaigns include 3 rounds.",
  },
  {
    q: "What do you need from us to start?",
    a: "A 20-minute brief or written overview, your brand guidelines or product photos/CAD files, any reference moodboards you love, and a 50% kickoff deposit.",
  },
];
