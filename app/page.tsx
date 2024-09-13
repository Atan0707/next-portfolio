// import Image from "next/image";
import Intro from "./components/Intro/Intro";

export default function Home() {
  return (
    <div className="home">
      <div className="intro">
        <section id="head">
          <Intro />
        </section>
        
      </div>
    </div>
  );
}
