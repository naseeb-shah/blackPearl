import React from "react";
import MainMenu from "../components/MainMenu";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <>
      <div className="flex h-screen bg-[#e8edff]">
        <SideBar />
        <div className="flex-1 lg:pl-64">
          <MainMenu />
        </div>
      </div>
    </>
  );
};

export default Home;
