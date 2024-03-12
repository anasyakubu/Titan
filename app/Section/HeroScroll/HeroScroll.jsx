"use client";
import React from "react";
import ContainerScroll from "../../../components/ui/container-scroll-animation";
import Frame from "../../assets/frame-3.png";
export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Introducing <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Titan.ai
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image: Frame,
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Founder, Sarah's Kitchen",
    image: Frame,
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Software Engineer, Tech Corp",
    image: Frame,
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc",
    image: Frame,
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Data Scientist, DataWorks",
    image: Frame,
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "UX Designer, DesignHub",
    image: Frame,
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    designation: "CTO, FutureTech",
    image: Frame,
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "CEO, StartUp",
    image: Frame,
  },
  {
    name: "James Wilson",
    designation: "DevOps Engineer, CloudNet",
    image: Frame,
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "Marketing Manager, MarketGrowth",
    image: Frame,
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Frontend Developer, WebSolutions",
    image: Frame,
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: Frame,
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: Frame,
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: Frame,
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: Frame,
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: Frame,
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: Frame,
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: Frame,
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: Frame,
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: Frame,
    badge: "Developer",
  },
];
