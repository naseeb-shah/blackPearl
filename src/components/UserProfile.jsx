import React from "react";

const UserProfile = () => {
  return (
    <div className="w-56 p-5 mx-auto bg-white rounded-md shadow-md">
      <div className="mx-auto mb-4 h-40">
        <img
          src="/media.png"
          alt="User"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="mb-2 text-center">
        <h2 className="text-xl font-semibold">John Doe</h2>
      </div>

      <div className="mb-4 text-center">
        <p className="text-gray-600">CEO</p>
      </div>

      <div className="flex justify-center">
        <a href="#" className="mx-2">
          <img
            src="/twitter.png"
            alt="Twitter"
            className="w-6 h-6"
          />
        </a>
        <a href="#" className="mx-2">
          <img
            src="/facebook.png"
            alt="Facebook"
            className="w-6 h-6"
          />
        </a>
        <a href="#" className="mx-2">
          <img
            src="/instagram.png"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
