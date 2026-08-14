import { useState, useEffect } from "react";
import { CiMail, FaGithub, FaLinkedin, FaXTwitter } from "../config/icons";
import { socials } from "../config/socials";
import Joshua from "../assets/images/Joshua.jpeg";

export default function Home() {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    // Safety net: auto-correct after 4s even if the user never hovers
    const timer = setTimeout(() => setFixed(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-[clamp(1rem,3vw,4rem)] md:pb-8 pb-12">
      <div className="mx-auto w-[clamp(20rem,90vw,72rem)]">
        <div className="grid grid-cols-2 gap-40 items-center">
          {/* Left Side */}
          <div className="">
            <h1
              onMouseEnter={() => setFixed(true)}
              className="font-Inter font-semibold leading-none text-[clamp(2rem,5vw,20rem)] w-max tracking-tighter text-neutral-300 cursor-default select-none"
            >
              Joshua Eluso
              <span
                className={`relative inline-block transition-[top] duration-500 ease-out ${fixed ? "top-0" : "-top-3"}`}
              >
                j
              </span>
              i
            </h1>
            <p className="font-Inter font-normal leading-4 text-[clamp(0.70rem,1vw,5rem)] tracking-normal text-neutral-500">
            Front-End Web Developer
            </p>
            
          </div>
          {/* Right Side */}
          <div className="">
            <img className="w-[clamp(120px,25vw,320px)] aspect-square rounded-full object-cover ring-1 ring-white/10 mx-auto"
            src={Joshua} alt="Joshua_img"/>        
          </div>
          
        </div>
        
      </div>
    </section>
  );
}