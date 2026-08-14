import { FaReact, FaNodeJs, FaGitAlt, FaGithub, TbBrandTypescript, TbBrandJavascript, TbBrandNextjs, RiTailwindCssFill, SiExpress, SiPostgresql, SiMysql
} from "./icons";

export const skills = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "text-stone-500 hover:text-pink-500",
        animation: "/video/react-animation.mp4",
      },
      {
        name: "Next.js",
        icon: TbBrandNextjs,
        color: "text-stone-500 hover:text-white",
      },
      {
        name: "JavaScript",
        icon: TbBrandJavascript,
        color: "text-stone-500 hover:text-yellow-500",
      },
      {
        name: "TypeScript",
        icon: TbBrandTypescript,
        color: "text-stone-500 hover:text-blue-500",
      },
      {
        name: "Tailwind",
        icon: RiTailwindCssFill,
        color: "text-stone-500 hover:text-cyan-500",
      },
    ],
  },

  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-stone-500 hover:text-green-400",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-stone-500 hover:text-white",
      },
    ],
  },

  {
    category: "Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-stone-500 hover:text-blue-400",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-stone-500 hover:text-cyan-400",
      }
    ],
  },

  {
    category: "Developer Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-stone-500 hover:text-orange-400",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-stone-500 hover:text-white",
      }
    ],
  },
];