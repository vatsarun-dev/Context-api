import React from "react";

const priorityStyle = (priority) => {
  if (priority === "High") return { text: "text-red-500", border: "border-red-500/70" };
  if (priority === "Medium")
    return { text: "text-orange-400", border: "border-orange-400/70" };
  return { text: "text-green-400", border: "border-green-400/70" };
};

const SessionCard = ({ session, onDelete }) => {
  const styles = priorityStyle(session.priority);
  return (
    <div
      className={`border border-[#23252c] rounded-2xl p-4 bg-[#1a1b21] flex flex-col gap-3 card-3d`}
    >
      <div className="flex justify-between items-start">
        <div className="font-semibold text-white">{session.topic}</div>
        <div className={`text-xs px-2 py-1 rounded-full border ${styles.text} ${styles.border}`}>
          {session.priority}
        </div>
      </div>
      <div className="text-sm text-[#9aa3b2]">Subject: {session.subject}</div>
      <div className="grid grid-cols-2 gap-2 text-sm text-[#9aa3b2]">
        <div>Duration: {session.duration} min</div>
        <div className="text-right">Date: {session.date}</div>
      </div>
      <button
        className="self-start text-xs uppercase tracking-[0.2em] text-[#1a1b21] bg-[#d9c7ff] px-3 py-2 rounded-lg"
        onClick={() => onDelete(session.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default SessionCard;
