import type { Metadata } from "next";

import { barlow_condensed } from "@/utilities/fonts";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import CrewTabs from "@/components/BulletTabs";
export const metadata: Metadata = {
  title: "Crew | Space tourism website",
  icons: {
    icon: "/favicon-32x32.png",
  },
};


export default function Crew() {
  return (
    <div className='grid text-center min-h-screen bg-crew-hero-mobile bg-no-repeat bg-cover md:bg-crew-hero-tablet lg:bg-crew-hero-desktop lg:h-[100vh]'>
      <Navbar />
      <div className="grid justify-items-center mt-4 md:justify-items-start lg:w-[80%] lg:mx-auto">
        <h2
          className={cn(
            "flex items-center gap-x-4 my-4 text-white text-[1rem] md:text-[20px] md:translate-x-10 lg:text-[28px] lg:translate-x-0",
            barlow_condensed.className
          )}
        >
          <span className={cn("font-bold text-[rgba(255,255,255,0.3)] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]", barlow_condensed.className)}>02</span>{" "}
          MEET YOUR CREW
        </h2>
        <CrewTabs />
      </div>

    </div>
  )
}
