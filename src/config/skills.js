import { FaReact, FaNodeJs, FaGitAlt, FaGithub, TbBrandTypescript, TbBrandJavascript, TbBrandNextjs, RiTailwindCssFill, SiExpress, SiPostgresql, SiMysql
} from "./icons";

export const skills = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "text-pink-500/70 hover:text-pink-500",
      },
      {
        name: "Next.js",
        icon: TbBrandNextjs,
        color: "text-white/90 hover:text-white",
      },
      {
        name: "JavaScript",
        icon: TbBrandJavascript,
        color: "text-yellow-400/80 hover:text-yellow-500",
      },
      {
        name: "TypeScript",
        icon: TbBrandTypescript,
        color: "text-blue-400/90 hover:text-blue-500",
      },
      {
        name: "Tailwind",
        icon: RiTailwindCssFill,
        color: "text-cyan-400/80 hover:text-cyan-500",
      },
    ],
  },

  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-400/80 hover:text-green-400",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-gray-400/50 hover:text-white",
      },
    ],
  },

  {
    category: "Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-500/50 hover:text-blue-400",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500/50 hover:text-blue-400",
      }
    ],
  },

  {
    category: "Developer Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500/50 hover:text-orange-400",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white/90 hover:text-white",
      }
    ],
  },
];