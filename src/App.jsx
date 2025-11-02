import { useState, useEffect } from 'react';
import SEO from './components/SEO';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BrandLogo from './assets/images/BrandLogo.svg';
import TheCity from "./assets/images/TheCity.png";
import Elusive from "./assets/images/Elusive.jpeg";
import Smith from "./assets/images/Smith.jpeg";
import Timmy from "./assets/images/Timmy.jpeg";
import David from "./assets/images/David.jpeg";
import Debby from "./assets/images/Debby.jpg";
import goldenGroove from "./assets/images/goldenGroove.png";
import MyPortfolio from "./assets/images/MyPortfolio.png";
import myPhoto from "./assets/images/Josh.jpeg"; 


import { Code, LayoutDashboard, Cpu, Sparkles } from "lucide-react";
import { FaWhatsapp, BsFillTelephoneFill, CiMail } from "./icons";


function Example() {
  return (
    <div>
      <Code className="text-indigo-500 w-10 h-10" />
      <LayoutDashboard className="text-pink-500 w-10 h-10" />
      <Cpu className="text-pink-500 w-10 h-10" />
      <Sparkles className="text-yellow-500 w-10 h-10" />
    </div>
  );
}


function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-950 text-white fixed w-full z-50 shadow-md bg-opacity-70 backdrop-blur-md">
      <div className="flex items-center text-2xl font-bold">
        <img src={BrandLogo} alt="Brand Logo" className="h-6 w-6 mr-2" />
        Joshua<span className="text-yellow-500">Elusoji</span>
      </div>

      <ul className="font-urbanist font-light flex space-x-6">
        <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-500">About</a></li>
        <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
        <li><a href="#portfolio" className="hover:text-yellow-500">Projects</a></li>
        <li className="flex items-center gap-1 px-2 group bg-yellow-500 rounded-full hover:bg-white ">
          <a href="#contact" className="text-white text-bold animate-pulse group-hover:text-yellow-500">
            Connect
          </a>
          <BsFillTelephoneFill className="w-4 h-4 text-gray-400 scale-x-[-1] group-hover:text-gray-400" />
        </li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen px-8 text-center bg-diagonal-lines bg-gray-900 text-white ">
      <h1 className="font-TiltNeon font-semibold text-6xl mb-4 pb-5 tracking-wide">
        I design and develop <span className="text-yellow-500">Websites.</span>
      </h1>
      <p className="text-lg pb-4 md:text-xl max-w-3xl mb-6">
        A Front-End Developer & Web Designer, crafting <strong>luxury-inspired, elegant, and responsive</strong> websites that are <span className="text-yellow-500 font-semibold">SEO-optimized</span> to increase <span className="text-yellow-500 font-semibold">visibility</span> and drive growth for <span className="text-yellow-500 font-semibold">businesses.</span>
      </p>
      <div className="flex space-x-4">
        <a href="#portfolio" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">View Projects</a>
        <a href="#contact" className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition animate-pulse">Start a Project</a>
      </div>
    </section>
  )
}

const messages = [
  "I love building innovative digital experiences.",
  "I make Music when I'm not coding, it inspires my creativity.",
  "Artificial Intelligence fascinates me.",
  "I enjoy discovering & Studying patterns.",
  "Problem-solving keeps my creativity alive.",
  "I draw inspiration from gaming, exploration, and discovery.",
  "I'm picking up a bit of Deutsch",
];


