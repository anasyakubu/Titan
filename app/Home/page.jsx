import React from "react";
import HomeHeader from "../Section/HomeHeader/HomeHeader";
import AboutSection from "../Section/AboutSection/AboutSection";
import Testimonial from "../Section/Testimonial/Testimonial";
import Discover from "../Section/Discover/Discover";

const page = () => {
  return (
    <div>
      <HomeHeader />
      <AboutSection />
      <Discover />
      <Testimonial />
      {/* <MacbookScrollDemo /> */}
    </div>
  );
};

export default page;
