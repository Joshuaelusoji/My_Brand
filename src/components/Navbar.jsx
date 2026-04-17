import { useState } from 'react';
import BrandLogo from '../assets/images/BrandLogo.svg';
import { BsFillTelephoneFill } from '../icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 shadow-md bg-gray-950 bg-opacity-70 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-4 md:fixed md:w-full text-white">
        <div className="flex items-center text-lg sm:text-xl md:text-2xl font-bold">
          <img src={BrandLogo} alt="Brand Logo" className="h-6 w-6 mr-2" />
          Joshua<span className="text-yellow-500">Elusoji</span>
        </div>
        <button className="sm:hidden flex items-center focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <ul className="hidden sm:flex items-center space-x-6 font-urbanist font-light ml-auto">
          <li><a href="#home" className="hover:text-yellow-500 text-white">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-500 text-white">About</a></li>
          <li><a href="#services" className="hover:text-yellow-500 text-white">Services</a></li>
          <li><a href="#portfolio" className="hover:text-yellow-500 text-white">Projects</a></li>
          <li>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-500 rounded-full group hover:bg-white transition-colors">
              <a href="#contact" className="text-white font-bold animate-pulse group-hover:text-yellow-500">Connect</a>
              <BsFillTelephoneFill className="w-4 h-4 text-gray-400 scale-x-[-1] group-hover:text-gray-400" />
            </div>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="sm:hidden flex flex-col px-8 py-4 space-y-2 bg-gray-950 text-white">
          {["home","about","services","portfolio"].map(link => (
            <li key={link}>
              <a href={`#${link}`} className="hover:text-yellow-500 block capitalize" onClick={() => setIsOpen(false)}>
                {link === "portfolio" ? "Projects" : link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-500 rounded-full group hover:bg-white transition-colors">
              <a href="#contact" className="text-white font-bold animate-pulse group-hover:text-yellow-500" onClick={() => setIsOpen(false)}>Connect</a>
              <BsFillTelephoneFill className="w-4 h-4 text-gray-400 scale-x-[-1] group-hover:text-gray-400" />
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
}