const AboutChat = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedMessages, setDisplayedMessages] = useState([]);

  useEffect(() => {
    let timeout;
    if (isTyping) {
      timeout = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, messages[currentIndex]]);
        setIsTyping(false);
      }, 2000);
    } else {
      timeout = setTimeout(() => {
        if (currentIndex < messages.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          setIsTyping(true);
        } else {
          
          setTimeout(() => {
            setDisplayedMessages([]);
            setCurrentIndex(0);
            setIsTyping(true);
          }, 3000);
        }
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [isTyping, currentIndex]);

  return (
    <div className="flex flex-col font-urbanist items-center justify-center bg-diagonal-lines">
     
      <div className=" bg-gray-800 border-4 border-black rounded-[2.2rem] shadow-2xl p-0 w-80 h-[550px] flex flex-col items-center">
        
        <div className="w-24 h-6 bg-black rounded-t-3xl rounded-b-3xl mt-3 mb-0"></div>

        <div className="h-10 w-10 rounded-full overflow-hidden border-2 shadow-md mb-1">
          <img src={myPhoto} alt="Profile" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col space-y-0 w-full h-full overflow-hidden p-2 bg-white  rounded-b-[1.9rem] shadow-inner">
          {displayedMessages.map((msg, index) => (
            <div key={index} className="self-end">
              <div className="font-urbanist font-semilight relative bg-blue-500 text-white px-3 py-1 rounded-xl max-w-[100%] shadow-md">
                {msg}
                <div className="absolute right-0 bottom-[-6px] w-0 h-0 border-t-[8px] border-l-[8px] border-transparent border-t-blue-500"></div>
              </div>
              <span className="text-[10px] text-white text-right block mr-2 mt-0.5">
                Delivered
              </span>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="self-end bg-gray-300 px-3 py-2 rounded-2xl max-w-[60%] flex items-center space-x-1 shadow">
              <span className="w-1 h-1 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1 h-1 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1 h-1 bg-green-500 rounded-full animate-bounce"></span>
              <h1 className='text-gray-600'>typing</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-10 bg-diagonal-lines bg-gray-900 text-white">
      <div className="flex justify-center w-full md:w-1/2">
        <AboutChat />
      </div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start text-left max-w-lg space-y-6 md:space-y-0 md:gap-6 mx-auto">
  <div className="flex-1">
    <h2 className="font-urbanist font-bold text-4xl mb-14 tracking-wide text-center">
      About Me
    </h2>

    <div className="flex justify-center md:justify-center">
      <img src={Elusive} alt="Josh" className="h-32 w-32 md:h-48 md:w-48 mb-7 object-cover rounded-full shadow-lg border-2"/>
    </div>

    <h3 className="font-TiltNeon text-2xl mb-5 text-center md:text-left">
      Hey! I'm Joshua Elusoji
    </h3>

    <p className="text-lg leading-relaxed font-light">
      I’m a{" "}
      <span className="text-yellow-500 font-semibold">front-end developer</span>{" "}
      passionate about creating modern,{" "}
      <span className="text-yellow-500 font-semibold">luxury-inspired websites</span>{" "}
      that help brands stand out online and increase their{" "}
      <span className="text-yellow-500 font-semibold">visibility</span> and{" "}
      <span className="text-yellow-500 font-semibold">sales</span>.
      <br />
      <br />
      I specialize in{" "}
      <span className="text-yellow-500 font-semibold">HTML</span>,{" "}
      <span className="text-yellow-500 font-semibold">CSS</span>,{" "}
      <span className="text-yellow-500 font-semibold">JavaScript</span>,{" "}
      <span className="text-yellow-500 font-semibold">Tailwind CSS</span>,{" "}
      <span className="text-yellow-500 font-semibold">ReactJS</span>, and{" "}
      <span className="text-yellow-500 font-semibold">ExpressJS</span>, combining clean code with visually stunning design.
    </p>
  </div>
</div>


      
    </section>
);
}


function Services() {
  return (
    <section id="services" className=" from-gray-900 via-black to-gray-900 text-white px-8 py-20 bg-diagonal-lines">
      {/* Section Heading */}
      <h2 className="font-urbanist font-semibold text-4xl text-center mb-16 text-white tracking-wider">
        Services
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/60 shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] group overflow-hidden h-64">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent mb-4 flex justify-between items-center">
          Website Design & Development
          {/* Make the Code spin when parent is hovered */}
          <Code className="text-orange-800 w-10 h-10 transition-transform duration-700 group-hover:rotate-[360deg]" />
        </h3>

        {/* Default Text */}
        <p className="font-urbanist font-light absolute bottom-4 left-6 right-6 text-gray-300 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
          Modern and responsive websites tailored to your brand and audience.
        </p>

        {/* Hover Text */}
        <p className="absolute bottom-4 left-6 right-6 text-yellow-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          Elegant, interactive, and luxury-inspired web experiences.
        </p>
      </div>


        {/* Card 2 */}
        <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/60 shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] group overflow-hidden h-64">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent mb-4 flex justify-between items-center">
            Landing Pages
            <LayoutDashboard className="text-blue-800 w-10 h-10 duration-700 group-hover:rotate-[360deg]" />
          </h3>

          <p className="absolute bottom-4 left-6 right-6 text-gray-300 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            High-converting landing pages for products, hotels, or businesses.
          </p>

          <p className="absolute bottom-4 left-6 right-6 text-yellow-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            Sleek and persuasive pages that attract clicks and build trust.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/60 shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] group overflow-hidden h-64">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent mb-4 flex justify-between items-center">
            Website Maintenance
            <Cpu className="text-green-800 w-10 h-10 duration-700 group-hover:rotate-[360deg]" />
          </h3>

          <p className="absolute bottom-4 left-6 right-6 text-gray-300 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            Keep your website fast, secure, and up-to-date.
          </p>

          <p className="absolute bottom-4 left-6 right-6 text-yellow-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            Regular updates, performance tuning, and bulletproof reliability.
          </p>
        </div>

        {/* Card 4 */}
        <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/60 shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] group overflow-hidden h-64">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent mb-4 flex justify-between items-center">
            Brand Websites
            <Sparkles className="text-yellow-600 w-10 h-10 duration-700 group-hover:rotate-[360deg]" />
          </h3>

          <p className="absolute bottom-4 left-6 right-6 text-gray-300 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            Luxury websites for hotels, resorts, agencies, and premium brands.
          </p>

          <p className="absolute bottom-4 left-6 right-6 text-yellow-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            Premium visuals, elite design, and flawless brand storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}


function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-900 text-white px-8 pb-16">
      <h2 className="font-urbanist font-semibold text-center text-4xl mb-8 pt-4 pb-12 tracking-wide">Recent Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <img src={TheCity} alt="TheCity" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">Luxury Hotel Website</h3>
            <p>Sophisticated design with easy booking and a user-friendly layout.</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-3xl shadow-lg overflow-hidden">
          <img src={MyPortfolio} alt="myPortfolio_png" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">Premium Portfolio Template</h3>
            <p>A clean, professional template showcasing design and Web-development skills.</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <img src={goldenGroove} alt="goldenGroove_png" className="w-full h-48 object-cover" />
          <div className="p-4">
           <h3 className="text-xl font-semibold mb-1">Music Landing Page for an Artist</h3>
           <p>A sleek, high-end web experience, showcasing the artist’s unique sound and style.</p>

          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonial() {
  const testimonials = [
    {
      name: "Smith Gbolahan",
      role: "CyberSecurity Analyst",
      feedback: '"Joshua is a highly professional and creative developer. I’m really impressed with the results!"',
      image: Smith,
      imageClass: "border-2 border-yellow-500 brightness-110 object-[80%_30%] scale-x-[-1] "
    },
    {
      name: "David Owoeye",
      role: "Entrepreneur",
      feedback: "Joshua did an excellent job onboarding our business to the online community. His website has brought visible engagement and growth to our brand.",
      image: David,
      imageClass: "border-2 border-yellow-500 brightness-110 object-[80%_30%] "
    },
    {
      name: "Deborah Akinfolarin",
      role: "Data Annotator",
      feedback: '"Joshua delivered an amazing website with clean design and great performance. Highly recommend!"',
      image: Debby,
      imageClass: "border-2 border-yellow-500 brightness-110 object-[80%_30%] "
    },
    {
      name: "Timmy Okunloye",
      role: "Accountant & Auditor",
      feedback: '"Working with Joshua was seamless. The website exceeded our expectations."',
      image: Timmy,
      imageClass: "border-2 border-yellow-500 brightness-110 object-[50%_25%]"
    },
  ];

  return (
    <section id="testimonial" className="bg-gray-900 text-white px-8 py-16 bg-diagonal-lines">
      <h2 className="font-urbanist font-semibold text-3xl mb-4 text-center tracking-wider">Testimonials</h2>
      <p className="text-center mb-8">What people are saying about my work</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full flex flex-col h-full"
          >
            {/* Card Header / Image */}
            <div className="flex justify-center mt-6">
              <img src={t.image} alt={t.name} className={`h-24 w-24 rounded-full object-cover ${t.imageClass}`}/>
            </div>

            {/* Card Body */}
            <div className="p-6 text-center flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-urbanist font-semibold text-2xl text-white mb-2 tracking-wider">{t.name}</h3>
                <p className="text-gray-300 mb-4">{t.role}</p>
                <p className="text-gray-200 italic">{t.feedback}</p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="bg-gray-700 text-gray-300 text-sm p-4 text-center">
              Feedback
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white px-8 py-16 bg-diagonal-lines">
      <h2 className="font-urbanist font-bold text-3xl mb-4 text-center tracking-wide">Let's Connect</h2>
      <p className="text-center mb-8">Have a project in mind? Let's build something amazing together.</p>
      <form className="max-w-2xl mx-auto flex flex-col space-y-4">
        <input type="text" name="name" placeholder="Name" required className="italic p-3 rounded-lg bg-gray-900 border border-gray-700"/>
        <input type="email" name="email" placeholder="Email" required className="italic p-3 rounded-lg bg-gray-900 border border-gray-700"/>
        <textarea name="message" placeholder="Message" required className="italic p-3 rounded-lg bg-gray-900 border border-gray-700"></textarea>
        <button type="submit" className="px-6 py-3 font-semibold text-white border-2 border-yellow-500 rounded-lg transition-colors hover:bg-yellow-500 hover:text-gray-900">
          Send Message
        </button>
      </form>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="mailto:joshuaelusoji7@gmail.com" target="_blank" className="flex items-center gap-2 hover:text-yellow-500">
           <CiMail className="w-5 h-5 text-blue-500" />Mail
        </a>
        <a href="tel:+2349035680651" className="flex items-center gap-2 hover:text-yellow-500">
          <BsFillTelephoneFill className='w-5 h-5 text-gray-400 '/>Hotline
        </a>
        <a href="https://wa.me/2349035680651" target="_blank" className="flex items-center gap-2 hover:text-yellow-500">
          <FaWhatsapp className="w-5 h-5 text-green-500 " /> WhatsApp
        </a>
      </div>
    </section>
  )
}
function Footer() {
  
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      about: "About",
      contact: "Contact",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram",
      footerText: "© 2025 Joshua Elusoji | Crafted with code & creativity.",
    },
    de: {
      about: "Über mich",
      contact: "Kontakt",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram",
      footerText: "© 2025 Joshua Elusoji | Mit Code & Kreativität geschaffen.",
    },
    fr: {
      about: "À propos",
      contact: "Contact",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram",
      footerText: "© 2025 Joshua Elusoji | Créé avec du code et de la créativité.",
    },
    es: {
      about: "Acerca de",
      contact: "Contacto",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram",
      footerText: "© 2025 Joshua Elusoji | Creado con código y creatividad.",
    },
    pt: {
      about: "Sobre",
      contact: "Contato",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram",
      footerText: "© 2025 Joshua Elusoji | Feito com código e criatividade.",
    },
  };
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-gray-400 px-8 py-10 text-sm">
      {/*Language*/}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        <button onClick={() => setLanguage("en")} className="hover:underline hover:text-yellow-500">English (US)</button>
        <button onClick={() => setLanguage("de")} className="hover:underline hover:text-yellow-500">Deutsch</button>
        <button onClick={() => setLanguage("fr")} className="hover:underline hover:text-yellow-500">Français</button>
        <button onClick={() => setLanguage("es")} className="hover:underline hover:text-yellow-500">Español</button>
        <button onClick={() => setLanguage("pt")} className="hover:underline hover:text-yellow-500">Português (Brasil)</button>
      </div>

      <hr className="border-gray-700 my-4" />

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
        <a href="#" className="hover:underline hover:text-yellow-500">{t.about}</a>
        <a href="#" className="hover:underline hover:text-yellow-500">{t.contact}</a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://linkedin.com/in/joshua-elusoji-874151228" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">{t.linkedin}</a>
        <a href="https://github.com/JoshElusive" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">{t.github}</a>
        <a href="https://instagram.com/joshua_timmy" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">{t.instagram}</a>
      </div>

      {/* Bottom Line */}
      <p className="text-center text-gray-500 text-xs">{t.footerText}</p>
    </footer>
  );
}

function App() {
  return (
    <div className="bg-gray-900 bg-diagonal-lines relative">
      <SEO />
      <Navbar />
      <Hero />
      <About />
      {/* <Hobbies /> */}
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;

