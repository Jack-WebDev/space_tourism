import { Button } from "./ui/button";
import { barlow, barlow_condensed } from "@/app/layout";
import { cn } from "@/lib/utils";


export default function Hero() {
  return (
    <div className="text-white text-center mt-8 mx-8 md:mt-24 lg:flex lg:justify-between lg:items-baseline lg:w-[70%] lg:mx-auto lg:mt-4">
      <div className="lg:text-start lg:w-1/2">
        <h1
          className={cn(
            "text-[16px] text-secondary tracking-[2.25px] md:text-[20px] lg:text-[26px]",
            barlow_condensed.className
          )}
        >
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <h2 className="text-[80px] md:text-[150px]">SPACE</h2>
        <p
          className={cn(
            "text-[15px] text-secondary md:text-[16px] lg:text-[18px]",
            barlow.className
          )}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Button
        variant={"default"}
        className="rounded-full bg-white text-black text-[20px] w-[150px] h-full aspect-[1] translate-y-12 transition-shadow ease-in-out duration-1000 hover:shadow-explore-sm hover:bg-white md:w-[242px] md:translate-y-[60%] md:hover:shadow-explore-md lg:w-[272px] lg:text-[32px] lg:hover:shadow-explore-lg"
      >
        EXPLORE
      </Button>
    </div>
  );
}
