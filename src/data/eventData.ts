import { TicketTier, EventDetailItem, FeatureItem } from '../types';

export const EVENT_INFO = {
  name: 'GARBA NI RAAT 2026',
  tagline: 'A NIGHT OF RHYTHM, CULTURE & CELEBRATION',
  subtitle: 'Two Nights. Two Iconic Venues. Double the Celebration.',
  dates: '19 & 20 OCTOBER 2026',
  
  // Day 1
  day1Title: 'LEGACY LAWNS',
  day1Date: '19 OCTOBER 2026',
  day1Address: 'Legacy Lawns & Banquets, Nashik, Maharashtra',
  day1MapUrl: 'https://share.google/pIjw4Gr0edYxfqx3Y',
  day1Image: '/assets/gallery/venue-legacy.jpg',

  // Day 2
  day2Title: 'DEMOCRACY LAWNS',
  day2Date: '20 OCTOBER 2026',
  day2Address: 'Democracy Grand Open Air Lawns, Nashik, Maharashtra',
  day2MapUrl: 'https://share.google/cNdNVXGddkmIgdO6s',
  day2Image: '/assets/gallery/venue-democracy.jpg',

  city: 'Nashik, Maharashtra, India',
  phone: '+91 85540 18129',
  phoneDisplay: '+91 85540 18129',
  email: 'Event.circle07@gmail.com',
  whatsappNumber: '918554018129',
  whatsappLink: 'https://wa.me/918554018129?text=Hello%20Garba%20Ni%20Raat%20Team!%20I%20would%20like%20to%20inquire%20about%20booking%20passes.',
  instagramUrl: 'https://www.instagram.com/garbaniraat_/',
  instagramHandle: '@garbaniraat_',
  colorfulLogo: '/assets/brand/garba-ni-raat-colorful-logo.png',
  ticketPartner: 'Fizmaa',
  fizmaaLogo: '/assets/brand/fizmaa-logo.png',
  fizmaaTicketUrl: 'https://live.fizmaa.com/event.html?id=111',
  fizmaaLegacyUrl: 'https://live.fizmaa.com/event.html?id=111',
  fizmaaDemocracyUrl: 'https://live.fizmaa.com/event.html?id=110',
  coverPassWhatsappUrl: 'https://wa.me/918554018129?text=Hello%20Team%20Garba%20Ni%20Raat!%20I%20would%20like%20to%20book%20and%20reserve%20the%20exclusive%20Cover%20Pass%20for%20the%20event.%20Please%20share%20the%20booking%20details.',
};

// COVER PASS FIRST for maximum sales conversion
export const TICKET_TIERS: TicketTier[] = [
  {
    category: 'Cover',
    tagline: 'All-inclusive passes with premium food & beverage redemption included',
    isPopular: true,
    theme: 'maroon',
    features: [
      'Fast-Track VIP & Royal Lounge Entry',
      'Food & Beverage Value Redeemable at Stalls',
      'Complimentary Handcrafted Dandiya Pair',
      'Royal Seating & Refreshment Pavilion Access',
      'Valet Parking & Dedicated Event Concierge'
    ],
    options: [
      { type: 'Single', price: 999, description: 'Cover Single (includes F&B credit)' },
      { type: 'Double', price: 1899, description: 'Cover Double (includes F&B credit)' }
    ]
  },
  {
    category: 'Legacy',
    tagline: 'The royal festive experience with priority VIP fast-track access (19 Oct)',
    theme: 'emerald',
    features: [
      'Priority VIP Fast-Track Gate Entry',
      'Exclusive Viewing & Dancing Arena',
      'Welcome Festive Refreshment Drink',
      'Handcrafted Dandiya Pair Included',
      'Dedicated Cultural Photo-booth Access'
    ],
    options: [
      { type: 'General', price: 649, description: 'Individual entry pass' },
      { type: 'Couple', price: 1249, description: 'Entry for 1 Couple (2 persons)' },
      { type: 'Group', price: 3199, description: 'VIP Group / SPAX Pass for up to 5 persons' }
    ]
  },
  {
    category: 'Democracy',
    tagline: 'Pure energetic celebration for every Garba enthusiast (20 Oct)',
    theme: 'emerald',
    features: [
      'Full Arena Entry Access',
      'Traditional Garba & Raas Circle',
      'Food & Beverage Court Access',
      'Complimentary Dandiya Sticks (First 500 Entries)',
      'High-Energy Live Band & Dhol Performances'
    ],
    options: [
      { type: 'General', price: 449, description: 'Individual entry pass' },
      { type: 'Couple', price: 850, description: 'Entry for 1 Couple (2 persons)' },
      { type: 'Group', price: 2199, description: 'Group / SPAX Pass for up to 5 persons' }
    ]
  }
];

