import { projects } from "../config/projects";

export default function Project() {
  return (
    <section id="projects" className="max-w-7xl text-white md:max-w-6xl">
      <h3 className="font-Inter font-bold tracking-normal uppercase mb-6">
        Projects
      </h3>

      <div className="flex flex-col z-10 gap-5">
        {projects.map(({ name, description, image, link }, index) => (
          <div key={name}>
            <h3 className="mb-2 font-Inter font-semibold text-sm text-gray-400">
              {name}
            </h3>

            <p className="text-xs text-gray-500">
              {description}
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center rounded border border-transparent bg-neutral-800/80 backdrop-blur-md px-2 py-1 font-Inter text-xs font-light italic text-gray-400 transition-all duration-500 hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-emerald-600 cursor-pointer"
            >
              View Project { index +1 }
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}