'use client';

import { MenuItem as MenuItemType } from '@/types/menu';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-green-100 last:border-b-0">
      <div className="flex-1">
        <h4 className="text-xl font-semibold text-green-900 mb-1">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-sm text-green-600 italic">
            {item.description}
          </p>
        )}
        {item.size && (
          <span className="text-sm text-green-500 font-medium">
            {item.size}
          </span>
        )}
      </div>
      
      <div className="text-right ml-4">
        <span className="text-2xl font-bold text-green-800">
          ${item.price}
        </span>
      </div>
    </div>
  );
}