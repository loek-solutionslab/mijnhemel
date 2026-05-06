export const BUSINESS = {
  name: "Gastrovino Mijn Hemel",
  shortName: "Mijn Hemel",
  tagline: "De apotheek voor levensgenieters",
  description: "Wijnkoperij & wijncafé in hartje Hilversum",
  city: "Hilversum",
  founded: "Sinds Hilversum",
  email: "info@mijnhemel.nl",
  phone: "035 - 62 14 787",
  phoneTel: "+31356214787",
  address: {
    street: "Gijsbrecht van Amstelstraat 208-210",
    postal: "1214 BE",
    city: "Hilversum",
  },
  contactPerson: "Gerard Wouterson",
  social: {
    instagram: "https://www.instagram.com/gastrovinomijnhemel/",
  },
  hoursWinkel: [
    { day: "Maandag", time: "Rustdag" },
    { day: "Dinsdag", time: "10:00 — 18:00" },
    { day: "Woensdag", time: "10:00 — 18:00" },
    { day: "Donderdag", time: "10:00 — 18:00" },
    { day: "Vrijdag", time: "10:00 — 19:00" },
    { day: "Zaterdag", time: "10:00 — 17:00" },
    { day: "Zondag", time: "Rustdag" },
  ],
  hoursCafe: [
    { day: "Maandag", time: "Rustdag" },
    { day: "Dinsdag", time: "Rustdag" },
    { day: "Woensdag", time: "Rustdag" },
    { day: "Donderdag", time: "15:00 — 23:00" },
    { day: "Vrijdag", time: "15:00 — 23:00" },
    { day: "Zaterdag", time: "15:00 — 23:00" },
    { day: "Zondag", time: "Rustdag" },
  ],
};

export const NAV = [
  { label: "Wijnen", href: "/pages/wijnen.html" },
  { label: "Wijncafé", href: "/pages/wijncafe.html" },
  { label: "Thuisbezorgd", href: "/pages/thuisbezorgd.html" },
  { label: "Proeverijen", href: "/pages/proeverijen.html" },
  { label: "Over ons", href: "/pages/over-ons.html" },
  { label: "Contact", href: "/pages/contact.html" },
];

// Images — original wine photo from mijnhemel.nl + verified Unsplash IDs (wine, charcuterie, cheese, glasses)
export const IMAGES = {
  // Real source images
  logoOriginal: "https://mijnhemel.nl/wp-content/uploads/2023/02/cropped-Gastrovino_Mijn-Hemel_liggend_cont_wit-kopie.png",
  interior: "https://mijnhemel.nl/wp-content/uploads/elementor/thumbs/DSF8207-scaled-qiqhbfh3mugoa1fkccim5qxa88oxj0yyyedgke4p92.jpg",

  // Wine bottles (verified Unsplash photo IDs)
  bottle1: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=1600&q=80",
  bottle2: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80",
  bottle3: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=1600&q=80",
  bottle4: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1600&q=80",
  bottle5: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1600&q=80",
  bottle6: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=1600&q=80",
  bottle7: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=1600&q=80",
  bottle8: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=1600&q=80",

  // Wine glasses & ambiance
  glasses1: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1600&q=80",
  glasses2: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=1600&q=80",
  cellar: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=1600&q=80",
  pour: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=1600&q=80",

  // Charcuterie & cheese boards
  charcuterie1: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1600&q=80",
  charcuterie2: "https://images.unsplash.com/photo-1559963110-71b394e7494d?w=1600&q=80",
  charcuterie3: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=1600&q=80",
  cheese1: "https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=1600&q=80",
  cheese2: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=1600&q=80",

  // Atmosphere
  table1: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?w=1600&q=80",
  table2: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&q=80",
  vines: "https://images.unsplash.com/photo-1560148218-1a83060f7b32?w=1600&q=80",
  barrel: "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=1600&q=80",
};
