import React from "react";
import Nav from "../../../components/Shared/Nav";

const SummarizeHeader = () => {
  return (
    <div className="SummarizeHeader">
      <Nav />
      <div className="">
        <div className="text-center">
          <h1 className="text-3xl text-gray-900 font-extrabold">
            Summarizing Tool
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SummarizeHeader;
