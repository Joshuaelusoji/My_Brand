import { FaReact, FaNodeJs, SiExpress, SiPostgresql, TbBrandTypescript, TbBrandJavascript, RiTailwindCssFill, CiMail, FaGithub, FaLinkedin, FaXTwitter } from "../config/icons";
import { socials } from "../config/socials";
import { skills } from "../config/skills";
import { experiences } from "../config/experiences";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden mx-auto max-w-7xl md:max-w-6xl"
    >
      <h2 className="font-geist font-semibold tracking-wide text-white mb-2">ABOUT</h2>
      <p className=" font-geist font-light max-w-6xl md:max-w-fit text-base leading-8 text-stone-300">
        Hello there! I'm Joshua, a Front-End Web Developer who enjoys building
        websites and web applications that are fast, reliable, SEO-friendly, and
        intuitive to use. I believe great software is more than clean visuals.
        It should solve real problems, feel effortless to navigate, and deliver
        a smooth experience from the first interaction to the last.
      </p>
      <p className="font-geist font-light max-w-6xl md:max-w-fit text-base leading-8 text-stone-300">
        I approach every project with curiosity, attention to detail, and a
        strong commitment to quality. My goal is to create products that are
        scalable, accessible, maintainable, and built to last, while writing
        clean code that is easy to understand, extend, and improve over time.
      </p>
      <div className="flex space-x-4 z-20">
        {socials.map(({ name, icon: Icon, color, link, hover }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 w-10 mt-4"
          >
            <Icon className={`text-xl ${color} ${hover}`} />
          </a>
        ))}
      </div>

      <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mt-12">
        <div className="grid lg:grid-cols-3 lg:items-start">
          {/* Left Side */}
          <div className="">
            {/* Skills */}
            <h3 className="font-geist font-semibold text-white tracking-wide mb-4">SKILLS</h3>
            <div className=" flex flex-wrap gap-3 mb-4">
              {skills.map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  className={`inline-flex items-center gap-2 rounded-full rounded-br-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-400 backdrop-blur-md transition-all duration-600 hover:border-gray-400/40 hover:bg-gray-400/10 hover:text-white`}
                >
                  <Icon className={`text-xs ${color}`} />
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side */}
          
        </div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="">
            {/* Experiences */}
            <h3 className="font-geist font-semibold tracking-wider text-white mb-4">EXPERIENCES</h3>
            <div className=" flex flex-wrap gap-3 mb-4">
              {experiences.map(({ id, role, company, period, type, description, highlights }) => (
                <span>
                </span>
              ))}
            </div>
        </div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      </div>
    </section>
  );
}
