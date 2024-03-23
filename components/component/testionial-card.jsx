"use client";
import React from "react";
import {
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
  Card,
} from "../ui/card";
import Image from "next/image";
import User from "../../app/assets/user-1.jpg";

function TestimonialCard({ name, text }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-6 flex items-start gap-6">
        <div className="rounded-full overflow-hidden border-2 border-foreground">
          <Image
            src={User}
            alt="User"
            className="rounded-full"
            height={48}
            placeholder="empty"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
        </div>
        <CardContent className="p-0 flex-1">
          <div className="grid gap-1.5">
            <CardTitle className="text-base">{name}</CardTitle>
            <CardDescription className="text-xs">Student</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <StarIcon className="w-4 h-4 fill-primary" />
            <StarIcon className="w-4 h-4 fill-primary" />
            <StarIcon className="w-4 h-4 fill-primary" />
            <StarIcon className="w-4 h-4 fill-primary" />
            <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
            <span className="text-sm ml-auto text-gray-500 dark:text-gray-400">
              3.2
            </span>
          </div>
        </CardContent>
      </CardHeader>
      <CardContent className="p-6 text-sm border-t">
        <p>{text}</p>
      </CardContent>
    </Card>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default TestimonialCard;
