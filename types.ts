
export interface Cheat {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  discordLink: string;
  primaryLink: string;
  primaryLinkText: string;
  isPaid?: boolean;
  status: 'Undetected' | 'Maintenance' | 'Detected';
  version: string;
}

export interface SocialLink {
  label: string;
  value: string;
  icon: string;
  href?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
}
