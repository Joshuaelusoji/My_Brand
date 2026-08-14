import { useState, useEffect } from "react";
import { BsFillTelephoneFill } from "../config/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

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
      <header className="fixed left-1/2 top-0 z-50 -translate-x-1/2">
        <nav
          aria-label="Main navigation"
          className="w-screen flex items-center justify-center
             text-stone-300 text-center"
        >
          {/* Desktop Navigation */}
          <ul className="hidden items-center space-x-2 rounded-full px-3 py-2 font-geist font-light sm:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-full px-4 py-2 text-stone-400
                    transition-all duration-300
                    hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Connect */}
            <li>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full px-4 py-2
                  transition-all duration-300 hover:bg-white/10"
              >
                <span
                  className="font-bold text-stone-300 transition-colors
                    group-hover:text-white"
                >
                  Connect
                </span>

                <BsFillTelephoneFill
                  aria-hidden="true"
                  className="h-4 w-4 scale-x-[-1] text-stone-300
                    transition-colors group-hover:text-white"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}