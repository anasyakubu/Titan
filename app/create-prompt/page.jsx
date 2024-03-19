import React, { useState } from "react";
import Nav from "../../components/Shared/Nav";
import Form from "../../components/Shared/Form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router"; // Import from 'next/router' instead of 'next/navigation'

const CreatePrompt = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (post.prompt !== "" && post.tag !== "") {
        await addDoc(collection(db, "prompts"), {
          prompt: post.prompt,
          tag: post.tag,
          creatorID: user.id,
          creatorName: user.fullName,
          creatorUsername: user.username,
          lastSignInAt: user.lastSignInAt,
          creatorEmail: user.email,
          creatorPhotoUrl: user.imageUrl,
        });
        alert("Successful");
        router.push("/Prompt");
      }
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
