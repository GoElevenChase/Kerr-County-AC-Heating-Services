export const BIZ = {
  name: "Kerr County A/C & Heating Services",
  short: "Kerr County A/C & Heating",
  phone: "(830) 988-4710",
  tel: "tel:+18309884710",
  address: ["140 Goat Creek Rd Cutoff", "Kerrville, TX 78028"],
  hours: [
    ["Monday – Friday", "8 AM – 5 PM"],
    ["Saturday", "8 AM – 12 PM"],
    ["Sunday", "Closed"],
  ],
  established: 2014,
};

export type Photo = { src: string; w: number; h: number; alt: string };
const p = (n: string, w: number, h: number, alt: string): Photo => ({ src: `/img/${n}.webp`, w, h, alt });

export const IMG = {
  team: p("team", 1920, 800, "The Kerr County A/C & Heating Services building"),
  award2024: p("award2024", 1100, 805, "The team celebrating the 2024 Kerrville's Best Heating & Cooling Company award"),
  team2025: p("team2025", 1140, 700, "The Kerr County A/C & Heating Services team, Best of 2025"),
  badge2025: p("badge2025", 411, 331, "Best of Kerrville 2025 badge"),
  family: p("family", 600, 775, "Kerr County A/C & Heating Services family and team"),
  acRepair: p("ac-repair2", 600, 800, "Technician performing AC repair"),
  acInstall: p("ac-install", 300, 250, "New air conditioning installation"),
  furnaceRepair: p("furnace-repair", 300, 250, "Furnace repair"),
  furnaceInstall: p("furnace-install", 300, 250, "Furnace installation"),
  heatPump: p("heat-pump", 300, 250, "Heat pump repair"),
  miniSplit: p("mini-split", 1200, 456, "Ductless mini-split system installation"),
  iaq: p("iaq", 1920, 600, "Indoor air quality service"),
  jr: p("jr", 450, 500, "JR Barroso, owner"),
  melissa: p("melissa", 450, 500, "Melissa Barroso, owner"),
  kyle: p("kyle", 450, 500, "Kyle, Lead Installer and Service Technician"),
  mike: p("mike", 450, 541, "Mike, Lead HVAC Installer"),
  keyana: p("keyana", 450, 500, "Keyana, customer service and dispatch"),
  alex: p("alex", 450, 500, "Alex, Service Technician"),
  sean: p("sean", 450, 500, "Sean, Lead HVAC Installer"),
  devon: p("devon", 450, 500, "Devon, HVAC Installer"),
};

export const SERVICES = [
  { id: "ac-repair", title: "AC Repair & Diagnostics", text: "Expert troubleshooting and repair for all makes and models of air conditioning equipment, including refrigerant adjustment and parts replacement.", img: IMG.acRepair },
  { id: "ac-install", title: "AC Installation & Replacement", text: "Professional consultations and installations of top-quality cooling systems for homes and businesses.", img: IMG.acInstall },
  { id: "furnace", title: "Furnace Repair & Installation", text: "Heating repairs from flame control to heat exchangers and thermostats, plus new furnace installation.", img: IMG.furnaceRepair },
  { id: "heat-pump", title: "Heat Pump Repair & Installation", text: "Repair and installation of heat pumps for year-round comfort.", img: IMG.heatPump },
  { id: "mini-split", title: "Ductless Mini-Split Systems", text: "Ductless mini-split system installation and service for rooms and additions that need their own comfort zone.", img: IMG.miniSplit },
  { id: "air-quality", title: "Indoor Air Quality & UV Lights", text: "UV light installation to remove mold and bacteria from the air, plus solutions for cleaner, healthier indoor air.", img: IMG.iaq },
  { id: "maintenance", title: "Preventative Maintenance", text: "Routine spring and fall check-ups to keep your systems running at peak performance, with appointment reminders.", img: IMG.family },
  { id: "inspections", title: "Inspections & Efficiency", text: "Thorough HVAC inspections that maximize cooling and heating efficiency and extend the life of your equipment.", img: IMG.team2025 },
];

export const REVIEWS = [
  { name: "Wm. Olden", text: "My wife and I have been using Kerr County AC and Heating since JR and his family moved to the hill country. Without exception JR's team has been responsive, reliable, honest, knowledgeable and efficient in terms of maintaining our system. Neither JR's team nor JR has ever tried to 'up-sell' a repair, parts or warranty work, they are honestly the easiest group of people to work with." },
  { name: "Matthew", text: "JR and the guys over at Kerr County AC are nothing short of amazing. They were professional, on time, and got my new AC installed hassle free. Absolutely fantastic team." },
  { name: "Matthew", text: "Our ac went out and we called Kerr County Ac and Heating. They came out right away and got our unit fixed. The technician was very kind and knowledgeable!! Thank you so much!!" },
  { name: "Robert Dameron", text: "Kyle was very knowledgeable and friendly, I would recommend Kerr County AC and Heating for all your AC and Heater service! Thanks for great service." },
  { name: "Lisa Schreckenbach", text: "ALWAYS professional, friendly, and personable! I will always recommend them!" },
  { name: "Hugh Topper", text: "Responded the same day. Had me up and running quickly. Highly recommend" },
];

export const TEAM = [
  { name: "JR", role: "Owner & Operations Lead", note: "30+ years in HVAC", img: IMG.jr },
  { name: "Melissa", role: "Owner", note: "25+ years in marketing communications", img: IMG.melissa },
  { name: "Kyle", role: "Lead Installer & Service Technician", note: "7 years in HVAC", img: IMG.kyle },
  { name: "Mike", role: "Lead HVAC Installer", note: "Close to 27 years in HVAC", img: IMG.mike },
  { name: "Alex", role: "Service Technician", note: "6 years in HVAC", img: IMG.alex },
  { name: "Keyana", role: "Customer Service & Dispatch", note: "The voice of Kerr County A/C & Heating", img: IMG.keyana },
];

export const AREAS = ["Kerrville", "Kerr County", "Ingram", "Center Point", "Comfort", "Hunt", "Harper", "Mountain Home", "Fredericksburg", "Boerne", "Bandera", "Medina"];

export const VIP = {
  perks: ["Two maintenance visits per year", "Only $49 diagnostic", "10% off repairs", "Priority scheduling", "Exclusive promotions & events", "5% off system replacement"],
  prices: [
    ["$228 / year", "1st system"],
    ["$114 / year", "each additional system"],
    ["$69 / year", "each additional mini-split"],
  ],
};

export const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#vip", label: "VIP Program" },
  { href: "#reviews", label: "Reviews" },
  { href: "#areas", label: "Service Area" },
  { href: "#contact", label: "Contact" },
];
