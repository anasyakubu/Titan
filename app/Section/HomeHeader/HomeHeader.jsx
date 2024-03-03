import React from "react";
import Nav from "@/components/Shared/Nav";
import "./HomeHeader.scss";
import Image from "next/image";

// import { CarouselOne } from "@/components/Shared/CarouselHeader";
import { Button } from "../../../components/ui/button";

import NYM from "../../assets/nym.png";
import Proptter from "../../assets/logo.png";
import Img from "../../assets/ai-logo.svg";
import Vercel from "../../../public/vercel.svg";

// #f2f7f8 bg
// #3d4f60 text
const HomeHeader = () => {
  return (
    <div className="inset-0 -z-10  bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div
        className="HomeHeader"
        // style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
      >
        <Nav />
        <div className="lg:px-6">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* py-24 sm:py-0 */}
            <div className="pl-3 max-w-xl lg:py-16">
              {/* sm:py-48 lg:py-56 */}
              <div className="text">
                <h1
                  className="text-2xl font-extrabold tracking-wide shadow-2 sm:text-3xl"
                  style={{ color: "#000" }} //#122231
                >
                  Host, Connect, Celebrate: Your Events, Our Platform!
                </h1>
                <p
                  className="mt-4 text-sm leading-6"
                  style={{ color: "#122231" }} //#3d4f60 122231
                >
                  Welcome to Events, the premier destination for hosting and
                  discovering amazing events! Whether you`re planning a concert,
                  workshop, conference, or any other gathering, we`ve got you
                  covered. Start exploring now and bring your event ideas to
                  life!
                </p>
              </div>
              <div className="flex mt-10">
                {/* <button className="bg-transparent text-gray-900 ml-3 font-semibold border text-sm p-2 m-1 rounded-sm border-black">
                Feel the Innovation
              </button> */}
                <Button>Explore Now</Button>
              </div>
            </div>
            <div className="text-center flex justify-center items-center">
              <Image className="phoneImg" src={Img} alt="Logo" />
            </div>
          </div>
          <div className="p-5">
            <h6 className="font-semibold text-gray-900">
              Powered by some of the Best:
            </h6>

            <div className="flex">
              <div className="">
                {" "}
                <Image src={NYM} alt="MyGradeCard" className="h-10 w-20 m-3" />
              </div>
              <div className="">
                {" "}
                <Image src={Vercel} alt="Proptter" className="h-10 w-24 m-3" />
              </div>
              <div className="">
                {" "}
                <Image
                  src={Proptter}
                  alt="Proptter"
                  className="h-10 w-24 m-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
