"use client"
import { HeroParallaxDemo } from "@/components/section/HeroParallel";
import HeroSection from "@/components/section/HeroSection";
import ProjectsPage from "@/components/section/OngoingProject";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/Button";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [clicked , setClicked] = useState(false);
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
       <HeroParallaxDemo/>
      
     {/* <HeroSection/> */}
      <ProjectsPage />
     
             
    </div>
  );
}
