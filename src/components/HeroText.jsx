import { FaUserLarge } from "react-icons/fa6";

export default function HeroText() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <FaUserLarge className="my-auto text-base text-stone-500"/>
        <h2 className="font-Inter font-semibold md:text-lg tracking-normal text-neutral-300">
          ABOUT
        </h2>

      </div>
      

      <p className="w-[clamp(22rem,80vw,full)] font-geist text-[clamp(0.935rem,1.2vw,1.125rem)] font-light tracking-normal leading-8 text-neutral-300/80">
        Hello there! I am Joshua, a Front-End Web Developer. I build websites and web applications with a strong focus on
        <span className=" text-lime-500 font-normal"> performance, usability, accessibility, and SEO-optimization</span>. 
        I believe good software should not only look good, but also solve real problems.
        Every interaction should feel intentional, every section should be self-explanatory, and the entire experience should feel natural from the first click to the last.
      </p>
        
      <p className="mb-6 w-[clamp(22rem,80vw,full)] font-geist text-[clamp(0.935rem,1.2vw,1.125rem)] font-light tracking-normal leading-8 text-neutral-300/80">
        I approach every project with curiosity, attention to detail, and a
        strong commitment to quality that satisfice the user. My goal is to create products that are
        scalable, accessible, maintainable, and built to last, while writing
        clean code that is easy to understand, extend, and improve over time.
      </p>
    </div>
  );
}