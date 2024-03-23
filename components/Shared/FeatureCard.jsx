import React from "react";
import { MdSpeed } from "react-icons/md";

const FeatureCard = ({ title, text }) => {
  return (
    <div className="FeatureCard shadow-sm rounded-lg">
      <div className="p-5">
        {/* Icon */}
        <div>
          <h1 className="text-3xl">
            <MdSpeed className="p-2 bg-black text-white rounded-full" />
          </h1>
        </div>
        {/* Title */}
        <div className="mt-5">
          <h6 className="text-xl text-black font-bold">{title}</h6>
        </div>
        {/* text */}
        <div className="mt-5">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
