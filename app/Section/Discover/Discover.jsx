import React from "react";
import DiscoverCard from "../../../components/Shared/DiscoverCard";
import chatgpt from "../../../app/assets/chatgpt.jpg";
import prompt from "../../../app/assets/prompt.jpg";
import Summarize from "../../../app/assets/Summarize.jpg";
import Paraphrase from "../../../app/assets/Paraphrase.jpg";
import "./Discover.scss";

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
                  text=" Our chatbot service utilizes advanced artificial intelligence algorithms to provide instant and personalized responses to user queries. Whether it's customer support, lead generation, or information retrieval, our chatbot streamlines communication and enhances user experience."
                  link="/Ask"
                  subtitle="Empowering Students to study with AI"
                  img={chatgpt}
                />
                <DiscoverCard
                  title="Prompts Management"
                  text="An Open-source AI Prompting tool for modern world to discover, create and sharing creative prompts"
                  link="/Prompts"
                  subtitle="Discover & Share
                  AI-Powered Prompts"
                  img={prompt}
                />
                <DiscoverCard
                  title="Paraphrasing Tools"
                  text=" Our paraphrasing tool employs cutting-edge algorithms to rephrase text while maintaining clarity and original meaning. It's perfect for content creators, students, and professionals looking to avoid plagiarism or refresh their content.
                  "
                  link="Paraphrase"
                  subtitle="Automatic text analysis, Context-aware rewriting, Multiple language support."
                  img={Paraphrase}
                />
                <DiscoverCard
                  title="Summarizing Tools"
                  text="Our summarizing tool condenses lengthy documents, articles, or texts into concise summaries without losing essential information. It's ideal for extracting key points, conducting research, or preparing presentations."
                  link="Summarize"
                  subtitle="AI-powered summarization, Extractive and abstractive summarization techniques."
                  img={Summarize}
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
