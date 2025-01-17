import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative min-h-screen w-full bg-slate-950">
        {/* Background with radial gradients */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient Circles */}
          <div className="absolute top-[-200px] left-[-200px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle, rgba(255,0,182,0.15), rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-[-200px] right-[-200px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle, rgba(255,0,182,0.15), rgba(255,255,255,0))]"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default App;
