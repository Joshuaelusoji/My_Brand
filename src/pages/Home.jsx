import { CiMail, FaGithub, FaLinkedin, FaXTwitter } from "../config/icons";
import { socials } from "../config/socials";
import { Status } from "../components/AvailabilityStatus";
import StatusBadge from "../components/StatusBadge";
import Joshua from "../assets/images/Joshua.jpeg";

const currentStatus = Status.Freelance;

export default function Home() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-10 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-1/2 top-20 h-full w-full -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="md:mt-10 mx-auto max-w-7xl md:max-w-6xl py-12 px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-2 items-center mb-5 gap-10 lg:items-center">
          {/* Left Side */}
          <div className="">
            <h1 className="font-urbanist text-3xl w-max font-normal leading-tight text-white lg:text-7xl">
              Joshua Elusoji
            </h1>

            <div className="flex flex-col ">
              <h2 className="font-TiltNeon text-xs lg:text-2xl text-stone-400/95">
              Front-End Web Developer
              </h2>
              <StatusBadge text={currentStatus} />
            </div>
          </div>
          {/* Right Side */}
          <img className="rounded-full ring-1 ring-white/10
            md:max-h-72 max-h-20 mx-auto" src={Joshua} alt="Joshua_img" />
        </div>
        <p className="mt-2 font-geist font-normal max-w-[32ch] md:max-w-fit text-base leading-7 text-stone-300">
              I build premium websites and web applications where thoughtful design meets
              high performance. Using modern technologies and best practices,
               I create responsive, accessible, and SEO-friendly digital experiences that
              are built to scale.
            </p>

            <p className="font-geist font-normal max-w-[32ch] md:max-w-fit text-base leading-7 text-stone-300">
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
    </section>
  );
}