import React from "react";
import Nav from "../../../components/Shared/Nav";
import "./PromptHeader.scss";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Img from "../../assets/Android-amico.svg";

const PromptHeader = () => {
  return (
    <div className="PromptHeader">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Nav />
        <div className="m-5 rounded-lg border border-black p-5">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/*  */}
            <div className="">
              <h1 className="text-black text-3xl font-extrabold">
                Write & Share Prompts :
              </h1>
              <p className="mt-5 text-black text-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                eaque praesentium doloremque deserunt illum, adipisci amet,
                explicabo qui odio tempora sed fugiat assumenda laboriosam
                numquam ut officia nobis earum. Accusamus.
              </p>
              <Link className="mt-5" href="/create-prompt">
                <Button className="mt-5">Create a Prompts</Button>
              </Link>
            </div>
            {/*  */}
            <div className="flex justify-center text-center imgSection">
              <Image className="w-64" src={Img} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptHeader;
