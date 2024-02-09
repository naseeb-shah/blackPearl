import React, { useState, useEffect } from "react";
import SidebarButton from "./SideBarButtons";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "../store/slices/dashboardSlice";

const SideBar = () => {
  const { sidebarOpen } = useSelector((state) => state.dashboardSlice);
  const [activeButton, setActiveButton] = useState("Dashboard");
  const dispatch = useDispatch();

  const handleButtonClick = (text) => {
    setActiveButton(text);
    dispatch(setSideBar(!sidebarOpen));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.getElementById("sidebar");

      if (sidebar) {
        const offsetTop = sidebar.offsetTop;
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (window.innerWidth >= 768) {
          // Adjust the breakpoint as needed
          if (scrollTop > offsetTop && !sidebarOpen) {
            dispatch(setSideBar(true));
          } else if (scrollTop <= offsetTop && sidebarOpen) {
            dispatch(setSideBar(false));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, sidebarOpen]);

  return (
    <>
      <div
        id="sidebar"
        className={`fixed inset-0 bg-gray-900 lg:flex lg:w-64 ${
          sidebarOpen ? "bg-gray-900 z-20" : "hidden"
        } p-4 flex flex-col justify-between h-screen`}
      >
        <div className="flex flex-col items-center mb-5 mt-5">
          <img
            className="h-16 w-16 object-cover mb-2 rounded-full"
            src="/Briefcase.png"
            alt="Logo"
          />
          <h2 className={`text-white text-sm font-bold`}>STATEBOARD</h2>
        </div>

        <div className="flex flex-col-reverse">
          <SidebarButton
            text="Help"
            logoSrc="/Help.png"
            isActive={activeButton === "Help"}
            onClick={() => handleButtonClick("Help")}
          />
          <SidebarButton
            text="Plugins"
            logoSrc="/Puzzle.png"
            isActive={activeButton === "Plugins"}
            onClick={() => handleButtonClick("Plugins")}
          />
          <SidebarButton
            text="Support"
            logoSrc="/Support.png"
            isActive={activeButton === "Support"}
            onClick={() => handleButtonClick("Support")}
          />
          <SidebarButton
            text="Dashboard"
            logoSrc="/Circled Menu.png"
            isActive={activeButton === "Dashboard"}
            onClick={() => handleButtonClick("Dashboard")}
          />
        </div>

        <button
          className={`w-full h-10 ${
            sidebarOpen ? "bg-gray-200" : "bg-white"
          } py-2 px-4 text-orange-500 hover:bg-gray-100 flex items-center justify-center rounded`}
          onClick={() => {
            handleButtonClick("Logout");
          }}
        >
          Logout
          <img
            className="h-4 w-4 object-cover ml-2 rounded-full"
            src="/Shutdown.png"
            alt="Logout Icon"
          />
        </button>
      </div>
    </>
  );
};

export default SideBar;
