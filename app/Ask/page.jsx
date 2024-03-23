import React from "react";
import Nav from "../../components/Shared/Nav";
import Chat from "../Section/Chat/Chat";
import Footer from "../Section/Footer/Footer";

const Ask = () => {
  return (
    <div className="Ask">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Nav />
        <Chat />
        <Footer />
      </div>
    </div>
  );
};

export default Ask;
