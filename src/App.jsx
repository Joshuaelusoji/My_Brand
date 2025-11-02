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
import myPhoto from "./assets/images/Josh.jpeg"; // change path to your photo

import { Code, LayoutDashboard, Cpu, Sparkles } from "lucide-react";
import { FaWhatsapp, BsFillTelephoneFill, CiMail } from "./icons";

// ================= Example Component =================
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

// ================= Navbar =================
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

// ================= Hero =================
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

// ================= About Chat =================
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

// ================= About =================
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
            <img
              src={Elusive}
              alt="Josh"
              className="h-32 w-32 md:h-48 md:w-48 mb-7 object-cover rounded-full shadow-lg border-2"
            />
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

// ================= Services, Portfolio, Testimonial (unchanged) =================
// ... keep your existing Services, Portfolio, Testimonial components here exactly as before ...

// ================= Updated Contact =================
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Failed to send message');
      }
    } catch (err) {
      setStatus('Failed to send message');
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white px-8 py-16 bg-diagonal-lines">
      <h2 className="font-urbanist font-bold text-3xl mb-4 text-center tracking-wide">Let's Connect</h2>
      <p className="text-center mb-8">Have a project in mind? Let's build something amazing together.</p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col space-y-4">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="italic p-3 rounded-lg bg-gray-900 border border-gray-700"/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="italic p-3 rounded-lg bg-gray-900 border border-gray-700"/>
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required className="italic p-3 rounded-lg bg-gray-900 border border-gray-700"></textarea>
        <button type="submit" className="px-6 py-3 font-semibold text-white border-2 border-yellow-500 rounded-lg transition-colors hover:bg-yellow-500 hover:text-gray-900">
          Send Message
        </button>
      </form>

      {status && <p className="text-center mt-4 text-yellow-500">{status}</p>}

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
  );
}

// ================= Footer =================
// ... keep your existing Footer component exactly as before ...

function App() {
  return (
    <div className="bg-gray-900 bg-diagonal-lines relative">
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact /> {/* Updated Contact integrated */}
      <Footer />
    </div>
  )
}

export default App;
