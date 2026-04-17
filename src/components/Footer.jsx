import { useState } from 'react';

export default function Footer() {
  const [language, setLanguage] = useState("en");

  const translations = {
    en:  { about: "About", contact: "Contact", footerText: "© 2025 Joshua Elusoji | Crafted with code & creativity." },
    de:  { about: "Über mich", contact: "Kontakt", footerText: "© 2025 Joshua Elusoji | Mit Code & Kreativität geschaffen." },
    fr:  { about: "À propos", contact: "Contact", footerText: "© 2025 Joshua Elusoji | Créé avec du code et de la créativité." },
    es:  { about: "Acerca de", contact: "Contacto", footerText: "© 2025 Joshua Elusoji | Creado con código y creatividad." },
    pt:  { about: "Sobre", contact: "Contato", footerText: "© 2025 Joshua Elusoji | Feito com código e criatividade." },
  };
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-gray-400 px-8 py-10 text-sm">
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {[["en","English (US)"],["de","Deutsch"],["fr","Français"],["es","Español"],["pt","Português (Brasil)"]].map(([code, label]) => (
          <button key={code} onClick={() => setLanguage(code)} className="hover:underline hover:text-yellow-500">{label}</button>
        ))}
      </div>
      <hr className="border-gray-700 my-4" />
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
        <a href="#" className="hover:underline hover:text-yellow-500">{t.about}</a>
        <a href="#" className="hover:underline hover:text-yellow-500">{t.contact}</a>
      </div>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://linkedin.com/in/joshua-elusoji-874151228" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">LinkedIn</a>
        <a href="https://github.com/JoshElusive" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">GitHub</a>
        <a href="https://instagram.com/joshua_timmy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Instagram</a>
      </div>
      <p className="text-center text-gray-500 text-xs">{t.footerText}</p>
    </footer>
  );
}