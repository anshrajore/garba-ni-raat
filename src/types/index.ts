export type PassCategory = 'Democracy' | 'Legacy' | 'Cover';
export type PassType = 'Single' | 'General' | 'Couple' | 'SPAX' | 'Group';

export interface TicketTier {
  category: PassCategory;
  tagline: string;
  isPopular?: boolean;
  theme: 'emerald' | 'maroon' | 'gold';
  features: string[];
  options: {
    type: PassType;
    price: number;
    description: string;
  }[];
}

export interface EventDetailItem {
  icon: string;
  label: string;
  title: string;
  subtitle: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}
