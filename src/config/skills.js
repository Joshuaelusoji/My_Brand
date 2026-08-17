import { FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaHtml5, TbBrandTypescript, TbBrandJavascript,
  TbBrandNextjs, RiTailwindCssFill, SiExpress, 
  SiPostgresql, SiMysql, FaChrome, SiPostman,
  IoTerminal, SiSocketdotio, RiCss3Line
} from "./icons";

export const skills = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "text-[#61DAFB]",
        animation: "/video/react-animation.mp4",
      },
      {
        name: "Next.js",
        icon: TbBrandNextjs,
        color: "text-[#FFFF]/80",
      },
      {
        name: "JavaScript",
        icon: TbBrandJavascript,
        color: "text-[#F7DF1E]",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-[#FFFF]/80"
      },
      {
        name: "TypeScript",
        icon: TbBrandTypescript,
        color: "text-[#3178C6]",
      },
      {
        name: "Tailwind",
        icon: RiTailwindCssFill,
        color: "text-[#06B6D4]",
      },
      {
        name: "CSS3",
        icon: RiCss3Line,
        color: "text-[#FFF]/80"
      }
    ],
  },

  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-[#339933]",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-white/80",
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
        color: "text-white/80",
      }
    ],
  },

  {
    category: "Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-[#4169E1]",
      },
      {
        name: "PostGIS",
        icon: SiPostgresql,
        color: "text-[#4169E1]/70",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-[#4479A1]",
      }
    ],
  },

  {
    category: "Developer Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-[#F05032]",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-[#FFFF]/80",
      },
      {
        name: "DevTools",
        icon: FaChrome,
        color: "text-[#4285F4]",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-[#FF6C37]"
      },
      {
        name: "Terminal",
        icon: IoTerminal,
        color: "text-white/80",
      }
    ],
  },
];