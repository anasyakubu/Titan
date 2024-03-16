import React from "react";

const Layout = (props) => {
  return (
    <div
      className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
      style={{ height: "100vh" }}
    >
      {" "}
      <div className="flex justify-center text-center pt-20 items-center w-full">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
