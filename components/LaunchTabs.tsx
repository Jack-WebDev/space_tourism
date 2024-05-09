"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { barlow_condensed } from "@/utilities/fonts";

export default function LaunchTabs() {
  const [activeLaunch, setactiveLaunch] = useState("1");

  const handleTabClick = (tabValue: string) => {
    setactiveLaunch(tabValue);
  };
  return (
    <Tabs defaultValue="1" className=" grid">
      <TabsList className="flex gap-x-4 mt-4 xl:translate-x-[60px] xl:translate-y-[50px]">
        <TabsTrigger
          value="1"
          className={`p-[0.5rem] aspect-[1] w-[13%] md:w-[5%] rounded-full text-white border-2 border-white ${
            activeLaunch === "1" ? "active_launch" : ""
          }`}
          onClick={() => handleTabClick("1")}
        >1</TabsTrigger>
        <TabsTrigger
          value="2"
          className={`p-[0.5rem] aspect-[1] w-[13%] md:w-[5%] rounded-full text-white border-2 border-white ${
            activeLaunch === "2" ? "active_launch" : ""
          }`}
          onClick={() => handleTabClick("2")}
        >2</TabsTrigger>
        <TabsTrigger
          value="3"
          className={`p-[0.5rem] aspect-[1] w-[13%] md:w-[5%] rounded-full text-white border-2 border-white ${
            activeLaunch === "3" ? "active_launch" : ""
          }`}
          onClick={() => handleTabClick("3")}
        >3</TabsTrigger>
      </TabsList>
      <TabsContent value="1" className="grid gap-8">
        <div className="flex flex-col items-center md:flex-col-reverse lg:flex-row-reverse gap-y-4 mt-4 lg:flex lg:justify-between lg:gap-x-12 lg:items-center">
          <Image
            src={"/technology/image-launch-vehicle-landscape.jpg"}
            alt=""
            width={200}
            height={200}
            className="crew_image lg:hidden"
            style={{width: '100%'}}
          />
                    <Image
            src={"/technology/image-launch-vehicle-portrait.jpg"}
            alt=""
            width={200}
            height={200}
            className="crew_image hidden lg:inline-block"
          />
          <div className="my-8 grid gap-y-4 lg:my-0">
            <h2 className="text-[1rem] text-secondary md:text-[24px] lg:text-[32px] lg:text-start">
              THE TERMINOLOGY
            </h2>
            <h3 className="text-[24px] text-white md:text-[40px] lg:text-[56px] lg:text-start">
              LAUNCH VEHICLE
            </h3>
            <p className="px-4 text-secondary md:text-[1rem] md:w-[80%] md:mx-auto lg:text-[18px] lg:text-start lg:pl-0 lg:ml-0">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth&apos;s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it&apos;s quite an awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="2" className="grid gap-8">
        <div className="flex flex-col items-center md:flex-col-reverse lg:flex-row-reverse gap-y-4 mt-4 lg:flex lg:justify-between lg:gap-x-12 lg:items-center">
          <Image
            src={"/technology/image-spaceport-landscape.jpg"}
            alt=""
            width={200}
            height={200}
            className="crew_image lg:hidden"
            style={{width: '100%'}}
          />
                    <Image
            src={"/technology/image-spaceport-portrait.jpg"}
            alt=""
            width={200}
            height={200}
            className="crew_image hidden lg:inline-block"
          />
          <div className="my-8 grid gap-y-4 lg:my-0">
            <h2 className="text-[1rem] text-secondary md:text-[24px] lg:text-[32px] lg:text-start">
              THE TERMINOLOGY
            </h2>
            <h3 className="text-[24px] text-white md:text-[40px] lg:text-[56px] lg:text-start">
              SPACEPORT
            </h3>
            <p className="px-4 text-secondary md:text-[1rem] md:w-[80%] md:mx-auto lg:text-[18px] lg:text-start lg:pl-0 lg:ml-0">
            A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth&apos;s rotation for launch.
            </p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="3" className="grid gap-8">
        <div className="flex flex-col items-center md:flex-col-reverse lg:flex-row-reverse gap-y-4 mt-4 lg:flex lg:justify-between lg:gap-x-12 lg:items-center">
          <Image
            src={"/technology/image-space-capsule-landscape.jpg"}
            alt=""
            width={200}
            height={200}
            className="crew_image lg:hidden"
            style={{width: '100%'}}
          />
                    <Image
            src={"/technology/image-space-capsule-portrait.jpg"}
            alt=""
            width={200}
            height={200}
            className="crew_image hidden lg:inline-block"
          />
          <div className="my-8 grid gap-y-4 lg:my-0">
            <h2 className="text-[1rem] text-secondary md:text-[24px] lg:text-[32px] lg:text-start">
              THE TERMINOLOGY
            </h2>
            <h3 className="text-[24px] text-white md:text-[40px] lg:text-[56px] lg:text-start">
                SPACE CAPSULE
            </h3>
            <p className="px-4 text-secondary md:text-[1rem] md:w-[80%] md:mx-auto lg:text-[18px] lg:text-start lg:pl-0 lg:ml-0">
            A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth&apos;s atmosphere without wings. Our capsule is where you&apos;ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
            </p>
          </div>
        </div>
      </TabsContent>

 


    </Tabs>
  );
}
