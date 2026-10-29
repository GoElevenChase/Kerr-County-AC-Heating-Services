/**
 * The shared business content for both visual directions.
 * Facts, copy, and links below come from kerrcountyac.com (October 2026).
 * Keep genuine business information here so changing a design never changes the offer.
 */
export interface LinkItem {
  readonly label: string;
  readonly href: string;
}

export interface SiteContent {
  readonly business: {
    readonly name: string;
    readonly shortName: string;
    readonly phone: string;
    readonly phoneHref: string;
    readonly smsHref: string;
    readonly url: string;
    readonly bookingUrl: string;
    readonly tagline: string;
    readonly description: string;
    readonly address: { readonly street: string; readonly locality: string; readonly mapUrl: string };
    readonly hours: readonly { readonly days: string; readonly time: string }[];
    readonly emergency: string;
    readonly googleReviews: string;
    readonly awards: readonly string[];
  };
  readonly services: readonly {
    readonly id: string;
    readonly title: string;
    readonly href: string;
    readonly summary: string;
  }[];
  readonly vip: {
    readonly href: string;
    readonly benefits: readonly string[];
    readonly pricing: readonly string[];
  };
  readonly faqs: readonly {
    readonly id: string;
    readonly question: string;
    readonly answer: string;
  }[];
  readonly serviceAreas: readonly string[];
  readonly footer: {
    readonly quickLinks: readonly LinkItem[];
    readonly serviceAreaLinks: readonly LinkItem[];
    readonly social: readonly LinkItem[];
    readonly chambers: readonly { readonly name: string; readonly image: string; readonly width: number; readonly height: number; readonly href?: string }[];
    readonly legal: readonly LinkItem[];
    readonly since: number;
  };
  readonly links: {
    readonly about: string;
    readonly reviews: string;
    readonly faq: string;
    readonly serviceArea: string;
    readonly miniSplit: string;
    readonly acRepair: string;
    readonly furnaceRepair: string;
    readonly contact: string;
  };
}

const site = "https://kerrcountyac.com";

