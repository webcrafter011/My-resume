import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Beaker,
} from "lucide-react";
import ThreeScene from "./ThreeScene";

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
        <div className="relative flex flex-col items-center justify-center">
          {/* Glowing animated border */}
          <div className="absolute -inset-4 rounded-3xl animate-pulse bg-gradient-to-r from-bb-green via-bb-yellow to-bb-orange blur-2xl opacity-60" style={{ filter: 'blur(32px)' }} />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-bb-green animate-glow bg-black/80">
            <img
              src="/videos/loader.gif"
              alt="Loading..."
              className="w-[600px] h-[340px] object-cover"
              style={{ maxWidth: '90vw', maxHeight: '60vh' }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
              <div className="bg-black/70 px-6 py-3 rounded-xl mt-4 animate-fade-in-up">
                <p className="text-bb-green text-2xl md:text-3xl font-mono font-bold tracking-widest drop-shadow-lg animate-pulse">
                  Cooking up something special...
                </p>
                <p className="text-bb-yellow text-lg font-mono mt-2 animate-fade-in">
                  Please wait while the lab prepares your experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden bg-gradient-to-b from-bb-dark via-bb-gray to-bb-dark"
    >
      <ThreeScene />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-bb-green via-bb-yellow to-bb-orange p-2 animate-glow">
              <div className="w-full h-full rounded-full bg-bb-dark flex items-center justify-center border-2 border-bb-green">
                <Beaker className="text-6xl text-bb-green" size={80} />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-oswald tracking-wider">
            <span className="bg-gradient-to-r from-bb-green via-bb-yellow to-bb-orange bg-clip-text text-transparent">
              Manuj Dinesh Chaudhari
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-bb-green mb-4 font-mono tracking-wide">
            EXPERIMENT • CODE • MASTERY
          </p>

          <div className="bg-bb-gray/80 border border-bb-green/50 rounded-lg p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-4 font-mono">
              I am not in danger, Skyler. I AM the danger!
            </p>
            <p className="text-base text-gray-400 font-mono">
              From concept to deployment — delivering sharp, modern web solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-bb-green to-bb-yellow text-bb-dark rounded-lg font-bold font-oswald text-lg hover:from-bb-yellow hover:to-bb-orange transition-all duration-300 transform hover:scale-105 shadow-lg animate-glow"
            >
              VIEW MY FORMULA
            </button>

            <a
              href="/docs/Manuj Resume Latest.pdf"
              download
              className="flex items-center space-x-2 px-8 py-4 border-2 border-bb-green text-bb-green rounded-lg font-bold font-oswald hover:bg-bb-green hover:text-bb-dark transition-all duration-300"
            >
              <Download className="h-5 w-5" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-8 mb-40">
            <a
              href="https://github.com/webcrafter011"
              className="w-16 h-16 flex items-center justify-center text-bb-green hover:text-bb-yellow hover:bg-bb-gray rounded-lg transition-all duration-300 transform hover:scale-110 border border-bb-green/30 hover:border-bb-yellow"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/manuj-chaudhari-54b7bb242"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center text-bb-green hover:text-bb-yellow hover:bg-bb-gray rounded-lg transition-all duration-300 transform hover:scale-110 border border-bb-green/30 hover:border-bb-yellow"
            >
              <Linkedin className="h-8 w-8" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=manujchaudhari123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center text-bb-green hover:text-bb-yellow hover:bg-bb-gray rounded-lg transition-all duration-300 transform hover:scale-110 border border-bb-green/30 hover:border-bb-yellow"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-bb-green hover:text-bb-yellow transition-colors duration-300 animate-bounce z-10"
        >
          <ChevronDown className="h-10 w-10" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
