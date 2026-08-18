import { useState, useEffect } from "react";
import { BsFillTelephoneFill } from "../config/icons";
import { FaWhatsapp } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  // Prevent scrolling when the mobile menu or dialog is open
  useEffect(() => {
    document.body.style.overflow =
      isOpen || isConnectOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isConnectOpen]);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
  ];

  const phoneNumber = "+2349035680651";
  const whatsappNumber = "+2349035680651";

  return (
    <>
      {/* Navbar */}
      <header className="fixed left-1/2 top-0 z-50 -translate-x-1/2">
        <nav
          aria-label="Main navigation"
          className="flex w-screen items-center justify-center text-center text-stone-300"
        >
          {/* Desktop Navigation */}
          <ul className="hidden items-center space-x-2 rounded-full px-3 py-2 font-geist font-bold sm:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-full px-4 py-2 text-stone-400 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Connect */}
            <li>
              <button
                type="button"
                onClick={() => setIsConnectOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/10"
              >
                <span className="font-bold text-stone-300 transition-colors group-hover:text-white">
                  Connect
                </span>

                <BsFillTelephoneFill
                  aria-hidden="true"
                  className="h-4 w-4 scale-x-[-1] text-stone-300 transition-colors group-hover:text-white"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Connect Dialog */}
      {isConnectOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setIsConnectOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="connect-title"
            className="w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-950 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="mb-6">
              <h2 id="connect-title"
                className="text-xl font-Inter text-center font-bold text-white">
                Connect
              </h2>

              <p className="mt-2 italic text-center text-sm text-zinc-400">
                How you would like to reach me?
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <div>
                  <p className="font-medium text-white">
                    Text me on WhatsApp
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Start a conversation
                  </p>
                </div>

                <span className="text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                  <FaWhatsapp />
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${phoneNumber}`}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <div>
                  <p className="font-medium text-white">
                    Phone Call
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Make a phone call
                  </p>
                </div>

                <span className="text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                  <BsFillTelephoneFill className="scale-x-[-1]" />
                </span>
              </a>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={() => setIsConnectOpen(false)}
              className="mt-5 w-full italic py-2 text-sm text-zinc-500 transition-colors hover:text-white"
            >
              later
            </button>
          </div>
        </div>
      )}
    </>
  );
}