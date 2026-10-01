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
  time: '7:00 PM – 1:00 AM (Both Nights)',
  ticketPartner: 'Fizmaa',
  fizmaaLogo: '/assets/brand/fizmaa-logo.png',
  fizmaaTicketUrl: 'https://live.fizmaa.com/event.html?id=92',
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
    }
  ],

  poweredBy: {
    name: 'The Team Indian Fitness',
    role: 'POWERED BY',
    tagline: 'Official Fitness & Energy Partner',
  },

  rentalPartner: {
    name: 'Eventverse Studio',
    role: 'OFFICIAL RENTAL PARTNER',
    tagline: 'Event Verse Production & Infrastructure',
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
    url: 'https://live.fizmaa.com/event.html?id=92'
  },

  foodAndLifestyle: [
    {
      name: 'Sadhana Misal',
      role: 'OFFICIAL NASHIK MISAL PARTNER',
      tagline: 'Authentic Chulivarchi Misal of Nashik'
    },
    {
      name: 'Vishal Salon',
      role: 'OFFICIAL GROOMING & STYLING PARTNER',
      tagline: 'Luxury Salon & Festive Styling'
    }
  ]
};

export const GALLERY_PHOTOS = [
  {
    src: '/assets/gallery/garba-real-trophy.jpg',
    title: 'Garba Ni Raat Grand Trophy Stage',
    desc: 'Euphoric winners & artist celebration from the authentic grand season'
  },
  {
    src: '/assets/gallery/venue-democracy.jpg',
    title: 'Democracy Open Air Lawns',
    desc: 'Spectacular aerial view of the Day 2 Grand Finale arena'
  },
  {
    src: '/assets/gallery/venue-legacy.jpg',
    title: 'Legacy Banquet & Lawns',
    desc: 'Majestic Day 1 opening venue with state-of-the-art facilities'
  },
  {
    src: '/assets/gallery/gallery-1.jpg',
    title: 'Euphoric Dance Circles',
    desc: 'Hundreds of synchronized dancers under starlit canopies'
  },
  {
    src: '/assets/gallery/gallery-3.jpg',
    title: 'The Sacred Dandiya Clack',
    desc: 'Intricate rhythm sticks crossing in timeless celebration'
  }
];
