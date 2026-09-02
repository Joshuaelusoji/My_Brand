import { useState } from "react";
import { projects } from "../config/projects";
import { FaFolder } from "../config/icons";

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);

  const project = projects[activeIndex];

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  return (
    <section
      id="projects"
      className="projects max-w-7xl md:max-w-6xl"
    >
      {/* Section heading */}
      <div className="flex items-center gap-2 mb-6">
        <FaFolder className="text-stone-500 h-4 w-4" />

        <h3 className="font-Inter font-semibold text-neutral-300 md:text-lg tracking-normal uppercase">
          Projects
        </h3>
      </div>

      {/* Project carousel */}
      <div className="bg-[var(--projects)] p-10">
        <div className="relative w-full">
          <div className="font-geist flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Project image */}
            {project.image && (
              // <a
              //   href={project.link}
              //   target="_blank"
              //   rel="noopener noreferrer"
              //   className="w-full md:w-1/2 order-1"
              // >
                <img
                  src={project.image}
                  alt={`${project.name}_img`}
                  className="w-full max-w-xl aspect-video object-contain rounded-lg"
                />
              
            )}

            {/* Text content */}
            <div className="order-2 flex flex-col justify-center w-full md:w-1/2">
              <h3 className="text-base font-bold text-stone-300/60 mb-2">
                {project.name}
              </h3>

              <p className="font-geist text-[clamp(0.935rem,1.2vw,1.125rem)] font-light tracking-normal leading-6 text-neutral-300/80">
                {project.description}
              </p>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous */}
            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              ←
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${project.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-6 bg-neutral-300"
                      : "w-1.5 bg-neutral-600"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}