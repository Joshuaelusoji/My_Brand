
import Projects from "./Project";
import Socials from "../components/Social";
import HeroText from "../components/HeroText";
import GradientDivider from "../components/GradientDivider";
import Skills from "../components/Skill";
import Experience from "../components/Experience";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <HeroText />
      <Socials />
      <GradientDivider />
      <div className="grid lg:grid-cols-2 lg:items-start w-full">
        {/* Left Side */}
        <Skills />
      </div>

    </section>
  );
}
