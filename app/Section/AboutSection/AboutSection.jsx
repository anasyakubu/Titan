import React from "react";
import Image from "next/image";
import Frame from "../../assets/frame-3.png";
import "./AboutSection.scss";
import { HeroScroll } from "../HeroScroll/HeroScroll";

const AboutSection = () => {
  return (
    <div className="AboutSection">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="p-10">
          <div className="text-center">
            <HeroScroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
