import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
// import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="relative">
      <SEO />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      {/* <ThemeSwitcher /> */}
    </div>
  );
}

export default App;