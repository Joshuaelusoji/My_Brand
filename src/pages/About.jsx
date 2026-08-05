import {
  FaReact,
  FaNodeJs,
  SiExpress,
  SiPostgresql,
  TbBrandTypescript, TbBrandJavascript,
  RiTailwindCssFill,
} from "../config/icons";

import { skills } from "../config/skills";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-950 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-full w-full -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <div>
            {/* Skills */}
            <div className="mt-10 flex flex-wrap gap-5">
              {skills.map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  className={`inline-flex items-center gap-2 rounded-full rounded-br-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-400 hover:text-lg backdrop-blur-md transition-all duration-600 hover:border-gray-400/40 hover:bg-gray-400/10 hover:text-white`}
                >
                  <Icon className={`text-xs ${color}`} />
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div>
                <p className="text-sm text-stone-500">
                  A little about how I work
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Building products that people enjoy using.
                </h3>

                <p className="mt-5 leading-7 text-stone-300">
                  My goal is simple. Build websites that are fast, responsive, and easy
                  to maintain. I enjoy turning ideas into products that not only look
                  good but also solve real problems.
                </p>
              </div>

              <div className="my-8 h-px bg-white/10" />

              <div className="grid grid-cols-2 gap-6">

                <div>
                  <h4 className="text-3xl font-semibold text-white">
                    Clean
                  </h4>
                  <p className="mt-2 text-sm text-stone-400">
                    Readable and maintainable code.
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-semibold text-white">
                    Fast
                  </h4>
                  <p className="mt-2 text-sm text-stone-400">
                    Performance is always a priority.
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-semibold text-white">
                    SEO
                  </h4>
                  <p className="mt-2 text-sm text-stone-400">
                    Built to be discoverable.
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-semibold text-white">
                    Mobile
                  </h4>
                  <p className="mt-2 text-sm text-stone-400">
                    Designed for every screen.
                  </p>
                </div>

              </div>

              <div className="my-8 h-px bg-white/10" />

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                  Current Focus
                </p>

                <p className="mt-3 leading-7 text-stone-300">
                  I am currently focused on building modern web applications with React,
                  TypeScript, Tailwind CSS, Node.js, Express.js, and PostgreSQL while
                  continuing to improve my knowledge of software architecture and
                  scalable backend systems.
                </p>
              </div>

            </div>

            {/* Background accents */}
            <div className="absolute -left-8 top-8 -z-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-8 right-0 -z-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}