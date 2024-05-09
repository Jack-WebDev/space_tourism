"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Navitems } from "./Navitems";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const handleNav = () => {
    router.push("/");
  };
  return (
    <>
      <nav className="flex items-center justify-between mx-8 py-4 md:hidden ">
        <svg
          onClick={handleNav}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          style={{ cursor: "pointer" }}
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          </SheetTrigger>

          <SheetContent className="bg-[#000000c0]">
            <SheetHeader>
              <SheetDescription>
                <Navitems />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>

      <nav className="hidden md:flex items-center justify-between backdrop-blur-[10px] mx-8 h-fit md:mr-0 lg:ml-20 xl:pt-4">
        <svg
          onClick={handleNav}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          style={{ cursor: "pointer" }}
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>

        <hr className="hidden relative right-[-3rem] w-[36%] bg-secondary lg:inline-block z-10" />

        <Navitems />
      </nav>
    </>
  );
}
