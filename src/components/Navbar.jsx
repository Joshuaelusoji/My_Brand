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
      <header className="fixed translate-x-48 translate-y-9 z-50 w-full px-5">
        <nav
          aria-label="Main navigation"
          className="mx-auto h-6 w-6 flex max-w-fit items-center rounded-full  py-3 text-gray-500 shadow-lg backdrop-blur-2xl"
        >
          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center sm:hidden"
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
          <ul className="hidden items-center space-x-6 font-urbanist font-light sm:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-gray-500"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full px-3 py-2 transition-colors hover:bg-white"
              >
                <span className="font-bold group-hover:text-cyan-500">
                  Connect
                </span>

                <BsFillTelephoneFill
                  aria-hidden="true"
                  className="h-4 w-4 scale-x-[-1] text-gray-400 group-hover:text-cyan-500"
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
              className="text-stone-500 hover:text-gray-500"
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
                  className="transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="mt-6">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="group inline-flex items-center gap-3 rounded-full border border-gray-500 px-8 py-3 text-lg font-semibold text-gray-500 transition-all duration-300 hover:bg-gray-500 hover:text-white hover:border-stone-300/95"
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