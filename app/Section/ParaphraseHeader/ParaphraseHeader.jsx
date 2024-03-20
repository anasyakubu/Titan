import React from "react";
import Nav from "../../../components/Shared/Nav";

const ParaphraseHeader = () => {
  return (
    <div className="ParaphraseHeader">
      <Nav />
      <div className="">
        <div className="text-center">
          <h1 className="text-3xl text-gray-900 font-extrabold">
            Paraphrasing Tool
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ParaphraseHeader;
