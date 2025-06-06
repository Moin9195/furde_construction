"use client"
import { HeroParallaxDemo } from "@/components/section/HeroParallel";
import ProjectsPage from "@/components/section/OngoingProject";

export default function Home() {

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
       <HeroParallaxDemo/>
      
     {/* <HeroSection/> */}
      <ProjectsPage />
     
             
    </div>
  );
}
