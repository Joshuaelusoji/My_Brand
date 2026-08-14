
import Projects from "./Project";
import Socials from "../components/Social";
import HeroText from "../components/HeroText";
import GradientDivider from "../components/GradientDivider";
import Skills from "../components/Skill";
import Experience from "../components/Experience";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden mx-auto w-[clamp(20rem,90vw,72rem)]">
      <HeroText />
      <Socials />
      <GradientDivider />
      <div className="grid lg:grid-cols-3 lg:items-start w-full">
        {/* Left Side */}
        <Skills />
        <GradientDivider className="lg:hidden" />
        {/* Right Side */}
        <Projects />
        <GradientDivider className="lg:col-span-3" />
        <Experience />
      </div>
    </section>
  );
}
