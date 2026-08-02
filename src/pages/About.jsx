import {
  FaReact,
  FaNodeJs,
  SiExpress,
  SiPostgresql,
  TbBrandTypescript, TbBrandJavascript,
  RiTailwindCssFill,
} from "../config/icons";

const skills = [
  { name: "React", icon: FaReact, color: "text-pink-400" },
  { name: "TypeScript", icon: TbBrandTypescript, color: "text-blue-400" },
  { name: "JavaScript", icon: TbBrandJavascript, color: "text-yellow-400" },
  { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" }
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-stone-950 py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <div>
            <p className="mb-8 inline-flex items-center gap-2 rounded-full rounded-br-md border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-stone-200 shadow-lg shadow-gray-700/55 backdrop-blur-xl">
              Hi, I am
            </p>

            <h1 className="font-TiltNeon text-5xl font-semibold leading-tight text-stone-100 lg:text-7xl">
              Joshua <span>Elusoji</span>
            </h1>

            <h2 className="text-md font-medium text-stone-400 lg:text-2xl">
              Front-End Web Developer
            </h2>

            <p className="mt-4 max-w-xl text-xs leading-6 text-stone-300">
              I build premium websites and web applications where thoughtful design meets
              high performance. Using modern technologies and best practices
              , I create responsive, accessible, and SEO-friendly digital experiences that
              are built to scale.
            </p>

            <p className=" max-w-xl text-xs leading-6 text-stone-300">
              Every project is crafted with scalability, clean architecture,
              and user experience in mind. I enjoy transforming complex ideas
              into intuitive interfaces that feel fast, polished, and
              effortless to use.
            </p>

            {/* Skills */}
            <div className="mt-10 flex flex-wrap gap-6">
              {skills.map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  className={`inline-flex items-center gap-2 rounded-full rounded-br-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-300 hover:text-lg backdrop-blur-md transition-all duration-300 hover:border-gray-400/40 hover:bg-gray-400/10 hover:text-white`}
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
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Crafting Experiences
                  </h3>
                  <p className="mt-3 leading-8 text-stone-400">
                    Beautiful interfaces are only the beginning. I build
                    websites that load quickly, rank well in search engines,
                    and deliver a seamless experience across every device.
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    My Approach
                  </h3>
                  <p className="mt-3 leading-8 text-stone-400">
                    Every line of code is written with maintainability,
                    performance, accessibility, and scalability in mind. Clean
                    structure today means easier growth tomorrow.
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div>
                    <h4 className="text-4xl font-bold text-white">30+</h4>
                    <p className="mt-2 text-sm uppercase tracking-wider text-stone-400">
                      Projects Built
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-bold text-white">100%</h4>
                    <p className="mt-2 text-sm uppercase tracking-wider text-stone-400">
                      Responsive
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-bold text-white">SEO</h4>
                    <p className="mt-2 text-sm uppercase tracking-wider text-stone-400">
                      Optimized
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-bold text-white">Fast</h4>
                    <p className="mt-2 text-sm uppercase tracking-wider text-stone-400">
                      Performance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-3xl border border-cyan-400/20 bg-stone-500 backdrop-blur-xl" />
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-violet-400/20 bg-gray-950/65 backdrop-blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}