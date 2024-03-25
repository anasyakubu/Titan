"use client";
import React, { useState, useEffect } from "react";
// import Input from "../../../components/ui/input";
// import Input from "../../../@/components/ui/input";
import PromptCard from "../../../components/Shared/PromptCard";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import {
  collection,
  addDoc,
  getDocs,
  querySnapshot,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firestore";

const PromptList = () => {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "prompts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let promptArr = [];

      querySnapshot.forEach((doc) => {
        promptArr.push({ ...doc.data(), id: doc.id });
      });

      setPrompts(promptArr);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="PromptList">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="p-5">
          <div className="">
            <h2 className="text-black text-2xl font-semibold">
              Recent Added Prompts
            </h2>
            <div className="mt-5 flex justify-center text-center gap-5">
              {/* <Input type="email" placeholder="Email" /> */}
              <input
                type="search"
                placeholder="Search for Prompts..."
                className="input bg-white text-black input-bordered w-full max-w-xs"
              />
              <select className="select bg-white text-black select-bordered w-full max-w-xs">
                <option disabled selected>
                  Python
                </option>
                <option>Mathematics</option>
                <option>Computer</option>
                <option>Javascript</option>
              </select>
            </div>

            <div className="mt-5">
              <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {prompts.map((prompt, id) => (
                  <div className="mt-5" key={id}>
                    <PromptCard
                      name={prompt.creatorName}
                      images={prompt.creatorPhotoUrl}
                      email={prompt.creatorEmail}
                      promptText={prompt.prompt}
                      tag={prompt.tag}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptList;
