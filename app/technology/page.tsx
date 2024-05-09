import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import { barlow_condensed } from "@/utilities/fonts";
import { cn } from "@/lib/utils";
import LaunchTabs from "@/components/LaunchTabs";
export const metadata: Metadata = {
  title: "Destinations | Space tourism website",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function Destination() {
  return (
    <div className='grid text-center min-h-screen bg-technology-hero-mobile bg-no-repeat bg-cover md:bg-technology-hero-tablet lg:bg-technology-hero-desktop lg:h-[100vh]'>
      <Navbar />
      <div className="grid justify-items-center mt-4 md:justify-items-start lg:w-[80%] lg:mx-auto">
        <h2
          className={cn(
            "flex items-center gap-x-4 my-4 text-white text-[1rem] md:text-[20px] md:translate-x-10 lg:text-[28px]",
            barlow_condensed.className
          )}
        >
          <span className="font-bold text-[rgba(255,255,255,0.3)]">03</span>{" "}
          SPACE LAUNCH 101
        </h2>
        <LaunchTabs />
      </div>
    </div>
  );
}
