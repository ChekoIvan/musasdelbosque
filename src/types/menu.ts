export interface MenuItem {
  id: string;
  name: string;
  price: number;
  size?: string | null;
  description?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export interface MenuNote {
  text: string;
  subtext?: string;
}

export interface Restaurant {
  name: string;
  subtitle: string;
  description?: string;
  socialMedia: string;
}

export interface MenuData {
  restaurant: Restaurant;
  sections: MenuSection[];
  notes: MenuNote[];
}
