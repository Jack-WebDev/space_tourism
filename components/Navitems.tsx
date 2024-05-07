"use client";

import Link from "next/link";
import { barlow_condensed } from "@/utilities/fonts";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navitems() {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        "grid gap-y-4 translate-y-32 text-white text-[1rem] md:flex md:translate-y-0 gap-x-8 md:bg-[rgba(255,255,255,0.05)] md:px-8 lg:w-[60%] lg:bg-[rgba(0,0,0,0.5)] lg:pl-20",
        barlow_condensed.className
      )}
    >
      <li className="flex items-center gap-4 ">
        <span className="font-bold">00</span>
        <Link
          className={`link md:py-8 hover:border-b-4 border-b-white ${
            pathname === "/" ? "active" : ""
          }`}
          href={"/"}
        >
          HOME
        </Link>
      </li>
      <li className="flex items-center gap-4">
        <span className="font-bold">01</span>
        <Link
          className={`link md:py-8 hover:border-b-4 border-b-white ${
            pathname === "/destination" ? "active" : ""
          }`}
          href={"/destination"}
        >
          DESTINATION
        </Link>
      </li>
      <li className="flex items-center gap-4">
        <span className="font-bold">02</span>
        <Link
          className={`link md:py-8 hover:border-b-4 border-b-white ${
            pathname === "/crew" ? "active" : ""
          }`}
          href={"/crew"}
        >
          CREW
        </Link>
      </li>
      <li className="flex items-center gap-4">
        <span className="font-bold">03</span>
        <Link
          className={`link md:py-8 hover:border-b-4 border-b-white ${
            pathname === "/technology" ? "active" : ""
          }`}
          href={"/technology"}
        >
          TECHNOLOGY
        </Link>
      </li>
    </ul>
  );
}
