import React from "react";
import PromptHeader from "../Section/PromptHeader/PromptHeader";
import PromptList from "../Section/PromptList/PromptList";
import Feature from "../Section/Feature/Feature";
import Footer from "../Section/Footer/Footer";

const Prompt = () => {
  return (
    <div className="Prompt">
      <PromptHeader />
      <PromptList />
      <Feature />
      <Footer />
    </div>
  );
};

export default Prompt;
