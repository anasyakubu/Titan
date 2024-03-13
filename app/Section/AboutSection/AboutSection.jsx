import React from "react";
import Image from "next/image";
import Frame from "../../assets/frame-3.png";
import "./AboutSection.scss";
import TestimonialCard from "@/components/component/testionial-card";
import { HeroScroll } from "../HeroScroll/HeroScroll";

const AboutSection = () => {
  return (
    <div className="AboutSection">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="p-10">
          {/* <div className="text-center">
            <h1
              className="text-3xl font-extrabold tracking-wide shadow-2 sm:text-4xl"
              style={{ color: "#000" }} //#122231
            >
              Introducing Titan.ai
            </h1>
            <p className="mt-3">
              Custom AI Toolkit Management for you, your team or your clients
            </p>
          </div> */}
          <div className="text-center">
            {/* <Image className="" src={Frame} alt="Titan" /> */}
            <HeroScroll />
          </div>
          <div className="mt-1 text-center">
            <div className="m-3">
              <h1
                className="text-2xl font-extrabold tracking-wide shadow-2 sm:text-3xl"
                style={{ color: "#000" }} //#122231
              >
                What people have to say
              </h1>
            </div>

            <div className="p-3 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
