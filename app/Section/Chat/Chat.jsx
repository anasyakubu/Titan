import React from "react";
import "./Chat.scss";
import Avater from "../../assets/user-1.jpg";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Logo from "../../assets/ai-logo.png";

const Chat = () => {
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
              Hello there!
            </div>
            <div class="message receiver-message">
              <Image src={Avater} alt="Receiver Avatar" class="avatar" />
              Hi! How can I help you today?
            </div>
          </div>

          <div class="message">
            <input type="text" placeholder="Type your message..." />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
