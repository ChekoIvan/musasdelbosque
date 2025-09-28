'use client';

import { MenuNote } from '@/types/menu';

interface MenuNotesProps {
  notes: MenuNote[];
}

export default function MenuNotes({ notes }: MenuNotesProps) {
  if (notes.length === 0) return null;

  return (
    <div className="mt-12 text-center">
      {notes.map((note, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg font-semibold text-green-800">
            {note.text}
          </p>
          {note.subtext && (
            <p className="text-sm text-green-600 mt-1">
              {note.subtext}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
