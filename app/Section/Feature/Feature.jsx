import React from "react";
import "./Feature.scss";
import FeatureCard from "../../../components/Shared/FeatureCard";
import { MdSpeed } from "react-icons/md";

const Feature = () => {
  return (
    <div className="Feature">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="p-10">
          <div className="mt-5 text-center">
            <h2 className="text-black text-4xl font-bold">
              Cut your writing time by more than half <br /> using Titan AI
            </h2>
          </div>
          <div className="">
            <div className="p-3 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <FeatureCard
                title="Improve your speed"
                text="Paraphrase an unlimited number of words in one click, with a faster processing rate to get more done in less time.

                "
              />
              <FeatureCard
                title="Increase changes"
                text="Unlock the final Synonyms setting to maximize the changes to your text.
                "
              />
              <FeatureCard
                title="Define your voice"
                text="Get 6 additional modes plus the option to create an unlimited number of Custom modes."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
