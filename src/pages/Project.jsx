import { projects } from "../config/projects";

export default function Project() {
  return (
    <section id="projects" className=" max-w-7xl text-neutral-300 md:max-w-6xl">
      <h3 className="font-Inter font-bold md:text-lg tracking-normal uppercase mb-6">
        Projects
      </h3>

      <div className="w-[clamp(22rem,80vw,full)] flex flex-col z-10 gap-10">
        {projects.map(({ name, description, image, link }) => (
          <div key={name} className="font-geist flex flex-col md:flex-row">
            {image && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="order-2 md:order-1"
              >
                <img
                  className="max-w-xs object-cover md:mr-4"
                  src={image}
                  alt={`${name}_img`}
                />
              </a>
            )}
            {/* Text content */}
            <div className="order-1 md:order-2 w-full font-geist text-[clamp(0.935rem,1.2vw,1.125rem)]">
              <h3 className="text-base text-bold text-stone-300/50">{name}</h3>
              <p className="mb-1 font-geist text-[clamp(0.935rem,1.2vw,1.125rem)] font-light tracking-normal leading-6 text-neutral-300/80">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}