export const EVENT_DETAILS: EventDetailItem[] = [
  {
    icon: 'calendar',
    label: 'DATES',
    title: '19 & 20 OCT',
    subtitle: 'TWO GRAND NIGHTS'
  },
  {
    icon: 'clock',
    label: 'TIME',
    title: '7:00 PM TILL LATE',
    subtitle: 'ENTRY FROM 6:30 PM'
  },
  {
    icon: 'map-pin',
    label: 'TWO VENUES',
    title: 'LEGACY & DEMOCRACY',
    subtitle: 'NASHIK, MAHARASHTRA'
  },
  {
    icon: 'music',
    label: 'LIVE MUSIC',
    title: 'ENERGETIC BANDS',
    subtitle: 'AUTHENTIC DHOL & VOICES'
  },
  {
    icon: 'sparkles',
    label: 'CULTURE',
    title: 'TRADITIONAL GARBA',
    subtitle: 'AUTHENTIC GUJARATI SPIRIT'
  },
  {
    icon: 'utensils',
    label: 'FOOD & MORE',
    title: 'GOURMET STALLS',
    subtitle: 'LIVELY FESTIVE BAZAAR'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    icon: 'flame',
    title: 'TRADITIONAL GARBA',
    desc: 'Feel the heartbeat and rhythm of Navratri in authentic royal circular arenas with hundreds of enthusiastic dancers.'
  },
  {
    icon: 'music',
    title: 'LIVE MUSIC & DHOL',
    desc: 'Renowned folk vocalists, acoustic shehnai masters, and thunderous dhol troupes performing non-stop festive anthems.'
  },
  {
    icon: 'coffee',
    title: 'FOOD & FESTIVE VIBES',
    desc: 'Curated culinary bazaar serving authentic Gujarati street food, royal sweets, refreshing thandai, and modern delicacies.'
  },
  {
    icon: 'shirt',
    title: 'FASHION & CULTURE',
    desc: 'Showcase your finest traditional chaniya cholis and embroidered kediyus with exciting best-dressed royal awards every night.'
  },
  {
    icon: 'camera',
    title: 'MEMORIES FOREVER',
    desc: 'Two majestic nights of euphoria, community bonding, 360-degree photo booths, and unforgettable lifelong memories.'
  }
];

