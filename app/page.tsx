import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import RotateAlert from "@/components/main/Popup";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* <RotateAlert /> */}
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        {/* <Encryption /> */}
        <Projects />
      </div>
    </main>
  );
}
