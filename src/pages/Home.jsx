export default function Home() {
    return (
      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen px-8 text-center bg-diagonal-lines bg-gray-900 text-white"
      >
        <h1 className="font-TiltNeon font-semibold text-6xl mb-4 pb-5 tracking-wide">
          I design and develop <span className="text-yellow-500">Websites.</span>
        </h1>
        <p className="text-lg pb-4 md:text-xl max-w-3xl mb-6">
          A Front-End Developer & Web Designer, crafting{" "}
          <strong>luxury-inspired, elegant, and responsive</strong> websites
          that are <span className="text-yellow-500 font-semibold">SEO-optimized</span> to increase{" "}
          <span className="text-yellow-500 font-semibold">visibility</span> and drive growth for{" "}
          <span className="text-yellow-500 font-semibold">businesses.</span>
        </p>
        <div className="flex space-x-4">
          <a href="#portfolio" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
            View Projects
          </a>
          <a href="#contact" className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition animate-pulse">
            Start a Project
          </a>
        </div>
      </section>
    );
  }