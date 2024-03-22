import React from "react";
import Image from "next/image";
// import chatgpt from "../../app/assets/chatgpt.jpg";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

const DiscoverCard = ({ title, text, link, subtitle, img }) => {
  return (
    <div className="DiscoverCard">
      <div className="p-3">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* img */}
          <div className="">
            <Image
              className="w-full h-full rounded-2xl shadow-sm"
              src={img}
              alt="Chatgpt"
            />
          </div>
          {/* text */}
          <div className="">
            <div className="">
              <h5 className="text-light text-2xl text-gray-800">{title}</h5>
              <div className="mt-5 mb-5 border border-b-1 border-gray-700"></div>
              <h2 className="text-light text-4xl text-black">{subtitle}</h2>
              <p className="mt-5">{text}</p>
              <div className="mt-3">
                <Link
                  href={link}
                  className="flex text-blue-600 font-semibold underline"
                >
                  <span className="">Learn More</span> <GoLinkExternal />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
