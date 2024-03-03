import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          {/* Mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52"
            >
              {/* <NavigationMenuNav /> */}
              <li>
                <Link href="">Home</Link>
              </li>

              <li>
                <Link href="">FAQ</Link>
              </li>

              <li>
                <Link href="">Prompts</Link>
              </li>

              <li>
                <Link href="">Ask</Link>
              </li>

              <li>
                <Link href="">Item</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            Titan AI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <NavigationMenuNav /> */}
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">Prompts</Link>
            </li>
            <li>
              <Link href="/">Ask</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
