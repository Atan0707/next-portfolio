import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Tech from "./components/Tech/Tech";

export default function OldHome() {
  return (
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
      </div>
    </div>
  );
}