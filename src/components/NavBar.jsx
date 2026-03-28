import React from "react";

const NavBar = () => {
  return (
    <div className="h-[60px] w-full bg-white flex justify-between items-center p-5 font-bold">
      <h1 className="text-2xl text-[#275bf1]">Study Planner</h1>
      <div className="flex w-[50%] justify-evenly text-lg">
        <h1>DashBoard</h1>
        <h1>Sessions</h1>
        <h1>Analytics</h1>
      </div>

      <div className="flex gap-4 items-center">
        <button className="bg-[#275bf1] text-white border rounded-[50%] h-[40px] w-[40px] flex items-center justify-center">
          +
        </button>
        <img className="w-[50px]" src="/image.png" alt="" />
      </div>
    </div>
  );
};

export default NavBar;
