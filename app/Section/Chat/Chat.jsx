import React from "react";
import "./Chat.scss";
import Avater from "../../assets/user-1.jpg";
import Image from "next/image";

const Chat = () => {
  return (
    <div className="Chat">
      <div className="p-10">
        <div class="chat-container">
          <div class="message-container">
            <div class="message sender-message">
              <Image src={Avater} alt="Sender Avatar" class="avatar" />
              Hello there!
            </div>
            <div class="message receiver-message">
              <Image src={Avater} alt="Receiver Avatar" class="avatar" />
              Hi! How can I help you today?
            </div>
            <div class="message sender-message">
              <Image src={Avater} alt="Sender Avatar" class="avatar" />I have a
              question about your products.
            </div>
            <div class="message receiver-message">
              <Image src={Avater} alt="Receiver Avatar" class="avatar" />
              Sure, feel free to ask!
            </div>
          </div>

          <div class="message">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
