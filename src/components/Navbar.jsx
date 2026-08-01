import { useState } from "react";
import { BsFillTelephoneFill } from "../config/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="relative">
        <div className="flex items-center justify-between px-6 py-3 bg-gray-950/70 backdrop-blur-md rounded-full shadow-lg text-white">
          <button
            className="sm:hidden flex items-center focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
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
          <ul className="hidden sm:flex items-center space-x-6 font-urbanist font-light">
            <li>
              <a href="#home" className="hover:text-yellow-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-yellow-500 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-yellow-500 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full group hover:bg-white transition-colors">
                <a
                  href="#contact"
                  className="font-bold animate-pulse group-hover:text-cyan-500"
                >
                  Connect
                </a>
                <BsFillTelephoneFill className="w-4 h-4 text-gray-400 scale-x-[-1] group-hover:text-cyan-400" />
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-56 rounded-2xl bg-gray-950/95 backdrop-blur-md shadow-xl text-white p-4 space-y-3 sm:hidden">
            {["home", "about", "services", "portfolio"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="block capitalize hover:text-yellow-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link === "portfolio"
                    ? "Projects"
                    : link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}

            <li>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-yellow-500 group hover:bg-white transition-colors">
                <a
                  href="#contact"
                  className="font-bold text-white group-hover:text-yellow-500"
                  onClick={() => setIsOpen(false)}
                >
                  Connect
                </a>
                <BsFillTelephoneFill className="w-4 h-4 text-gray-700 scale-x-[-1] group-hover:text-yellow-500" />
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}