import React from "react";
import HomeHeader from "../Section/HomeHeader/HomeHeader";
import AboutSection from "../Section/AboutSection/AboutSection";
import Testimonial from "../Section/Testimonial/Testimonial";
import Discover from "../Section/Discover/Discover";
import Footer from "../Section/Footer/Footer";

const page = () => {
  return (
    <div>
      <HomeHeader />
      <AboutSection />
      <Discover />
      <Testimonial />
      {/* <MacbookScrollDemo /> */}
      <Footer />
    </div>
  );
};

export default page;
