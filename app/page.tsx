import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Tech from "./components/Tech/Tech";

export default function Home() {
  return (
    <div className="home">
      <div className="intro">
        <section id="head" className="">
          <Intro />
        </section>
        <section id="experience" className="bg-zinc-900 ">
          <Experience />
        </section>
        <section id="education" className="">
          <Education />
        </section>
        <section id="projects" className="bg-zinc-900 ">
          <Projects />
        </section>
        <section id="tech" className="">
          <Tech />
        </section>
      </div>
    </div>
  );
}