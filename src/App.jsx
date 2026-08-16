import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./components/Experience";
import Projects from "./pages/Project";
import Bio from "./components/Bio"
import GradientDivider from "./components/GradientDivider";
import Footer from "./components/Footer";

// import Services from "./pages/Services";
// import Testimonials from "./pages/Testimonials";
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";
// import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="relative min-h-screen pt-[clamp(3rem,1vw,4rem)] w-[clamp(20rem,90vw,72rem)] mx-auto">
      {/* Fixed gradient layer — always covers exactly the viewport, never stretches with page length */}
      {/* <div className="fixed inset-0 -z-10 bg-zinc-950/40" /> */}
      
      <SEO />
      <Navbar />
      <Home />
      <About />
      {/* <GradientDivider /> */}
      <Experience />
      {/* <GradientDivider /> */}
      <Projects />
      {/* <GradientDivider /> */}
      <Bio />
      <Footer />
    </div>
  );
}

export default App;