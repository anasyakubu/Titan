import React from "react";
import TestimonialCard from "../../../components/component/testionial-card";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="p-10">
        <div className="text-center">
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
  );
};

export default Testimonial;
