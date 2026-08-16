import GradientDivider from "./GradientDivider";

export default function Footer() {
  return (
    <footer className=" text-stone-300/70 px-8 py-10 text-sm">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        <a href="#about" className="hover:underline hover:  hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-white">About</a>
        <a href="#projects" className="hover:underline hover:  hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-white">Projects</a>
        <a href="#contact" className="hover:underline hover:  hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-white">Contact</a>
      </div>
      <GradientDivider className="my-2"/>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/JoshElusive" target="_blank" rel="noopener noreferrer" className="hover:  hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-white">GitHub</a>
        <a href="https://linkedin.com/in/joshua-elusoji-874151228" target="_blank" rel="noopener noreferrer" className="hover:  hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-white">LinkedIn</a>
        <a href="https://instagram.com/joshua_timmy" target="_blank" rel="noopener noreferrer" className="hover:  hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-white">Instagram</a>
        <a href="https://instagram.com/joshua_timmy" target="_blank" rel="noopener noreferrer" className="hover:  hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-white">Twitter</a>
      </div>
      <p className="text-center text-xs">© 2026 Joshua Elusoji | Crafted with code & creativity.</p>
    </footer>
  );
}