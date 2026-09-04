import { FaGithub, FaLinkedin, FaXTwitter, CiMail, FaInstagram
} from "./icons";

const DEFAULT_COLOR = "text-stone-500";

export const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    color: `${DEFAULT_COLOR} hover:text-lime-500`,
    link: "https://github.com/JoshElusive",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    color: `${DEFAULT_COLOR} hover:text-lime-500`,
    link: "https://linkedin.com/in/joshuaelusoji",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    color: `${DEFAULT_COLOR} hover:text-lime-500`,
    link: "https://twitter.com/joshuaelusoji",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    color: `${DEFAULT_COLOR} hover:text-lime-500`,
    link: "https://instagram.com/joshuaelusoji",
  },
  {
    name: "Email",
    icon: CiMail,
    color: `${DEFAULT_COLOR} hover:text-lime-500`,
    link: "mailto:joshuaelusoji7@gmail.com",
  },
];