// STRUCTURED CATEGORY-WISE OFFICIAL SPONSORS & PARTNERS
export const PARTNERS_DATA = {
  headline: 'OFFICIAL FESTIVAL PARTNERS',
  subtitle: 'IN PARTNERSHIP FOR A GRANDER CELEBRATION',

  presentedBy: [
    {
      name: 'Event Circle',
      tagline: 'An Event Company',
      role: 'PRESENTED BY',
      logo: '/assets/partners/event-circle-logo.png'
    },
    {
      name: 'FestHaus Productions',
      tagline: 'Grand Experiential Productions',
      role: 'PRESENTED BY',
      logo: '/assets/partners/festhaus-logo.png'
    },
    {
      name: 'Eventverse Studio',
      tagline: 'Event Verse Production & Infrastructure',
      role: 'PRESENTED BY',
      logo: '/assets/partners/eventverse-logo.png'
    }
  ],

  poweredBy: {
    name: 'The Team Indian Fitness',
    role: 'POWERED BY',
    tagline: 'Official Fitness & Energy Partner',
    logo: '/assets/partners/team-indian-fitness-logo.png'
  },

  rentalPartner: {
    name: 'Eventverse Studio',
    role: 'OFFICIAL RENTAL PARTNER',
    tagline: 'Event Verse Production & Infrastructure',
    logo: '/assets/partners/eventverse-logo.png'
  },

  gamingPartner: {
    name: 'Fizzyfox',
    role: 'OFFICIAL GAMING ZONE PARTNER',
    logo: '/assets/partners/fizzyfox-logo.png',
    tagline: 'Exciting Festive Gaming & Entertainment Arena'
  },

  ticketingPartner: {
    name: 'Fizmaa',
    role: 'EXCLUSIVE OFFICIAL TICKETING PARTNER',
    logo: '/assets/brand/fizmaa-logo.png',
    url: 'https://live.fizmaa.com/event.html?id=111'
  },

  foodAndLifestyle: [
    {
      name: 'Sadhana Rajeshahi',
      role: 'OFFICIAL NASHIK MISAL PARTNER',
      tagline: 'Authentic Chulivarchi Misal of Nashik',
      logo: '/assets/partners/sadhana-rajeshahi-logo.png'
    },
    {
      name: 'Vishal\'s Salon & Wellness Center',
      role: 'OFFICIAL GROOMING & STYLING PARTNER',
      tagline: 'Hair | Beauty | Nails | Makeup',
      logo: '/assets/partners/vishal-salon-logo.png'
    }
  ],

  hospitalityPartner: {
    name: 'Sadhana Village Resort',
    role: 'OFFICIAL HOSPITALITY PARTNER',
    tagline: 'Stay & Celebrate — Premium Resort Experience',
    logo: '/assets/partners/sadhana-village-resort-logo.png'
  }
};

export const GALLERY_PHOTOS = [
  {
    src: '/assets/gallery/garba-group-celebration.jpg',
    title: 'The Grand Celebration',
    desc: 'Winners & performers celebrate on the Garba Ni Raat stage'
  },
  {
    src: '/assets/gallery/garba-stage-lights.jpg',
    title: 'Grand Stage & Laser Lights',
    desc: 'Breathtaking light production and festive ambience'
  },
  {
    src: '/assets/gallery/garba-confetti-dance.jpg',
    title: 'Confetti Shower',
    desc: 'Thousands dancing under a spectacular confetti shower'
  },
  {
    src: '/assets/gallery/garba-dance-floor.jpg',
    title: 'Vibrant Dance Arena',
    desc: 'Colorful traditional attire and energetic Raas circles'
  },
  {
    src: '/assets/gallery/garba-crowd-arena.jpg',
    title: 'Packed Arena',
    desc: 'The electrifying energy of a full-house Garba night'
  },
  {
    src: '/assets/gallery/garba-live-band.png',
    title: 'Live Band Performance',
    desc: 'Soulful live music lighting up the grand stage'
  },
  {
    src: '/assets/gallery/garba-stage-wide.png',
    title: 'The Grand Stage',
    desc: 'Panoramic view of the iconic Garba Ni Raat stage & crowd'
  },
  {
    src: '/assets/gallery/garba-real-trophy.jpg',
    title: 'Trophy Ceremony',
    desc: 'Euphoric winners from the grand season finale'
  }
];

export const TERMS_AND_CONDITIONS = [
  'Pass valid only for the selected venue: Democracy or Legacy.',
  'Legacy Pass valid only at Legacy; Democracy Pass valid only at Democracy.',
  'Available categories: Single, Couple & SPAX, as applicable.',
  'No food, beverages, Dandiya, refreshments, merchandise or complimentary items are included.',
  'Couple Pass admits 2 persons; SPAX Pass admits up to 5 persons.',
  'Passes are non-transferable and non-refundable.',
  'Valid pass required for entry. Venue rules & security checks apply.',
  'Organisers reserve the right to modify event arrangements when necessary.'
];

