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
  fizmaaTicketUrl: 'https://live.fizmaa.com/event.html?id=110',
  fizmaaLegacyUrl: 'https://live.fizmaa.com/event.html?id=110',
  fizmaaDemocracyUrl: 'https://live.fizmaa.com/event.html?id=111',
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
      '₹800 / ₹1,600 F&B Value Redeemable at Stalls',
      'Complimentary Handcrafted Dandiya Pair',
      'Royal Seating & Refreshment Pavilion Access',
      'Valet Parking & Dedicated Event Concierge'
    ],
    options: [
      { type: 'Single', price: 1199, description: 'Cover Single (includes ₹800 F&B credit)' },
      { type: 'Couple', price: 2269, description: 'Cover Couple (includes ₹1,600 F&B credit)' }
    ]
  },
  {
    category: 'Legacy',
    tagline: 'The royal festive experience with priority VIP fast-track access',
    theme: 'emerald',
    features: [
      'Priority VIP Fast-Track Gate Entry',
      'Exclusive Viewing & Dancing Arena',
      'Welcome Festive Refreshment Drink',
      'Handcrafted Dandiya Pair Included',
      'Dedicated Cultural Photo-booth Access'
    ],
    options: [
      { type: 'Single', price: 599, description: 'Individual VIP entry pass' },
      { type: 'Couple', price: 1149, description: 'VIP entry for 1 Couple' },
      { type: 'SPAX', price: 2799, description: 'VIP Group Pass for up to 5 members' }
    ]
  },
  {
    category: 'Democracy',
    tagline: 'Pure energetic celebration for every Garba enthusiast',
    theme: 'emerald',
    features: [
      'Full Arena Entry Access',
      'Traditional Garba & Raas Circle',
      'Food & Beverage Court Access',
      'Complimentary Dandiya Sticks (First 500 Entries)',
      'High-Energy Live Band & Dhol Performances'
    ],
    options: [
      { type: 'Single', price: 399, description: 'Individual entry pass' },
      { type: 'Couple', price: 749, description: '1 Female + 1 Male entry pass' },
      { type: 'SPAX', price: 1799, description: 'Group Pass for up to 5 members' }
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
    url: 'https://live.fizmaa.com/event.html?id=110'
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

