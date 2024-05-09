"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { barlow_condensed } from "@/utilities/fonts";

export default function CrewTabs() {
  const [activeBullet, setActiveBullet] = useState("1");

  const handleTabClick = (tabValue: string) => {
    setActiveBullet(tabValue);
  };
  return (
    <Tabs defaultValue="1" className=" text-white grid">
      <TabsList className="flex gap-x-4 mt-4 xl:translate-x-[60px] xl:translate-y-[50px] md:hidden">
        <TabsTrigger
          value="1"
          className={`p-[0.5rem] aspect-[1] rounded-full bg-[rgba(255,255,255,0.5)] ${
            activeBullet === "1" ? "active_bullet" : ""
          }`}
          onClick={() => handleTabClick("1")}
        ></TabsTrigger>
        <TabsTrigger
          value="2"
          className={`p-[0.5rem] aspect-[1] rounded-full bg-[rgba(255,255,255,0.5)] ${
            activeBullet === "2" ? "active_bullet" : ""
          }`}
          onClick={() => handleTabClick("2")}
        ></TabsTrigger>
        <TabsTrigger
          value="3"
          className={`p-[0.5rem] aspect-[1] rounded-full bg-[rgba(255,255,255,0.5)] ${
            activeBullet === "3" ? "active_bullet" : ""
          }`}
          onClick={() => handleTabClick("3")}
        ></TabsTrigger>
        <TabsTrigger
          value="4"
          className={`p-[0.5rem] aspect-[1] rounded-full bg-[rgba(255,255,255,0.5)] ${
            activeBullet === "4" ? "active_bullet" : ""
          }`}
          onClick={() => handleTabClick("4")}
        ></TabsTrigger>
      </TabsList>
      <TabsContent value="1" className="grid gap-8">
        <div className="flex flex-col items-center md:flex-col-reverse lg:flex-row-reverse gap-y-4 mt-4 lg:flex lg:justify-between lg:gap-x-12 lg:items-center">
          <Image
            src={"/crew/image-mark-shuttleworth.webp"}
            alt=""
            width={200}
            height={200}
            className="crew_image"
          />
          <div className="my-8 grid gap-y-4 lg:my-0">
            <h2 className="text-[1rem] text-[rgba(255,255,255,0.5)] md:text-[24px] lg:text-[32px] lg:text-start">
              MISSION SPECIALIST
            </h2>
            <h3 className="text-[24px] md:text-[40px] lg:text-[56px] lg:text-start">
              MARK SHUTTLEWORTH
            </h3>
            <p className="px-4 text-secondary md:text-[1rem] md:w-[80%] md:mx-auto lg:text-[18px] lg:text-start lg:pl-0 lg:ml-0">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="2" className="grid gap-8">
        <div className="flex flex-col items-center md:flex-col-reverse lg:flex-row-reverse gap-y-4 mt-4 lg:flex lg:justify-between lg:gap-x-12 lg:items-center">
          <Image
            src={"/crew/image-victor-glover.webp"}
            alt=""
            width={200}
            height={200}
            className="crew_image"
          />
          <div className="my-8 grid gap-y-4 lg:my-0">
            <h2 className="text-[1rem] text-[rgba(255,255,255,0.5)] md:text-[24px] lg:text-[32px] lg:text-start">
              PILOT
            </h2>
            <h3 className="text-[24px] md:text-[40px] lg:text-[56px] lg:text-start">
              VICTOR GLOVER
            </h3>
            <p className="px-4 text-secondary md:text-[1rem] md:w-[80%] md:mx-auto lg:text-[18px] lg:text-start lg:pl-0 lg:ml-0">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="3" className="grid gap-8">
        <div className="flex flex-col items-center md:flex-col-reverse lg:flex-row-reverse gap-y-4 mt-4 lg:flex lg:justify-between lg:gap-x-12 lg:items-center">
          <Image
            src={"/crew/image-anousheh-ansari.webp"}
            alt=""
            width={200}
            height={200}
            className="crew_image"
          />
          <div className="my-8 grid gap-y-4 lg:my-0">
            <h2 className="text-[1rem] text-[rgba(255,255,255,0.5)] md:text-[24px] lg:text-[32px] lg:text-start">
              FLIGHT ENGINEER
            </h2>
            <h3 className="text-[24px] md:text-[40px] lg:text-[56px] lg:text-start">
              ANOUSHEH ANSARI
            </h3>
            <p className="px-4 text-secondary md:text-[1rem] md:w-[80%] md:mx-auto lg:text-[18px] lg:text-start lg:pl-0 lg:ml-0">
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="4" className="grid gap-8">
        <div className="flex flex-col items-center md:flex-col-reverse lg:flex-row-reverse gap-y-4 mt-4 lg:flex lg:justify-between lg:gap-x-12 lg:items-center">
          <Image
            src={"/crew/image-douglas-hurley.webp"}
            alt=""
            width={200}
            height={200}
            className="crew_image"
          />
          <div className="my-8 grid gap-y-4 lg:my-0">
            <h2 className="text-[1rem] text-[rgba(255,255,255,0.5)] md:text-[24px] lg:text-[32px] lg:text-start">
              COMMANDER
            </h2>
            <h3 className="text-[24px] md:text-[40px] lg:text-[56px] lg:text-start">
              DOUGLAS HURLEY
            </h3>
            <p className="px-4 text-secondary md:text-[1rem] md:w-[80%] md:mx-auto lg:text-[18px] lg:text-start lg:pl-0 lg:ml-0">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsList className="hidden gap-x-4 mt-4 lg:mt-0 lg:translate-y-[-30px] lg:flex lg:justify-start md:flex">
        <TabsTrigger
          value="1"
          className={`p-[0.5rem] aspect-[1] rounded-full bg-[rgba(255,255,255,0.5)] ${
            activeBullet === "1" ? "active_bullet" : ""
          }`}
          onClick={() => handleTabClick("1")}
        ></TabsTrigger>
        <TabsTrigger
          value="2"
          className={`p-[0.5rem] aspect-[1] rounded-full bg-[rgba(255,255,255,0.5)] ${
            activeBullet === "2" ? "active_bullet" : ""
          }`}
          onClick={() => handleTabClick("2")}
        ></TabsTrigger>
        <TabsTrigger
          value="3"
          className={`p-[0.5rem] aspect-[1] rounded-full bg-[rgba(255,255,255,0.5)] ${
            activeBullet === "3" ? "active_bullet" : ""
          }`}
          onClick={() => handleTabClick("3")}
        ></TabsTrigger>
        <TabsTrigger
          value="4"
          className={`p-[0.5rem] aspect-[1] rounded-full bg-[rgba(255,255,255,0.5)] ${
            activeBullet === "4" ? "active_bullet" : ""
          }`}
          onClick={() => handleTabClick("4")}
        ></TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
