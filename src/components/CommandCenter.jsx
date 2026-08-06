import { useEffect, useRef, useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FiMoon, FiSun } from "react-icons/fi";
import { LuMonitor } from "react-icons/lu";
import { useTheme } from "../context/ThemeContext";

export default function CommandCenter() {
  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false);

  const panelRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const themes = [
    {
      id: "dark",
      label: "Dark",
      icon: <FiMoon className="text-lg" />,
    },
    {
      id: "midnight",
      label: "Midnight",
      icon: <LuMonitor className="text-lg" />,
    },
    {
      id: "light",
      label: "Light",
      icon: <FiSun className="text-lg" />,
    },
  ];

  return (
    <div
      ref={panelRef}
      className="fixed bottom-8 right-8 z-[200]"
    >
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-gray-950/60
          text-stone-300
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-105
          hover:border-cyan-400/30
          hover:text-white
          shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        "
      >
        <HiOutlineAdjustmentsHorizontal className="text-2xl" />
      </button>

      {/* Panel */}

      <div
        className={`
          absolute
          bottom-20
          right-0
          w-72
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-gray-950/70
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          transition-all
          duration-300
          ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }
        `}
      >
        <div className="border-b border-white/10 p-6">
          <h3 className="font-geist text-lg font-semibold text-white">
            Appearance
          </h3>

          <p className="mt-1 font-geist text-sm text-stone-400">
            Personalize the portfolio.
          </p>
        </div>

        <div className="space-y-2 p-4">
          {themes.map((item) => (
            <button
              key={item.id}
              onClick={() => setTheme(item.id)}
              className={`
                flex
                w-full
                items-center
                gap-3
                rounded-2xl
                px-4
                py-3
                transition-all
                duration-300
                ${
                  theme === item.id
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/20"
                    : "text-stone-300 hover:bg-white/5"
                }
              `}
            >
              {item.icon}

              <span className="font-geist">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="border-t border-white/10 p-6">
          <p className="font-geist text-xs uppercase tracking-[0.25em] text-stone-500">
            More controls coming soon
          </p>
        </div>
      </div>
    </div>
  );
}