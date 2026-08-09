import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
// import Services from "./pages/Services";
// import Testimonials from "./pages/Testimonials";
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";
// import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="relative min-h-screen px-6 pt-12">
      {/* Fixed gradient layer — always covers exactly the viewport, never stretches with page length */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />

      {/* Background Glow */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-1/2 top-20 h-full w-full -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>
      
      <SEO />
      <Navbar />
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;