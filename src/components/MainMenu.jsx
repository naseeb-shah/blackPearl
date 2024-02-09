import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";

const MainMenu = () => {
  return (
    <div className="flex-1 p-4 bg-[#e8edff]">
      <Header />
      <Dashboard />
    </div>
  );
};

export default MainMenu;
