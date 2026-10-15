// ------------------------------------------------------------------
//  Everything you'd normally want to change lives in this one file.
//  Lines marked TODO still have placeholder details.
// ------------------------------------------------------------------

export const site = {
  name: "Pep Web Studio",
  tagline: "Websites with a bit of pep.",
  area: "Mornington Peninsula, VIC",
  phone: "0411 701 766",
  email: "", // TODO: your business email (hidden until filled in)
  abn: "78 700 315 677",
  // Free form-to-email service. Sign up at https://web3forms.com with the email
  // you want enquiries sent to, then paste the Access Key here. (It's safe to be public.)
  formKey: "", // TODO
};
// Your web address is set in astro.config.mjs

export const work = [
  {
    show: true,
    name: "The Wooden Boatshop",
    place: "Sorrento",
    kind: "Website redesign",
    image: "work/boatshop.webp",
    summary:
      "A world-class look for a boatbuilder that's been on the Sorrento foreshore since 1990.",
    points: [
      "Online shop with secure card payments",
      "Boat range and boats-for-sale listings",
      "An editor the team can use without touching code",
      "Enquiry form that emails the workshop straight away",
    ],
  },
  {
    show: true,
    name: "Furrical Blessing",
    place: "Handmade costume studio",
    kind: "Commissions website",
    image: "work/furrical.webp",
    summary:
      "A single-page site styled from the studio's own price-sheet artwork, so it feels like it was always part of the brand.",
    points: [
      "Prices, gallery, queue and FAQ on one page",
      "Quote request form",
      "Simple editing panel for prices and photos",
      "Light and dark mode",
    ],
  },
];

export const services = [
  {
    name: "Quick fixes",
    price: "from $150",
    blurb: "For a site that's mostly fine but has a few things wrong.",
    items: ["Broken links and pages", "\"Not secure\" warnings", "Wrong details on Google", "Outdated info"],
  },
  {
    name: "One-page website",
    price: "from $900",
    blurb: "Perfect for food trucks, tradies and new businesses.",
    items: ["Menu or services, hours and location", "Click-to-call and map", "Works beautifully on phones", "Google Business Profile setup"],
  },
  {
    name: "Business website",
    price: "from $1,800",
    blurb: "A proper site for an established local business.",
    items: ["4-6 pages, custom design", "Update it yourself, no code", "Set up to be found on Google", "Contact and booking forms"],
    featured: true,
  },
  {
    name: "Shop or bookings",
    price: "from $4,000",
    blurb: "Sell products or take bookings online.",
    items: ["Online shop with card payments", "Booking or order-ahead systems", "Product and stock editor", "Everything in Business website"],
  },
];

export const carePlan = {
  price: "from $80/month",
  items: ["Hosting, security and backups", "Small edits whenever you need them", "Menu, price and hours updates", "A quick health check every month"],
};

export const steps = [
  { title: "Free website check", text: "Send me your web address. I'll reply with a short, plain-English list of what's working and what isn't." },
  { title: "Fixed quote", text: "You get one clear price in writing, covering what's included and when it'll be done. No hourly surprises." },
  { title: "I build it", text: "You get a preview link to watch it come together, with rounds of changes built in." },
  { title: "Launch and care", text: "We go live, I show you how to make updates, and I can look after it from there." },
];

export const faqs = [
  { q: "Do I own my website?", a: "Yes. Your domain is registered in your name, and the site is yours. If you ever want to move on, I'll hand everything over." },
  { q: "Can I update it myself?", a: "Yes. Most sites come with a simple editor for text, photos, menus and prices, plus a short guide. Or I can do updates for you on a care plan." },
  { q: "How long does it take?", a: "Quick fixes usually take a few days. A one-page site takes about a week, and a full business website two to four weeks, depending on how quickly we get content together." },
  { q: "I already have a website. Do I need a new one?", a: "Not always. Often a few fixes make a big difference. The free check will tell you honestly whether a tidy-up or a rebuild makes more sense." },
  { q: "What do I need to get started?", a: "Just a chat. If you have a logo, photos or wording you like, great. If not, I can help with those too." },
  { q: "Where are you based?", a: "On the Mornington Peninsula. I'm happy to meet in person anywhere from Frankston to Portsea, or work over phone and email." },
];
