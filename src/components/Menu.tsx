"use client";

import { MenuData } from "@/types/menu";
import MenuHeader from "./MenuHeader";
import MenuNotes from "./MenuNotes";
import MenuSection from "./MenuSection";
import Footer from "./Footer";
import FlowerDivider from "./FlowerDivider";

interface MenuProps {
  data: MenuData;
}

export default function Menu({ data }: MenuProps) {
  const [coffee, ...rest] = data.sections;
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <MenuHeader restaurant={data.restaurant} />

        <div className="space-y-12 mt-16">
          <MenuSection key={coffee.id} section={coffee} />
          <MenuNotes notes={data.notes} />
          {rest.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </div>
      </div>
      <FlowerDivider />
      <Footer />
    </div>
  );
}