export const siteContent: SiteContent = {
  business: {
    name: "Kerr County A/C & Heating Services",
    shortName: "Kerr County A/C & Heating",
    phone: "830-988-4710",
    phoneHref: "tel:+18309884710",
    smsHref: "sms:+18309884710",
    url: site,
    bookingUrl: "https://book.housecallpro.com/book/Kerr-County-A-C-Heating/b0fc351eb2774ed996172a59af48606c?v2=true",
    tagline: "Kerrville’s Trusted Family AC Repair Service",
    description:
      "Family-owned HVAC service in Kerrville, TX: AC repair and installation, furnace and heat pump service, mini-split systems, and indoor air quality solutions including UV light.",
    address: {
      street: "140 Goat Creek Rd Cutoff",
      locality: "Kerrville, TX 78028",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=140+Goat+Creek+Rd+Cutoff+Kerrville+TX+78028",
    },
    hours: [
      { days: "Mon - Fri", time: "8am - 5pm" },
      { days: "Sat", time: "8am - 12pm" },
      { days: "Sun", time: "Closed" },
    ],
    emergency: "Emergency service available",
    googleReviews: "905",
    awards: ["Best Heating & Cooling Company 2024", "One of the Best 2025"],
  },
  services: [
    { id: "ac-repair", title: "AC Repair", href: `${site}/ac-repair/`, summary: "Fast diagnosis, refrigerant adjustment, parts replacement, and repairs that get your home cool again." },
    { id: "ac-installation", title: "AC Installation", href: `${site}/ac-installation/`, summary: "New air conditioning installation and replacement, sized and set up for your home." },
    { id: "furnace-repair", title: "Furnace Repair", href: `${site}/furnace-repair/`, summary: "Flame control, venting, heat exchanger, thermostat, and gas-leak checks to keep heat safe and steady." },
    { id: "furnace-installation", title: "Furnace Installation", href: `${site}/furnace-installation/`, summary: "Complete furnace installation for dependable, efficient heat through the cooler months." },
    { id: "heat-pump", title: "Heat Pump Repair & Installation", href: `${site}/heat-pump-repair/`, summary: "Repair and installation of heat pumps for efficient year-round heating and cooling." },
    { id: "mini-split", title: "Mini-Split Installation & Repair", href: `${site}/mini-split-installation/`, summary: "Ductless Mitsubishi and Samsung mini-splits for additions, garages, sunrooms, and bonus rooms." },
    { id: "air-quality", title: "Indoor Air Quality / UV light", href: `${site}/resources/`, summary: "UV light installation to remove mold and bacteria from the air, plus HEPA filtration and air quality consultations." },
    { id: "vip", title: "VIP Maintenance Program", href: `${site}/vip-maintenance-program/`, summary: "Two yearly system checks scheduled for you, 10% off repairs, and a $49 diagnostic." },
  ],
  vip: {
    href: `${site}/vip-maintenance-program/`,
    benefits: [
      "10% off repairs",
      "Two maintenance visits per year",
      "$49 diagnostic",
      "Priority scheduling",
      "Exclusive promotions",
      "5% off system replacement",
    ],
    pricing: ["$228 per year - 1st system", "$114 per year each additional system", "$69 per year each additional mini-split"],
  },
  faqs: [
    {
      id: "service-often",
      question: "How often should I service my HVAC system?",
      answer:
        "Twice a year. A/C checks are best in the spring before the summer heat (we send reminders in March to schedule April checks), and heat checks are best before the first freeze, in the October to early November timeframe.",
    },
    {
      id: "brands",
      question: "What brands do you install and service?",
      answer:
        "For ductless mini-splits we sell Mitsubishi and Samsung systems, with efficiency up to 25.5 SEER2. For other equipment, call us at 830-988-4710 and we’ll talk through your current system and the right options for your home.",
    },
    {
      id: "emergency",
      question: "Do you offer emergency service?",
      answer:
        "Yes. Emergency service is available. Call or text 830-988-4710. Our regular hours are Mon - Fri 8am - 5pm and Sat 8am - 12pm.",
    },
    {
      id: "vip",
      question: "What is the VIP Maintenance Program?",
      answer:
        "Our VIP Maintenance Program includes two maintenance visits per year with automatic scheduling, a $49 diagnostic, 10% off repairs, priority scheduling, exclusive promotions and events, and 5% off system replacement. It’s $228 per year for the first system, $114 for each additional system, and $69 for each additional mini-split.",
    },
    {
      id: "areas",
      question: "What areas do you serve?",
      answer:
        "We serve Kerrville and Kerr County, plus Bandera, Boerne, Comfort, Center Point, Fredericksburg, Harper, Hunt, Ingram, Medina, and Mountain Home.",
    },
    {
      id: "dusty",
      question: "My home is really dusty. Do I need my ducts cleaned?",
      answer:
        "Duct cleaning is not really effective, and with flexible attic ducts it can cause damage or tears. We can provide an Air Quality Consultation and install a UV light system and HEPA filter, and seal the grill boot to sheetrock to improve the air quality in your home.",
    },
  ],
  serviceAreas: ["Kerrville", "Comfort", "Center Point", "Harper", "Hunt", "Ingram", "Kerr County", "Mountain Home", "Bandera", "Boerne", "Fredericksburg", "Medina"],
  footer: {
    quickLinks: [
      { label: "Home", href: `${site}/` },
      { label: "About Us", href: `${site}/about-us/` },
      { label: "Service Area", href: `${site}/service-area/` },
      { label: "Pricing", href: `${site}/pricing/` },
      { label: "Resources", href: `${site}/resources/` },
      { label: "FAQ", href: `${site}/faq/` },
      { label: "VIP Program", href: `${site}/vip-maintenance-program/` },
      { label: "Reviews", href: `${site}/reviews/` },
      { label: "Contact Us", href: `${site}/contact-us/` },
    ],
    serviceAreaLinks: [
      { label: "Comfort", href: `${site}/comfort-tx/` },
      { label: "Center Point", href: `${site}/center-point-tx/` },
      { label: "Harper", href: `${site}/harper-tx/` },
      { label: "Hunt", href: `${site}/hunt-tx/` },
      { label: "Ingram", href: `${site}/ingram-tx/` },
      { label: "Kerr County", href: `${site}/service-area/` },
      { label: "Kerrville", href: `${site}/service-area/` },
      { label: "Mountain Home", href: `${site}/mountain-home-tx/` },
    ],
    social: [
      { label: "Facebook", href: "https://www.facebook.com/KerrCountyACandHeating" },
      { label: "Google", href: "https://search.google.com/local/writereview?placeid=ChIJi7UlnB_jW4YRtk4AblSs2es" },
      { label: "Yelp", href: "https://www.yelp.com/biz/kerr-county-a-c-and-heating-services-kerrville" },
    ],
    chambers: [
      { name: "Kerrville Area Chamber of Commerce", image: "/images/chamber-kerrville-area.webp", width: 235, height: 80, href: "https://business.kerrvillechamber.biz/list/Member/kerr-county-ac-and-heating-services-10955" },
      { name: "Kerr County Women’s Chamber", image: "/images/chamber-kerr-county-womens.webp", width: 235, height: 101 },
      { name: "West Kerr Chamber of Commerce", image: "/images/chamber-west-kerr.webp", width: 150, height: 150 },
    ],
    legal: [
      { label: "Privacy Policy", href: `${site}/privacy-policy/` },
      { label: "Terms & Conditions", href: `${site}/terms-and-conditions/` },
    ],
    since: 2022,
  },
  links: {
    about: `${site}/about-us/`,
    reviews: `${site}/reviews/`,
    faq: `${site}/faq/`,
    serviceArea: `${site}/service-area/`,
    miniSplit: `${site}/mini-split-installation/`,
    acRepair: `${site}/ac-repair/`,
    furnaceRepair: `${site}/furnace-repair/`,
    contact: `${site}/contact-us/`,
  },
};
