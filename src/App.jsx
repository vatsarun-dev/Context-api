import React from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="bg-[#fff4ef] min-h-screen">
      <NavBar />
      <Dashboard />
    </div>
  );
};

export default App;
