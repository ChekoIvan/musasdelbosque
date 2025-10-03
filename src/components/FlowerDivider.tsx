"use client";

export default function FlowerDivider() {
  return (
    <div className="relative w-full h-32 overflow-hidden">
      {/* Background gradient to match footer */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-green-900"></div> */}

      {/* SVG Pattern */}
      <div
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src="/flowers-divider.svg"
          alt="Botanical divider"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
