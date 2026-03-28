import React from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="bg-[#0c0d0f] min-h-screen text-white">
      <NavBar />
      <Dashboard />
    </div>
  );
};

export default App;
