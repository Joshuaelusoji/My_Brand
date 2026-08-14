import { socials } from "../config/socials";

export default function Social() {
    return (
        <section id="projects" className="mx-auto max-w-7xl text-white md:max-w-6xl">
          <div className="flex space-x-4 z-20">
            {socials.map(({ name, icon: Icon, color, link, hover }) => (
              <a key={name} href={link} target="_blank" rel="noopener noreferrer"
                 className="transition-transform hover:scale-110 w-10 px-2 mt-4"
              >
                <Icon className={`text-xl ${color} ${hover}`}/>
              </a>
            ))}
          </div>
        </section>
    )
}