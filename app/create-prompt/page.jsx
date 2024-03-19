"use client";
import React from "react";
import Nav from "../../components/Shared/Nav";
import Form from "../../components/Shared/Form";
import {
  collection,
  addDoc,
  // getDocs,
  // querySnapshot,
  // query,
  // onSnapshot,
  // doc,
  // deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreatePrompt = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // alert(post.prompt);
    // alert(post.tag);
    // alert(user.imageUrl);

    try {
      // const addItem = async (e) => {
      //   e.preventDefault();
      if (post.prompt !== "" && post.tag !== "") {
        //setItems([...items, newItems]);
        addDoc(collection(db, "prompts"), {
          prompt: post.prompt,
          tag: post.tag,
          creatorID: user.id,
          creatorName: user.fullName,
          creatorUsername: user.username,
          lastSignInAt: user.lastSignInAt,
          creatorEmail: user.email,
          creatorPhotoUrl: user.imageUrl,
        });
        // setNewItems({ name: "", price: "" });
        alert("Successful");
        router.push("/Prompt");
      }
      // };
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="CreatePrompt">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Nav />
        <div className="mt-5 p-10">
          <div className="">
            <h1 className="text-4xl font-extrabold">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ">
                Create
              </span>{" "}
              Prompts
            </h1>
            <p className="mt-5 text-lg text-gray-600  max-w-2xl text-left">
              Create and share amazing prompts with the world, and let your
              imagination run wild with any AI-powered platform
            </p>
            <div className="">
              <Form
                type="Create"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPrompt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePrompt;
