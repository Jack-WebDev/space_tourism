import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-hero-mobile bg-no-repeat bg-cover md:bg-hero-tablet md:h-[160vh] lg:bg-hero-desktop lg:h-[100vh]">
      <Navbar />
      <Hero />
    </div>
  );
}
