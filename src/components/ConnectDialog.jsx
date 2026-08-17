import { useEffect, useRef } from "react";
import { BsFillTelephoneFill } from "../config/icons";
import { FaWhatsapp } from "react-icons/fa";

// Same number for both — swap independently if that ever changes
const PHONE_NUMBER = "+2349035680651";
const WHATSAPP_NUMBER = "2349035680651"; // wa.me needs digits only, no "+"

export default function ConnectDialog({ open, onClose }) {
  const dialogRef = useRef(null);

  // Close on Escape, and prevent background scroll while open —
  // matches the same body-scroll-lock pattern your Navbar already uses
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="connect-dialog-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-900 p-6
          text-center font-geist text-stone-300 shadow-xl"
      >
        <h2
          id="connect-dialog-title"
          className="mb-1 font-Inter text-lg font-bold uppercase tracking-normal text-white"
        >
          Let's connect
        </h2>
        <p className="mb-6 text-sm text-stone-400">
          Pick how you'd like to reach me
        </p>

        <div className="flex flex-col gap-3">
          
            href={`tel:${PHONE_NUMBER}`}
            className="group flex items-center justify-center gap-3 rounded-full
              border border-white/10 px-4 py-3 transition-all duration-300
              hover:bg-white/10"
          >
            <BsFillTelephoneFill
              aria-hidden="true"
              className="h-4 w-4 scale-x-[-1] text-stone-300 transition-colors group-hover:text-white"
            />
            <span className="font-bold text-stone-300 transition-colors group-hover:text-white">
              Call me
            </span>
          </a>

          
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-full
              border border-white/10 px-4 py-3 transition-all duration-300
              hover:bg-white/10"
          >
            <FaWhatsapp
              aria-hidden="true"
              className="h-4 w-4 text-stone-300 transition-colors group-hover:text-white"
            />
            <span className="font-bold text-stone-300 transition-colors group-hover:text-white">
              WhatsApp
            </span>
          </a>
        </div>

        <button
          onClick={onClose}
          className="mt-6 text-sm text-stone-500 underline-offset-2 transition-colors hover:text-stone-300 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}