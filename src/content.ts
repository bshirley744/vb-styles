/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE COPY AND IMAGES LIVE IN THIS FILE.
 *  To update the site, edit here — you should not need to touch
 *  anything in src/app or src/components.
 *
 *  To swap a photo: drop your file into public/images/... using
 *  the same filename, or change the `src` below.
 *  Portrait photos look best at 1000×1250 (4:5). Hero: 2000×1250.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  /** Display name used in the nav, footer, and browser tab. */
  name: "VB Styles",
  /** Shown under the logo in the footer. */
  tagline: "Personal styling for the moments that matter",
  location: "City, State",
  email: "hello@example.com",
  phone: "", // optional — leave "" to hide
  instagram: {
    handle: "@yourhandle",
    url: "https://instagram.com/yourhandle",
  },
  /** Used for SEO + link previews. */
  seo: {
    title: "VB Styles — Personal Stylist",
    description:
      "Personal, event, editorial, and bridal styling. Wardrobe direction for the moments that matter.",
  },
};

export const nav = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
];

/* ── LANDING PAGE ─────────────────────────────────────────── */

export const home = {
  hero: {
    image: { src: "/images/hero.jpg", alt: "Styled editorial portrait" },
    eyebrow: "Personal Stylist",
    heading: "Dress like the person you're becoming.",
    sub: "Wardrobe direction, event styling, and editorial work.",
    cta: { label: "View the portfolio", href: "/portfolio" },
  },

  intro: {
    eyebrow: "About",
    heading:
      "Styling is not about clothes. It's about being seen the way you intend.",
    body: [
      "Replace this with two short paragraphs in her voice — who she works with, what a session feels like, and what makes her approach hers. Keep it personal; this is the paragraph people read before they decide to reach out.",
      "A second paragraph can cover background: years in the industry, notable work, where she's based, and who she travels for.",
    ],
    portrait: { src: "/images/portrait.jpg", alt: "Portrait of the stylist" },
  },

  /** Category teasers — these mirror the four portfolio sections. */
  categoriesHeading: "What I do",

  testimonial: {
    quote:
      "Replace with a real client quote. Two sentences is the sweet spot — one about the experience, one about the result.",
    attribution: "Client Name, Event or Role",
  },

  cta: {
    heading: "Let's talk about your wardrobe.",
    body: "Tell me about the occasion, the timeline, and what you're hoping to feel. I'll come back with a plan.",
    label: "Inquire now",
  },
};

/* ── SERVICES PAGE ────────────────────────────────────────── */

export const services = {
  eyebrow: "Services",
  heading: "How we can work together",
  intro:
    "Every engagement starts with a conversation. Below are the most common ways clients work with me — but if what you need sits between two of these, say so and we'll shape it.",

  packages: [
    {
      name: "Personal Styling",
      price: "From $X",
      summary: "Ongoing wardrobe direction for everyday life.",
      includes: [
        "Closet audit and edit",
        "Personal style profile and color direction",
        "Seasonal shopping list with sourcing",
        "Outfit lookbook you can actually use",
      ],
    },
    {
      name: "Event Styling",
      price: "From $X",
      summary: "One night, fully handled — from sourcing to final fitting.",
      includes: [
        "Discovery call and mood direction",
        "Pulls from boutiques and designer showrooms",
        "In-person fitting and tailoring coordination",
        "Accessories, shoes, and day-of steaming",
      ],
    },
    {
      name: "Editorial & Media",
      price: "Day rate",
      summary: "Wardrobe for shoots, press, broadcast, and brand campaigns.",
      includes: [
        "Concept development with the creative team",
        "Sourcing, credits, and returns handled end to end",
        "On-set styling and continuity",
        "Talent and brand liaison",
      ],
    },
    {
      name: "Bridal",
      price: "Custom",
      summary: "The dress, and everything around it.",
      includes: [
        "Bridal appointment accompaniment",
        "Rehearsal, ceremony, and reception looks",
        "Party and family coordination",
        "Honeymoon and pre-wedding events",
      ],
    },
  ],

  process: {
    heading: "What the process looks like",
    steps: [
      { title: "Inquire", body: "Send a note with the occasion and timeline." },
      {
        title: "Consult",
        body: "A call to understand your goals, budget, and body.",
      },
      { title: "Source", body: "I pull, shop, and build options around you." },
      { title: "Fit", body: "We refine in person, with tailoring if needed." },
      {
        title: "Deliver",
        body: "You get looks documented so they keep working.",
      },
    ],
  },

  faq: [
    {
      q: "Do you travel?",
      a: "Replace with her real answer — where she's based and what travel looks like.",
    },
    {
      q: "Do I need to buy everything you pull?",
      a: "Replace with her real answer on purchasing, rentals, and returns.",
    },
    {
      q: "What's the lead time?",
      a: "Replace with typical booking lead time for events versus editorial.",
    },
  ],
};

