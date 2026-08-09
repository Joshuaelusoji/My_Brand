import { projects } from "../config/projects";

export default function Project() {
  return (
    <section className="mx-auto max-w-7xl text-white md:max-w-6xl">
      <h3 className="font-geist font-semibold uppercase mb-4">Projects</h3>
      <div className="flex flex-col gap-5">
        {projects.map(({ name, description, image, link }) => (
          <a key={name} href={link} target="_blank" rel="noopener noreferrer">
            <h3 className= "mb-2">{name}</h3>
            <img className="rounded-2xl" src={image} alt={name} />
            <p>{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}