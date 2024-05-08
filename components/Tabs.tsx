"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { barlow_condensed } from "@/utilities/fonts";

export default function DestinationTabs() {
  const [activeTab, setActiveTab] = useState("moon");

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
  };
  return (
    <Tabs defaultValue="moon" className=" text-white grid">
      <TabsList className="mt-4 xl:translate-x-[60px] xl:translate-y-[50px]">
        <TabsTrigger
          value="moon"
          className={`text-[14px] text-secondary font-medium md:text-[1rem] ${
            activeTab === "moon" ? "active_tab" : ""
          }`}
          onClick={() => handleTabClick("moon")}
        >
          MOON
        </TabsTrigger>
        <TabsTrigger
          value="mars"
          className={`text-[14px] text-secondary font-medium md:text-[1rem] ${
            activeTab === "mars" ? "active_tab" : ""
          }`}
          onClick={() => handleTabClick("mars")}
        >
          MARS
        </TabsTrigger>
        <TabsTrigger
          value="europa"
          className={`text-[14px] text-secondary font-medium md:text-[1rem] ${
            activeTab === "europa" ? "active_tab" : ""
          }`}
          onClick={() => handleTabClick("europa")}
        >
          EUROPA
        </TabsTrigger>
        <TabsTrigger
          value="titan"
          className={`text-[14px] text-secondary font-medium md:text-[1rem] ${
            activeTab === "titan" ? "active_tab" : ""
          }`}
          onClick={() => handleTabClick("titan")}
        >
          TITAN
        </TabsTrigger>
      </TabsList>
      <TabsContent value="moon" className="grid gap-8">
        <div className="grid justify-items-center gap-y-4 mt-4 lg:flex lg:justify-between lg:gap-x-12 lg:items-center">
          <Image
            src={"/destination/image-moon.webp"}
            alt=""
            width={200}
            height={200}
            className="planet_image"
          />
          <div>
            <h2 className="text-[56px] md:text-[80px] lg:text-[100px] lg:text-start">
              MOON
            </h2>
            <p className="px-8 lg:text-start lg:pl-0">
              See our planet as you&apos;ve never seen it before. A perfect
              relaxing trip away to help regain perspective and come back
              refreshed. While you&apos;re there, take in some history by
              visiting the Luna 2 and Apollo 11 landing sites.
            </p>

            <hr className="my-6 w-[80%] mx-auto lg:w-full lg:mx-0" />

            <div className="grid gap-y-4 md:flex md:justify-center md:gap-x-20 lg:justify-start">
              <div className="distance">
                <h3
                  className={cn(
                    "text-[14px] text-secondary tracking-[2.36px] lg:text-start",
                    barlow_condensed.className
                  )}
                >
                  AVG. DISTANCE
                </h3>
                <p className="text-[28px] lg:text-start">384,400 KM</p>
              </div>

              <div className="time_travel">
                <h3
                  className={cn(
                    "text-[14px] text-secondary tracking-[2.36px] lg:text-start",
                    barlow_condensed.className
                  )}
                >
                  EST. TRAVEL TIME
                </h3>
                <p className="text-[28px] lg:text-start">3 DAYS</p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="mars" className="grid gap-8">
        <div className="grid justify-items-center gap-y-4 mt-4 lg:flex lg:justify-between lg:gap-x-12 lg:items-center">
          <Image
            src={"/destination/image-mars.webp"}
            alt=""
            width={200}
            height={200}
            className="planet_image"
          />
          <div>
            <h2 className="text-[56px] md:text-[80px] lg:text-[100px] lg:text-start">
              MARS
            </h2>
            <p className="px-8 lg:text-start lg:pl-0">
              Don&apos;t forget to pack your hiking boots. You&apos;ll need them
              to tackle Olympus Mons, the tallest planetary mountain in our
              solar system. It&apos;s two and a half times the size of Everest!
            </p>

            <hr className="my-6 w-[80%] mx-auto lg:w-full lg:mx-0" />

            <div className="grid gap-y-4 md:flex md:justify-center md:gap-x-20 lg:justify-start">
              <div className="distance">
                <h3
                  className={cn(
                    "text-[14px] text-secondary tracking-[2.36px] lg:text-start",
                    barlow_condensed.className
                  )}
                >
                  AVG. DISTANCE
                </h3>
                <p className="text-[28px] lg:text-start">225 MIL. KM</p>
              </div>

              <div className="time_travel">
                <h3
                  className={cn(
                    "text-[14px] text-secondary tracking-[2.36px] lg:text-start",
                    barlow_condensed.className
                  )}
                >
                  EST. TRAVEL TIME
                </h3>
                <p className="text-[28px] lg:text-start">9 MONTHS</p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="europa" className="grid gap-8">
        <div className="grid justify-items-center gap-y-4 mt-4 lg:flex lg:justify-between lg:gap-x-12 lg:items-center">
          <Image
            src={"/destination/image-europa.webp"}
            alt=""
            width={200}
            height={200}
            className="planet_image"
          />
          <div>
            <h2 className="text-[56px] md:text-[80px] lg:text-[100px] lg:text-start">
              EUROPA
            </h2>
            <p className="px-8 lg:text-start lg:pl-0">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover&apos;s dream. With an icy surface, it&apos;s
              perfect for a bit of ice skating, curling, hockey, or simple
              relaxation in your snug wintery cabin.
            </p>

            <hr className="my-6 w-[80%] mx-auto lg:w-full lg:mx-0" />

            <div className="grid gap-y-4 md:flex md:justify-center md:gap-x-20 lg:justify-start">
              <div className="distance">
                <h3
                  className={cn(
                    "text-[14px] text-secondary tracking-[2.36px] lg:text-start",
                    barlow_condensed.className
                  )}
                >
                  AVG. DISTANCE
                </h3>
                <p className="text-[28px] lg:text-start">628 MIL. KM</p>
              </div>

              <div className="time_travel">
                <h3
                  className={cn(
                    "text-[14px] text-secondary tracking-[2.36px] lg:text-start",
                    barlow_condensed.className
                  )}
                >
                  EST. TRAVEL TIME
                </h3>
                <p className="text-[28px] lg:text-start">3 YEARS</p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="titan" className="grid gap-8">
        <div className="grid justify-items-center gap-y-4 mt-4 lg:flex lg:justify-between lg:gap-x-12 lg:items-center">
          <Image
            src={"/destination/image-titan.webp"}
            alt=""
            width={200}
            height={200}
            className="planet_image"
          />
          <div>
            <h2 className="text-[56px] md:text-[80px] lg:text-[100px] lg:text-start">
              TITAN
            </h2>
            <p className="px-8 lg:text-start lg:pl-0">
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>

            <hr className="my-6 w-[80%] mx-auto lg:w-full lg:mx-0" />

            <div className="grid gap-y-4 md:flex md:justify-center md:gap-x-20 lg:justify-start">
              <div className="distance">
                <h3
                  className={cn(
                    "text-[14px] text-secondary tracking-[2.36px] lg:text-start",
                    barlow_condensed.className
                  )}
                >
                  AVG. DISTANCE
                </h3>
                <p className="text-[28px] lg:text-start">1.6 BIL. KM</p>
              </div>

              <div className="time_travel">
                <h3
                  className={cn(
                    "text-[14px] text-secondary tracking-[2.36px] lg:text-start",
                    barlow_condensed.className
                  )}
                >
                  EST. TRAVEL TIME
                </h3>
                <p className="text-[28px] lg:text-start">7 YEARS</p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
