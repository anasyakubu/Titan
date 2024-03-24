"use client";
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./Chat.scss";
import Avater from "../../assets/user-1.jpg";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Logo from "../../assets/ai-logo.png";

const Chat = () => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCzHfb2mXLWWYbjVLUANexHlqB7SvpePy4"
  );

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
    const prompt = textPar;
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
    <div className="Chat">
      <div className="p-10 pt-1">
        <div className="flex justify-center text-center">
          <Image className="w-32" src={Logo} alt="Logo" />
        </div>
        <div class="chat-container p-2">
          <div class="message-container">
            <div class="message sender-message">
              <Image src={Avater} alt="Sender Avatar" class="avatar" />
              Hi! How can I help you today?
            </div>
            <div class="message receiver-message">
              <Image src={Avater} alt="Receiver Avatar" class="avatar" />
              {textPar}
            </div>
            <div class="message sender-message">
              <Image src={Avater} alt="Sender Avatar" class="avatar" />
              {aiResponse}
            </div>
          </div>

          <div class="message">
            <input
              type="text"
              placeholder="Type your prompts..."
              onChange={(e) => handleChangeSearch(e)}
            />
            <Button onClick={() => handleClick()}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
