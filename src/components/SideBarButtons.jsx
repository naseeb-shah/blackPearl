// Button.js
import React from "react";

const SidebarButton = ({ text, logoSrc, isActive, onClick }) => {
  const buttonClasses = `rounded-md my-2 w-full py-2 px-4 text-left   hover:bg-gray-700 flex items-center justify-start ${
    isActive ? "bg-white text-black" : "bg-[#1a1f30] text-white"
  } mr-2em  `;

  return (
    <button className={buttonClasses} onClick={onClick}>
      <img
        className="h-6 w-6 object-cover mr-2 rounded-full"
        src={logoSrc}
        alt={`${text} Logo`}
      />
      {text}
    </button>
  );
};

export default SidebarButton;
