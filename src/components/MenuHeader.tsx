"use client";

import { Restaurant } from "@/types/menu";

interface MenuHeaderProps {
  restaurant: Restaurant;
}

export default function MenuHeader({ restaurant }: MenuHeaderProps) {
  return (
    <div className="text-center mb-16">
      {/* Restaurant Name */}
      <h1 className="text-4xl md:text-5xl font-serif text-green-800 mb-4 transform -rotate-1">
        {restaurant.name}
      </h1>
      <h3 className="text-green-700 mb-4">{restaurant.subtitle}</h3>
      {/* Description */}
      {restaurant.description && (
        <p className="text-lg md:text-xl text-green-700 font-medium italic mb-8 max-w-4xl mx-auto leading-relaxed">
          {restaurant.description}
        </p>
      )}

      {/* Social Media */}
      <div className="text-right">
        <p className="text-green-700 text-lg font-medium">SIGUENOS:</p>
        <p className="text-green-600 text-xl font-semibold">
          {restaurant.socialMedia}
        </p>
      </div>
    </div>
  );
}
