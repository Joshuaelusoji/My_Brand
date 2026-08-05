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
          className="
            flex h-full w-full max-w-fit items-center rounded-full
            border border-white/10
            bg-gray-950/40
            text-stone-300
            backdrop-blur-xl
            backdrop-saturate-150
            shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_40px_rgba(0,0,0,0.45)]
          "
        >
          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-4 py-3 sm:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden font-geist font-light h-full w-full items-center space-x-2 rounded-full px-3 py-2 sm:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="rounded-full px-4 py-2 text-stone-400 transition-all duration-300
                  hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a href="#contact"
                className=" group inline-flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300
              hover:bg-white/10"
              >
                <span className="font-bold text-stone-300 transition-colors group-hover:text-white">
                  Connect
                </span>

                <BsFillTelephoneFill
                  aria-hidden="true"
                  className="h-4 w-4 scale-x-[-1] text-stone-400 transition-colors group-hover:text-white"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Full Screen Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[100] flex flex-col bg-gray-950/95 backdrop-blur-xl sm:hidden"
        >
          {/* Close Button */}
          <div className="flex justify-end px-8 pt-8">
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              className="text-stone-500 transition-colors hover:text-white"
            >
              <svg
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-1 flex-col items-center justify-center gap-6 font-urbanist text-4xl font-extrabold text-stone-500">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="mt-6">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-stone-600
                  px-8
                  py-3
                  text-lg
                  font-semibold
                  text-stone-300
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <span>Connect</span>

                <BsFillTelephoneFill
                  aria-hidden="true"
                  className="scale-x-[-1]"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}