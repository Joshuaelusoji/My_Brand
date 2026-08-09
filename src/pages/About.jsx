import { FaReact, FaNodeJs, FaGitAlt, FaGithub, TbBrandTypescript, TbBrandJavascript, TbBrandNextjs, RiTailwindCssFill, SiExpress, SiPostgresql, SiMysql
} from "../config/icons";
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
            className="transition-transform hover:scale-110 w-10 px-2 mt-4"
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
          <h3 className="font-geist font-semibold text-white tracking-wide mb-6">
            SKILLS
          </h3>

          <div className="flex flex-wrap gap-3 mb-4">
            {skills.map(({ category, skills: categorySkills, hover }) => (
              <div key={ category } className="font-geist mb-4 w-full">
                <h4 className="mb-1 text-sm text-stone-500">
                  {category}
                </h4>
            
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map(({ name, icon: Icon, color, hover }) => (
                    <span
                      key={name}
                      className={`${hover} inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-2 py-1 text-sm text-stone-400 backdrop-blur-md transition-all duration-600 hover:border-gray-400/40 hover:bg-gray-400/10 hover:text-white`}
                    >
                      <Icon className={`text-xs ${color} ${hover}`} />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
          
        </div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div>
        {/* Experiences */}
        <h3 className="mb-4 font-geist font-semibold tracking-wider text-white">
          EXPERIENCES
        </h3>

        <div className="space-y-8">
          {experiences.map(
            ({ id, role, company, period, type, description, highlights }) => (
              <article key={id}>
                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h4 className="font-geist font-semibold text-white">
                    {role}
                  </h4>
            
                  <span className="text-stone-500">•</span>
            
                  <span className="text-sm text-stone-400">
                    {company}
                  </span>
                </div>
            
                <div className="mb-3 flex flex-wrap gap-x-4 text-sm text-stone-500">
                  <span>{period}</span>
                  <span>{type}</span>
                </div>
            
                <p className="max-w-3xl text-sm leading-6 text-stone-400">
                  {description}
                </p>
            
                <ul className="mt-4 space-y-2">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-stone-400"
                    >
                      <span className="mr-2 text-white">—</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            )
          )}
        </div>
      </div>

      <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

    </div>
    </section>
  );
}
