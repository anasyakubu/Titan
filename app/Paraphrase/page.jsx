import React from "react";
import ParaphraseHeader from "../Section/ParaphraseHeader/ParaphraseHeader";
import ParaphraseText from "../Section/ParaphraseText/ParaphraseText";
import Footer from "../Section/Footer/Footer";

const Paraphrase = () => {
  return (
    <div className="Paraphrase">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <ParaphraseHeader />
        <ParaphraseText />
        <Footer />
      </div>
    </div>
  );
};

export default Paraphrase;
