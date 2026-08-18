import { FaUserLarge } from "react-icons/fa6";

export default function HeroText() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <FaUserLarge className="my-auto text-base text-stone-500"/>
        <h2 className="font-Inter font-light md:text-lg tracking-normal text-neutral-300">
          ABOUT
        </h2>

      </div>
      

      <p className="w-[clamp(22rem,80vw,fullrem)] font-geist text-[clamp(0.935rem,1.2vw,1.125rem)] font-light tracking-normal leading-6 text-neutral-300/80">
        Hello there! I am Joshua, a Front-End Web Developer who enjoys
        building websites and web applications that are fast, reliable,
        <span className="text-neutral-500 font-bold"> SEO-friendly,</span> and intuitive to use. I believe great software is more
        than clean visuals. It should solve real problems, feel effortless to
        navigate, and deliver a smooth experience from the first interaction
        to the last.
      </p>
        
      <p className="mb-6 w-[clamp(22rem,80vw,fullrem)] font-geist text-[clamp(0.935rem,1.2vw,1.125rem)] font-light tracking-normal leading-6 text-neutral-300/80">
        I approach every project with curiosity, attention to detail, and a
        strong commitment to quality. My goal is to create products that are
        scalable, accessible, maintainable, and built to last, while writing
        clean code that is easy to understand, extend, and improve over time.
      </p>
    </div>
  );
}