/* ── PORTFOLIO PAGE ───────────────────────────────────────── */

export type PortfolioImage = {
  src: string;
  alt: string;
  /** Shown beneath the image — client, event, publication, location. */
  caption?: string;
};

export type Category = {
  slug: string;
  title: string;
  blurb: string;
  quote?: { text: string; attribution: string };
  images: PortfolioImage[];
};

const img = (cat: string, n: number, caption: string): PortfolioImage => ({
  src: `/images/portfolio/${cat}-${n}.jpg`,
  alt: caption,
  caption,
});

const categories: Category[] = [
  {
    slug: "personal",
    title: "Personal Styling",
    blurb:
      "Wardrobes built to be worn on a Tuesday. Closet edits, capsule building, and the ongoing work of dressing like yourself.",
    quote: {
      text: "Replace with a client quote about the personal styling experience.",
      attribution: "Client Name",
    },
    images: [
      img("personal", 1, "Client Name — capsule wardrobe"),
      img("personal", 2, "Client Name — closet edit"),
      img("personal", 3, "Client Name — seasonal refresh"),
      img("personal", 4, "Client Name — travel capsule"),
      img("personal", 5, "Client Name — workwear direction"),
      img("personal", 6, "Client Name — weekend looks"),
    ],
  },
  {
    slug: "event",
    title: "Event Styling",
    blurb:
      "Galas, premieres, award nights, and the dinner that matters more than it should. Sourced, fitted, and finished.",
    quote: {
      text: "Replace with a client quote about an event or red carpet look.",
      attribution: "Client Name, Event",
    },
    images: [
      img("event", 1, "Client Name — Gala, City"),
      img("event", 2, "Client Name — Awards night"),
      img("event", 3, "Client Name — Premiere"),
      img("event", 4, "Client Name — Benefit dinner"),
      img("event", 5, "Client Name — Gallery opening"),
      img("event", 6, "Client Name — New Year's"),
    ],
  },
  {
    slug: "editorial",
    title: "Editorial & Media",
    blurb:
      "Shoots, campaigns, press days, and broadcast. Concept through credits, with the returns handled.",
    quote: {
      text: "Replace with a quote from a photographer, editor, or brand.",
      attribution: "Name, Publication or Brand",
    },
    images: [
      img("editorial", 1, "Publication — editorial spread"),
      img("editorial", 2, "Brand — campaign"),
      img("editorial", 3, "Publication — cover story"),
      img("editorial", 4, "Network — on-air styling"),
      img("editorial", 5, "Brand — lookbook"),
      img("editorial", 6, "Publication — portrait series"),
    ],
  },
  {
    slug: "bridal",
    title: "Bridal",
    blurb:
      "The dress and everything around it — rehearsal, ceremony, reception, and the week that surrounds them.",
    quote: {
      text: "Replace with a quote from a bride about the process.",
      attribution: "Bride Name, Venue",
    },
    images: [
      img("bridal", 1, "Bride Name — Venue, Location"),
      img("bridal", 2, "Bride Name — ceremony"),
      img("bridal", 3, "Bride Name — reception look"),
      img("bridal", 4, "Bride Name — rehearsal dinner"),
      img("bridal", 5, "Bridal party"),
      img("bridal", 6, "Bride Name — portraits"),
    ],
  },
];

export const portfolio = {
  eyebrow: "Portfolio",
  heading: "Selected work",
  intro:
    "A cross-section of recent work. Captions carry the client, the occasion, and the location — swap them for the real details.",
  categories,
};
