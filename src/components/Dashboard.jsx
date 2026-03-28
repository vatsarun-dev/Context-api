import React, { useContext } from "react";
import SessionForm from "./SessionForm.jsx";
import SessionList from "./SessionList.jsx";
import { SessionContext } from "../context/SessionContext.jsx";

const Dashboard = () => {
  const { sessions } = useContext(SessionContext);
  const totalDuration = sessions.reduce(
    (sum, session) => sum + (Number(session.duration) || 0),
    0
  );

  const todayLabel = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="min-h-screen text-white flex flex-col items-center w-full px-6 pb-12 pt-8">
      <div className="w-full max-w-6xl flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">Dashboard</div>
          <div className="text-sm text-[#7a828f]">{todayLabel}</div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="bg-[#d9c7ff] text-[#17191f] rounded-2xl p-4 flex flex-col gap-3 card-3d fade-up float-soft">
            <div className="text-sm">Sessions Created</div>
            <div className="text-2xl font-semibold">{sessions.length}</div>
            <div className="text-xs text-[#4b4f5a]">+2 vs last week</div>
          </div>
          <div className="bg-[#15171d] border border-[#23252c] rounded-2xl p-4 flex flex-col gap-3 card-3d fade-up">
            <div className="text-sm text-[#c9ced8]">Total Duration</div>
            <div className="text-2xl font-semibold">{totalDuration} min</div>
            <div className="text-xs text-[#6f7785]">Across all sessions</div>
          </div>
          <div className="bg-[#15171d] border border-[#23252c] rounded-2xl p-4 flex flex-col gap-3 card-3d fade-up">
            <div className="text-sm text-[#c9ced8]">Priority Mix</div>
            <div className="text-2xl font-semibold">
              {sessions.filter((s) => s.priority === "High").length}
              <span className="text-sm text-[#6f7785]"> high</span>
            </div>
            <div className="text-xs text-[#6f7785]">Focus on high impact</div>
          </div>
          <div className="bg-[#15171d] border border-[#23252c] rounded-2xl p-4 flex flex-col gap-3 card-3d fade-up">
            <div className="text-sm text-[#c9ced8]">Next Focus</div>
            <div className="text-2xl font-semibold">10 min</div>
            <div className="text-xs text-[#6f7785]">Warm‑up block</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <SessionForm />
          <SessionList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
