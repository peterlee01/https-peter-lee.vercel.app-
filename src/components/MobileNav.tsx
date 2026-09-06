"use client";
import { useState } from "react";

const links = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "How I Operate", id: "how-i-operate" },
  { label: "Contact", id: "contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span
          className="block h-[2px] w-6 bg-[#010101] rounded transition-all duration-200"
          style={open ? { transform: "translateY(7px) rotate(45deg)" } : {}}
        />
        <span
          className="block h-[2px] w-6 bg-[#010101] rounded transition-all duration-200"
          style={open ? { opacity: 0 } : {}}
        />
        <span
          className="block h-[2px] w-6 bg-[#010101] rounded transition-all duration-200"
          style={open ? { transform: "translateY(-7px) rotate(-45deg)" } : {}}
        />
      </button>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-md z-50">
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-[#6b7280] text-base hover:text-[#010101] transition-colors rounded-lg"
                style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
