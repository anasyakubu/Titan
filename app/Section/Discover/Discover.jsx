import React from "react";
import DiscoverCard from "../../../components/Shared/DiscoverCard";

const Discover = () => {
  return (
    <div className="Discover">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="p-10">
          <div className="text-center">
            <h6 className="font-bold text-sm">DISCOVER:</h6>
            <h1 className="mt-3 text-4xl md:text-[6rem] font-bold leading-none">
              Generative AI Overview
            </h1>
            <div className="text-left">
              <p className="mt-5 text-sm">
                Explore how teams at Google are using Generative AI to create
                new experiences.
              </p>
              <p className="mt-3 text-sm">
                Historically, AI was used to understand and recommend
                information. Now, generative AI can also help us create new
                content. Generative AI builds on existing technologies, like
                large language models (LLMs) which are trained on large amounts
                of text and learn to predict the next word in a sentence. For
                example, peanut butter and is more likely to be followed by
                jelly than shoelace. Generative AI can not only create new text,
                but also images, videos, or audio. Explore how teams at Google
                are implementing generative AI to create new experiences.
              </p>
              <div className="mt-5">
                <DiscoverCard
                  title="AI Chatbot"
                  text="Titan AI enables students to seamlessly integrate AI models with an easy and safe API, quickly develop prompts, and transform ideas into reality."
                  link="/Ask"
                  subtitle="Empowering Students to study with AI"
                />
                <DiscoverCard
                  title="Prompts Management"
                  text="An Open-source AI Prompting tool for modern world to discover, create and sharing creative prompts"
                  link="/Prompts"
                  subtitle="Discover & Share
                  AI-Powered Prompts"
                />
                <DiscoverCard
                  title="Paraphrasing Tools"
                  text="Discover how to make writing painless anywhere. Seamlessly integrate Titan AI into your favorite tools.
                  "
                  link=""
                  subtitle=""
                />
                <DiscoverCard
                  title="Summarizing Tools"
                  text=""
                  link=""
                  subtitle=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
