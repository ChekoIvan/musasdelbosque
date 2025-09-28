'use client';

import { MenuData } from '@/types/menu';
import MenuHeader from './MenuHeader';
import MenuNotes from './MenuNotes';
import MenuSection from './MenuSection';

interface MenuProps {
  data: MenuData;
}

export default function Menu({ data }: MenuProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-600">
            <path d="M50 10 Q60 30 50 50 Q40 70 50 90 Q60 70 70 50 Q60 30 50 10" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-1/3 left-10 w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-600">
            <circle cx="50" cy="20" r="8" fill="currentColor" />
            <circle cx="30" cy="40" r="6" fill="currentColor" />
            <circle cx="70" cy="40" r="6" fill="currentColor" />
            <circle cx="50" cy="60" r="8" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-1/4 w-20 h-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-600">
            <path d="M20 80 Q40 60 60 80 Q80 100 100 80" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <MenuHeader restaurant={data.restaurant} />
        
        <div className="space-y-12 mt-16">
          {data.sections.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </div>

        <MenuNotes notes={data.notes} />
      </div>
    </div>
  );
}
