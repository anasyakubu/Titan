import React from "react";
import SummarizeHeader from "../Section/SummarizeHeader/SummarizeHeader";
import SummarizeText from "../Section/SummarizeText/SummarizeText";
import Footer from "../Section/Footer/Footer";

const Summarize = () => {
  return (
    <div className="Summarize">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <SummarizeHeader />
        <SummarizeText />
        <Footer />
      </div>
    </div>
  );
};

export default Summarize;
