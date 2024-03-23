import React from "react";
import TestimonialCard from "../../../components/component/testionial-card";
import "./Testimonial.scss";

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
            <TestimonialCard
              name="Abbas Yakubu"
              text="This AI app is a lifesaver! The paraphrasing tool helped me ace my essays without sacrificing originality. Summarizing complex topics became a breeze, and the chatbot? It's like having a 24/7 study buddy by my side. Highly recommend!"
            />
            <TestimonialCard
              name="Habiba Jibril Yahaya"
              text="As a busy student, time is precious. Thanks to this AI app, I've reclaimed hours of my day. The paraphrasing tool streamlined my writing process, while the summarizing tool condensed mountains of information into bite-sized chunks. With the chatbot's instant assistance, studying has never been smoother."
            />
            <TestimonialCard
              name="Salma Naseer"
              text="Using this AI app was a game-changer for my grades. The paraphrasing tool polished my assignments to perfection, and the summarizing tool helped me grasp key concepts in record time. Plus, the chatbot? It's a genius study partner, always there when I need a quick answer. Couldn't imagine my academic life without it!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
