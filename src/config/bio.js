import { FaMusic, FaCode, FaMicrochip, FaFilm, FaRobot, FaCompass, IoShieldCheckmarkOutline, RiPianoGrandLine
} from "./icons";

const DEFAULT_ICON = IoShieldCheckmarkOutline;
const DEFAULT_COLOR = "text-stone-500"

export const bio = [
  {
    category: "Interests",
    bio: [
      { name: "Programming", icon: FaCode, color: DEFAULT_COLOR },
      { name: "Music", icon: FaMusic, color: DEFAULT_COLOR },
      { name: "Piano", icon: RiPianoGrandLine, color: DEFAULT_COLOR},
      { name: "Technology", icon: FaMicrochip, color: DEFAULT_COLOR },
      { name: "Movies", icon: FaFilm, color: DEFAULT_COLOR },
      { name: "Science Fiction", icon: FaRobot, color: DEFAULT_COLOR },
      { name: "Adventure", icon: FaCompass, color: DEFAULT_COLOR },
    ],
  },

  {
    category: "Knowledge",
    bio: [
      { name: "GraphQL", icon: DEFAULT_ICON, color: DEFAULT_COLOR},
      { name: "SEO", icon: DEFAULT_ICON, color: DEFAULT_COLOR },
      { name: "AI Automation", icon: DEFAULT_ICON, color: DEFAULT_COLOR},
      { name: "Backend Architecture", icon: DEFAULT_ICON, color: DEFAULT_COLOR },
      { name: "Responsive Design", icon: DEFAULT_ICON, color: DEFAULT_COLOR },
      { name: "Authentication & Authorization", icon: DEFAULT_ICON, color: DEFAULT_COLOR },
      { name: "API Integration", icon: DEFAULT_ICON, color: DEFAULT_COLOR },
    ],
  },

  {
    category: "Developer Tools",
    bio: [
      { name: "Git", icon: DEFAULT_ICON, color: DEFAULT_COLOR },
      { name: "GitHub", icon: DEFAULT_ICON, color: DEFAULT_COLOR },
      { name: "Chrome DevTools", icon: DEFAULT_ICON, color: DEFAULT_COLOR },
      { name: "Postman", icon: DEFAULT_ICON, color: DEFAULT_COLOR },
      { name: "Terminal", icon: DEFAULT_ICON, color: DEFAULT_COLOR },
    ],
  },
];