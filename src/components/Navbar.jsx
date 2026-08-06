import { useState, useEffect } from "react";
import { BsFillTelephoneFill } from "../config/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "visible" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed z-50 w-full justify-items-end overflow-hidden px-5 py-2 lg:justify-items-center">
        <nav
          aria-label="Main navigation"
          className="flex h-full w-full max-w-fit items-center rounded-full border border-white/10
            bg-gray-950/40 text-stone-300 backdrop-blur-xl backdrop-saturate-150
            shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_40px_rgba(0,0,0,0.45)]"
        >
          {/* Desktop Navigation */}
          <ul className="hidden font-geist font-light h-full w-full items-center space-x-2 rounded-full px-3 py-2 sm:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="rounded-full px-4 py-2 text-stone-400 transition-all duration-300
                  hover:bg-white/10 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a href="#contact"
                className=" group inline-flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/10"
              >
                <span className="font-bold text-stone-300 transition-colors group-hover:text-white">
                  Connect
                </span>

                <BsFillTelephoneFill aria-hidden="true"
                  className="h-4 w-4 scale-x-[-1] text-stone-300 transition-colors group-hover:text-white"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>

    </>
  );
}