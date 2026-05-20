import Navbar from "./components/Navbar";
import DeveloperQR from "./components/DeveloperQR";
import Hero from "./components/Hero";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";


function App() {
  return (
    <div className="bg-[#020817] min-h-screen text-white overflow-x-hidden relative">
      
      <BackgroundEffects />

      <Navbar />

      <Hero />

      <About />

      <Certifications />

      <Projects />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;