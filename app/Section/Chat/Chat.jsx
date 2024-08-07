"use client";
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useUser } from "@clerk/nextjs";
import "./Chat.scss";
import Avater from "../../assets/user-1.jpg";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Logo from "../../assets/ai-logo.png";

const Chat = () => {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

  const [textPar, setTextPar] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

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
        <div className="chat-container p-2">
          <div className="message-container">
            <div className="message sender-message">
              <Image src={Avater} alt="Sender Avatar" class="avatar" />
              Hi! How can I help you today?
            </div>
            <div className="message receiver-message">
              <Image
                src={user.imageUrl}
                height={48}
                width={48}
                alt="Receiver Avatar"
                class="avatar"
              />
              {textPar}
            </div>
            {loading === true && aiResponse === "" ? (
              <p className="text-sm text-black">Loading ...</p>
            ) : (
              <div className="message sender-message">
                <Image src={Avater} alt="Sender Avatar" className="avatar" />
                {aiResponse}
              </div>
            )}
          </div>

          <div className="message">
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
