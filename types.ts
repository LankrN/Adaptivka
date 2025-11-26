export enum Page {
  HOME = 'home',
  MENU = 'menu',
  CHEFS = 'chefs',
  REVIEWS = 'reviews',
  CONTACT = 'contact'
}

export enum ThemeStyle {
  ROYAL = 'royal', // Classic luxury
  MODERN = 'modern', // Minimalist
  ORGANIC = 'organic' // Nature-inspired
}

export enum TimeOfDay {
  MORNING = 'morning',
  NOON = 'noon',
  NIGHT = 'night'
}

export interface ThemeConfig {
  bg: string;
  text: string;
  accent: string;
  accentText: string;
  navBg: string;
  cardBg: string;
  fontHeading: string;
  fontBody: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

export interface Chef {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}