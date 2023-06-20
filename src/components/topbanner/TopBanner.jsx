import React from "react";

const TopBanner = ({pgName,pgDesc}) => {
  return (
    <div className="home_slider bg-gray-200">
      <div className="max-w-screen-xl mx-auto p-3 py-20">
        <p className="text-3xl text-gray-700 font-bold mb-5">{pgName}</p>
        <p className="text-gray-500 text-lg">{pgDesc}</p>
      </div>
    </div>
  );
};

export default TopBanner;
