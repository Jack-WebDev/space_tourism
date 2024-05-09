import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import DestinationTabs from "@/components/Tabs";
import { barlow_condensed } from "@/utilities/fonts";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: "Destinations | Space tourism website",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function Destination() {
  return (
    <div className='grid text-center min-h-screen bg-destination-hero-mobile bg-no-repeat bg-cover md:bg-destination-hero-tablet lg:bg-destination-hero-desktop lg:h-[100vh]'>
      <Navbar />
      <div className="grid justify-items-center mt-4 md:justify-items-start lg:w-[80%] lg:mx-auto">
        <h2
          className={cn(
            "flex items-center gap-x-4 my-4 text-white text-[1rem] md:text-[20px] md:translate-x-10 lg:text-[28px]",
            barlow_condensed.className
          )}
        >
          <span className="font-bold text-[rgba(255,255,255,0.3)]">01</span>{" "}
          PICK YOUR DESTINATION
        </h2>
        <DestinationTabs />
      </div>
    </div>
  );
}
