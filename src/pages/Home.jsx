import { CiMail, FaGithub, FaLinkedin, FaXTwitter } from "../config/icons";
import { socials } from "../config/socials";
import Joshua from "../assets/images/Joshua.jpeg";

export default function Home() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-1/2 top-20 h-full w-full -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <div>

            <h1 className="font-urbanist text-3xl font-normal leading-tight text-white lg:text-7xl">
              Joshua <span>Elusoji</span>
            </h1>

            <h2 className="font-TiltNeon text-xs mb-8 text-stone-400/95 lg:text-2xl">
              Front-End Web Developer
            </h2>

            <p className="mt-4 font-geist font-normal max-w-xl text-base leading-7 text-stone-300">
              I build premium websites and web applications where thoughtful design meets
              high performance. Using modern technologies and best practices
              , I create responsive, accessible, and SEO-friendly digital experiences that
              are built to scale.
            </p>

            <p className="font-geist font-normal max-w-xl text-base leading-7 text-stone-300">
              Every project is crafted with scalability, clean architecture,
              and user experience in mind. I enjoy transforming complex ideas
              into intuitive interfaces that feel fast, polished, and
              effortless to use.
            </p>
            <div className="flex space-x-4 z-20">
              {socials.map(({ name, icon: Icon, color, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110 w-10 mt-4"
                >
                  <Icon className={`text-xl ${color}`} />
                </a>
              ))}
            </div>
          </div>
          {/* Right Side */}
          <img className="rounded-full ring-1 ring-white/10
           max-h-28 md:max-h-fit" src={Joshua} alt="Joshua_img" />
        </div>
      </div>
    </section>
  );
}