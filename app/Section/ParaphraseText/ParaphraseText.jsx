"use client";
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "../../../components/ui/button";
import "./ParaphraseText.scss";

const ParaphraseText = () => {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

  const [textPar, setTextPar] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Generative AI Call to fetch text insights
   */
  async function aiRun() {
    setLoading(true);
    setResponse("");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Paraphrase the below text : ${textPar}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  }

  const handleChangeSearch = (e) => {
    setTextPar(e.target.value);
  };

  const handleClick = () => {
    aiRun();
  };

  return (
    <div className="ParaphraseText">
      <div className="p-10">
        <div className="bg-white text-black rounded-lg shadow-lg border border-black">
          <div className="p-5 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* FORM */}
            <div className="formSection">
              {/* <form> */}
              <textarea
                className="w-full bg-gray-200 p-3 outline-none text-sm text-black rounded-lg"
                placeholder="Paste Text Here ..📋"
                rows="20"
                onChange={(e) => handleChangeSearch(e)}
              ></textarea>
              <Button className="mt-2" onClick={() => handleClick()}>
                Paraphrase
              </Button>
              {/* </form> */}
            </div>
            {/* DISPLAY */}
            <div className="displaySection">
              <div className="mt-2 lg:d-none">
                <h6 className="text-lg">Output :</h6>
              </div>
              {loading === true && aiResponse === "" ? (
                <p className="text-sm text-black">Loading ...</p>
              ) : (
                <div>
                  <p className="text-sm mt-3 text-black">{aiResponse}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParaphraseText;