export const SEO_FAQS = [
  {
    question: 'What is the best garba event in Nashik 2026?',
    answer: 'Garba Ni Raat is widely regarded as Nashik\'s best and biggest Navratri garba event in 2026. It is a premium 2-night royal celebration held on 19 October at Legacy Lawns & Banquets (Gangapur Road) and 20 October at Democracy Grand Open Air Lawns — featuring live dhol orchestras, authentic Raas-Garba, celebrity DJ sets, dandiya showdowns, VIP Cover Passes with F&B credit, and best-dressed awards.'
  },
  {
    question: 'Where is the best place to play garba in Nashik?',
    answer: 'The best place to play garba in Nashik is at Garba Ni Raat 2026, held at two iconic venues: Legacy Lawns & Banquets on Gangapur Road (19 Oct) and Democracy Grand Open Air Lawns (20 Oct). These are Nashik\'s most spacious and premium open-air festive venues with professional sound, lighting, and dedicated Raas-Garba arenas.'
  },
  {
    question: 'When and where is Garba Ni Raat 2026 happening in Nashik?',
    answer: 'Garba Ni Raat 2026 is a premier 2-night royal Navratri festival in Nashik: Day 1 on 19 October 2026 at Legacy Lawns & Banquets (Gangapur Road), and Day 2 on 20 October 2026 at Democracy Grand Open Air Lawns. Gates open at 6:00 PM both nights.'
  },
  {
    question: 'What are the ticket prices for Garba Ni Raat Nashik 2026?',
    answer: '19th Oct Legacy Lawns: General ₹649, Couple ₹1,249, Group/SPAX ₹3,199 (up to 5 persons). 20th Oct Democracy Lawns: General ₹449, Couple ₹850, Group/SPAX ₹2,199. VIP Cover Passes: Single ₹999, Double ₹1,899 (includes F&B credit, fast-track entry, royal lounge, dandiya pair, and valet parking).'
  },
  {
    question: 'How can I book official passes for Garba Ni Raat Nashik?',
    answer: 'Official passes are available exclusively on Fizmaa (the official ticketing partner): Legacy Lawns (19 Oct) at live.fizmaa.com and Democracy Lawns (20 Oct) at live.fizmaa.com. VIP Cover Passes can also be booked via WhatsApp concierge at +91 85540 18129.'
  },
  {
    question: 'How does Garba Ni Raat compare to other Nashik Navratri events?',
    answer: 'Garba Ni Raat stands out as Nashik\'s premium multi-night Navratri experience. While Nashik hosts various events like Raasiya Navratri, Param Navratri, Raas Revolution, Navkar Events, AshtaRang, Raasotsav, and Garba By Shreem Decor — Garba Ni Raat offers the most comprehensive royal experience with 2 grand nights across Nashik\'s two most iconic venues, VIP Cover Passes with food & beverage credit, live dhol orchestras, and celebrity performances.'
  },
  {
    question: 'What are the event timings and dress code?',
    answer: 'Gates open at 6:00 PM both nights (19 & 20 October). Live folk bands, dhol troupes, and traditional Raas-Garba start at 7:00 PM and continue until midnight. Traditional festive attire (Chaniya Cholis, Kediyus, Kurtas) is celebrated with Best Dressed Royal Awards.'
  },
  {
    question: 'Is parking available at Legacy Lawns and Democracy Lawns?',
    answer: 'Yes, both Legacy Lawns (Gangapur Road) and Democracy Grand Open Air Lawns have designated, secure parking facilities. VIP Cover Pass holders enjoy complimentary valet parking.'
  },
  {
    question: 'What Navratri garba events are happening in Nashik in October 2026?',
    answer: 'Nashik\'s Navratri 2026 season runs from 11-20 October. The headline festival is Garba Ni Raat on 19 & 20 October — Nashik\'s biggest and most premium 2-night celebration at Legacy Lawns and Democracy Lawns. Other events include Raasiya Navratri, Param Navratri, Raas Revolution, Garba By Shreem Decor, MSA Garba Raas, Navkar Events, Rangilo Raas, Navraag Utsav, Raasotsav, AshtaRang, and more. Garba Ni Raat is the grand finale weekend closing the season.'
  }
];
