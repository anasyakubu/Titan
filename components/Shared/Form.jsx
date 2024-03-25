import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 bg-gray-200 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm bg-white text-black outline-0 "
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Field of Prompt{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className=" w-full flex rounded-lg mt-2 p-3 text-sm bg-white text-black outline-0"
          />
        </label>

        <div className="flex justify-between mx-3 mb-5 gap-4">
          <Link href="/Prompt" className="text-gray-500 text-sm">
            <Button className="" variant="destructive">
              Cancel
            </Button>
          </Link>

          <Button type="submit" disabled={submitting}>
            {submitting ? `${type}ing...` : type}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
