// import React from "react";
// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

// export default function YourComponent() {
//   const classes = cn("class1", "class2");

//   return <div className={classes}></div>;
// }

import clsx from "clsx";
import twMerge from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// import { ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }
