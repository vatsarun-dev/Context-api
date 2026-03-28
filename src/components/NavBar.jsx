import React, { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-[#111213] border-b border-[#1e2026]">
      <div className="mx-auto max-w-6xl px-6 h-[72px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#d9c7ff] flex items-center justify-center text-[#181a20] font-bold">
            S
          </div>
          <div className="text-lg font-semibold text-white">
            Study Session Planner
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-[#a5adba]">
          <span className="text-white">Home</span>
          <span>My Courses</span>
          <span>Tests</span>
          <span>Results</span>
          <span>Learning Plan</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-[#d9c7ff]" />
            <div className="text-xs text-[#a5adba] leading-tight">
              Arun Vats
            </div>
          </div>
          <button
            className="md:hidden h-9 w-9 rounded-full border border-[#2a2d36] bg-[#15171d] text-[#a5adba]"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64" : "max-h-0"}`}
      >
        <div className="px-6 pb-4 flex flex-col gap-2 text-sm text-[#a5adba]">
          <span className="text-white">Home</span>
          <span>My Courses</span>
          <span>Tests</span>
          <span>Results</span>
          <span>Learning Plan</span>
          <div className="flex items-center gap-2 pt-2">
            <div className="h-9 w-9 rounded-full border border-[#2a2d36] bg-[#15171d] flex items-center justify-center text-[#a5adba]">
              🔍
            </div>
            <div className="h-9 w-9 rounded-full border border-[#2a2d36] bg-[#15171d] flex items-center justify-center text-[#a5adba]">
              🔔
            </div>
            <div className="h-9 w-9 rounded-full bg-[#d9c7ff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
