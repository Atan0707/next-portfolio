import Education from "@/app/components/homepage/Education/Education";
import Experience from "@/app/components/homepage/Experience/Experience";
import Intro from "@/app/components/homepage/Intro/Intro";
import Projects from "@/app/components/homepage/Projects/Projects";
import Tech from "@/app/components/homepage/Tech/Tech";
import Navbar from "../components/homepage/Navbar/Navbar";
import Contact from "../components/homepage/Contact/Contact";

export default function OldHome() {
  return (
    <div>
      <Navbar />
      <div className="home bg-black text-white">
        <div className="intro">
          <section id="head" className="relative min-h-screen">
            <Intro />
          </section>
          <section id="experience" className="py-16 bg-gradient-to-b from-black to-zinc-900">
            <Experience />
          </section>
          <section id="education" className="py-16 bg-gradient-to-b from-zinc-900 to-black">
            <Education />
          </section>
          <section id="projects" className="py-16 bg-gradient-to-b from-black to-zinc-900">
            <Projects />
          </section>
          <section id="tech" className="py-16 bg-gradient-to-b from-zinc-900 to-black">
            <Tech />
          </section>
          <section id="contact" className="py-16 bg-gradient-to-b from-zinc-900 to-black">
          <Contact />
          </section>
        </div>
      </div>
    </div>
    
  );
}