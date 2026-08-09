import { projects } from "../config/projects";

export default function Project() {
  return (
    <section className="mx-auto max-w-7xl text-white md:max-w-6xl">
      <h3 className="font-geist font-semibold uppercase">Projects</h3>
      <div className="flex">
        {projects.map(({ name, description }) => (
          <a
            key={name}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{name}</h3>
            <p>{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}