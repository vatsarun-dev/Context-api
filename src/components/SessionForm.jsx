import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SessionContext } from "../context/SessionContext.jsx";

const SessionForm = () => {
  const { addSession } = useContext(SessionContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addSession(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#15171d] border border-[#23252c] rounded-2xl p-5 flex flex-col gap-4 card-3d"
    >
      <div className="flex items-center justify-between pb-2 border-b border-[#23252c]">
        <div>
          <div className="text-sm font-semibold text-white">Add Session</div>
          <div className="text-xs text-[#6f7785]">Use realistic time blocks.</div>
        </div>
        <div className="h-8 w-8 rounded-full bg-[#1e2027] border border-[#2b2e38]" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-[#aeb4bf]">Topic Name</label>
        <input
          className="border border-[#2b2e38] rounded-xl p-3 bg-[#111218] text-white"
          type="text"
          {...register("topic", { required: true })}
        />
        {errors.topic && (
          <span className="text-xs text-red-600">Topic is required</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-[#aeb4bf]">Subject</label>
        <select
          className="border border-[#2b2e38] rounded-xl p-3 bg-[#111218] text-white"
          {...register("subject")}
        >
          <option>DSA</option>
          <option>Web Dev</option>
          <option>DBMS</option>
          <option>OS</option>
          <option>Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-[#aeb4bf]">Duration (minutes)</label>
        <input
          className="border border-[#2b2e38] rounded-xl p-3 bg-[#111218] text-white"
          type="number"
          min="10"
          {...register("duration", { valueAsNumber: true, min: 10 })}
        />
        {errors.duration && (
          <span className="text-xs text-red-600">Min 10 minutes</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-[#aeb4bf]">Priority</label>
        <select
          className="border border-[#2b2e38] rounded-xl p-3 bg-[#111218] text-white"
          {...register("priority")}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-[#aeb4bf]">Date</label>
        <input
          className="border border-[#2b2e38] rounded-xl p-3 bg-[#111218] text-white"
          type="date"
          {...register("date")}
        />
      </div>

      <button className="bg-[#d9c7ff] text-[#1a1b21] rounded-xl py-3 font-semibold">
        Add Session
      </button>
    </form>
  );
};

export default SessionForm;
