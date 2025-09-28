'use client';

import { Restaurant } from '@/types/menu';

interface MenuHeaderProps {
  restaurant: Restaurant;
}

export default function MenuHeader({ restaurant }: MenuHeaderProps) {
  return (
    <div className="text-center mb-8">
      {/* Restaurant Name */}
      <h1 className="text-4xl md:text-5xl font-serif text-green-800 mb-4 transform -rotate-1">
        {restaurant.name}
      </h1>
      
      {/* Menu Title */}
      <h2 className="text-6xl md:text-7xl font-bold text-green-900 mb-8">
        {restaurant.subtitle}
      </h2>
      
      {/* Social Media */}
      <div className="text-right">
        <p className="text-green-700 text-lg font-medium">
          SIGUENOS:
        </p>
        <p className="text-green-600 text-xl font-semibold">
          {restaurant.socialMedia}
        </p>
      </div>
    </div>
  );
}
