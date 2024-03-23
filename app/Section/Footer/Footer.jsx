import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoGlobeOutline } from "react-icons/io5";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="p-10">
          <div className="bg-black p-5 pt-10 rounded-lg text-white">
            <div className="p-1 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {/* One */}
              <div className="">
                <p className="text-sm">
                  <Link href="/">About Us</Link>
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/">Feedbacks</Link>
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/">Communities</Link>
                </p>
              </div>
              {/* Two */}
              <div className="">
                <p className="text-sm">
                  <Link href="/">Trust & Safety Issues</Link>
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/">Help & Support</Link>
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/" target="_blank">
                    Developer
                  </Link>
                </p>
              </div>
              {/* Three */}
              <div className="">
                <p className="text-sm">
                  <Link href="/">Terms of Services</Link>
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/">Privacy Policy</Link>
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/">Faq</Link>
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/">Profile</Link>
                </p>
              </div>
              {/* Four */}
              <div className="">
                <p className="text-sm">
                  <Link href="/">Contact Us</Link>
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/">Download</Link>
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/">Github</Link>
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/">X</Link>
                </p>
              </div>
            </div>
            {/*  */}
            <div className="mt-10 mb-5">
              <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                <div className="icons">
                  <p className="flex">
                    {/* <span>Fellow me</span> */}
                    <span
                      className="flex justify-around"
                      //style={{ marginLeft: "20px" }}
                    >
                      <Link
                        href="https://www.instagram.com/anass.developer/"
                        className="p-3 bg-white rounded-full m-2 icon"
                        target="_blank"
                      >
                        <FaInstagram className="text-black" />
                      </Link>
                      <Link
                        href="https://twitter.com/___anaaasss"
                        className="p-3 bg-white rounded-full m-2 icon"
                        target="_blank"
                      >
                        <BsTwitterX className="text-black" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/anas-yakubu-02a20725a/"
                        className="p-3 bg-white rounded-full m-2 icon"
                        target="_blank"
                      >
                        <FaLinkedin className="text-black" />
                      </Link>
                      <Link
                        href="https://github.com/anasyakubu"
                        className="p-3 bg-white rounded-full m-2 icon"
                        target="_blank"
                      >
                        <FaGithub className="text-black" />
                      </Link>
                      <Link
                        href="https://portfolio-beta-psi.vercel.app/"
                        className="p-3 bg-white rounded-full m-2 icon"
                        target="_blank"
                      >
                        <IoGlobeOutline className="text-black" />
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="m-5 border border-b border-white"></div>
            {/* copy right */}
            <div className="mt-5 p-3 text-center">
              <p className="text-sm">
                {/* <span>&#169;</span> */}
                <span>2024 </span>
                <span>Made with ❤️ by </span>

                <Link
                  className="underline"
                  href="https://portfolio-beta-psi.vercel.app/"
                  target="_blank"
                >
                  Anas Yakubu
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
