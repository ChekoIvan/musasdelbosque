'use client';

import MenuItem from './MenuItem';
import { MenuSection as MenuSectionType } from '@/types/menu';

interface MenuSectionProps {
  section: MenuSectionType;
}

export default function MenuSection({ section }: MenuSectionProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-200">
      {/* Section Header */}
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">
          {section.title}
        </h3>
        {section.subtitle && (
          <p className="text-lg text-green-700 font-medium">
            {section.subtitle}
          </p>
        )}
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        {section.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}