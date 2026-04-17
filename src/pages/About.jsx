import { useState, useEffect } from 'react';
import myPhoto from '../assets/images/Josh.jpeg';
import Elusive from '../assets/images/Elusive.jpeg';

const messages = [
  "I love building innovative digital experiences.",
  "I make Music when I'm not coding, it inspires my creativity.",
  "Artificial Intelligence fascinates me.",
  "I enjoy discovering & Studying patterns.",
  "Problem-solving keeps my creativity alive.",
  "I draw inspiration from gaming, exploration, and discovery.",
  "I'm picking up a bit of Deutsch",
];

function AboutChat() {
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
      <div className="bg-gray-800 border-4 border-black rounded-[2.2rem] shadow-2xl p-0 w-80 h-[550px] flex flex-col items-center">
        <div className="w-24 h-6 bg-black rounded-t-3xl rounded-b-3xl mt-3 mb-0"></div>
        <div className="h-10 w-10 rounded-full overflow-hidden border-2 shadow-md mb-1">
          <img src={myPhoto} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col space-y-0 w-full h-full overflow-hidden p-2 bg-white rounded-b-[1.9rem] shadow-inner">
          {displayedMessages.map((msg, index) => (
            <div key={index} className="self-end">
              <div className="font-urbanist font-semilight relative bg-blue-500 text-white px-3 py-1 rounded-xl max-w-[100%] shadow-md">
                {msg}
                <div className="absolute right-0 bottom-[-6px] w-0 h-0 border-t-[8px] border-l-[8px] border-transparent border-t-blue-500"></div>
              </div>
              <span className="text-[10px] text-white text-right block mr-2 mt-0.5">Delivered</span>
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
}

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-10 bg-diagonal-lines bg-gray-900 text-white">
      <div className="flex justify-center w-full md:w-1/2">
        <AboutChat />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start text-left max-w-lg space-y-6 md:space-y-0 md:gap-6 mx-auto">
        <div className="flex-1">
          <h2 className="font-urbanist font-bold text-4xl mb-14 tracking-wide text-center">About Me</h2>
          <div className="flex justify-center md:justify-center">
            <img src={Elusive} alt="Josh" className="h-32 w-32 md:h-48 md:w-48 mb-7 object-cover rounded-full shadow-lg border-2"/>
          </div>
          <h3 className="font-TiltNeon text-2xl mb-5 text-center md:text-left">Hey! I'm Joshua Elusoji</h3>
          <p className="text-lg leading-relaxed font-light">
            I'm a <span className="text-yellow-500 font-semibold">front-end developer</span>{" "}
            passionate about creating modern,{" "}
            <span className="text-yellow-500 font-semibold">luxury-inspired websites</span>{" "}
            that help brands stand out online and increase their{" "}
            <span className="text-yellow-500 font-semibold">visibility</span> and{" "}
            <span className="text-yellow-500 font-semibold">sales</span>.
            <br /><br />
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