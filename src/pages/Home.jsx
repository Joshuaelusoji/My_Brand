import { CiMail, FaGithub, FaLinkedin, FaXTwitter } from "../config/icons";
import { socials } from "../config/socials";
import { Status } from "../components/AvailabilityStatus";
import StatusBadge from "../components/StatusBadge";
import Joshua from "../assets/images/Joshua.jpeg";

const currentStatus = Status.Freelance;

export default function Home() {
  return (
    <section id="about" className="relative overflow-hidden md:pt-28 md:pb-8 pb-12">
      <div className="md:mt-10 mx-auto max-w-7xl md:max-w-6xl px-6 md:px-12">
        <div className="grid grid-cols-2 items-center gap-10 lg:items-center">
          {/* Left Side */}
          <div className="">
            <h1 className="font-geist font-Extrabold text-3xl w-max leading-tight text-white lg:text-7xl">
              Joshuaa Elusoji
            </h1>

            <div className="flex flex-col ">
              <p className="font-TiltNeon font-thin text-xs md:text-xl text-stone-400/95">
              Front-End Web Developer
              </p>
              <StatusBadge text={currentStatus} />
            </div>
          </div>
          {/* Right Side */}
          <img className="rounded-full ring-1 ring-white/10 md:max-h-72 max-h-20 mx-auto" src={Joshua} alt="Joshua_img" />
        </div>
        
      </div>
    </section>
  );
}