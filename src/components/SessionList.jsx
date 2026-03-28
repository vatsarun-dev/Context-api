import React, { useContext } from "react";
import { SessionContext } from "../context/SessionContext.jsx";
import SessionCard from "./SessionCard.jsx";

const SessionList = () => {
  const { sessions, deleteSession } = useContext(SessionContext);
  const totalDuration = sessions.reduce(
    (sum, session) => sum + (Number(session.duration) || 0),
    0
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-white">My Schedule</div>
          <div className="text-xs text-[#6f7785]">
            {sessions.length} sessions planned
          </div>
        </div>
        <div className="h-8 w-8 rounded-full bg-[#1e2027] border border-[#2b2e38]" />
      </div>
      <div className="flex items-center justify-between border border-[#23252c] rounded-2xl px-4 py-3 bg-[#15171d] card-3d">
        <div className="text-xs text-[#aeb4bf]">Total Study Duration</div>
        <div className="text-sm font-semibold text-white">{totalDuration} min</div>
      </div>
      {sessions.map((session) => (
        <SessionCard
          key={session.id}
          session={session}
          onDelete={deleteSession}
        />
      ))}
    </div>
  );
};

export default SessionList;
