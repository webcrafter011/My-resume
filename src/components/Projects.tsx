import React, { useState, useRef, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Filter,
  Beaker,
  DollarSign,
  Scale,
} from "lucide-react";

import ProjectVideoSlider from "./ProjectVideoSlider";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "iPhone Website Clone",
      description:
        "A clean and responsive Apple iPhone product page clone. Frontend focused project showcasing UI skills with animations.",
      video: '/videos/iphonesiteclone.mp4',
      image: undefined,
      category: "empire",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/webcrafter011/iPhone-Website",
      demo: "https://iphone-site-clone.vercel.app/",
      featured: true,
      purity: "99.1%",
    },
    {
      id: 2,
      title: "Class Monitoring Site",
      description:
        "Real-time classroom monitoring system. Allows tracking of student attention using webcam feeds (CS50 final project).",
      image:
        "https://images.pexels.com/photos/5212334/pexels-photo-5212334.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "legal",
      technologies: ["Flask", "OpenCV", "HTML", "CSS"],
      github: "https://github.com/webcrafter011/CS50-Monitoring-System",
      demo: "#",
      featured: false,
      purity: "95.5%",
    },
    {
      id: 3,
      title: "Balaji Super Shopy",
      description:
        "Frontend-only eCommerce site for a local store built with React. Features dynamic product rendering and cart functionality.",
      images: [
        "/docs/one.png",
        "/docs/two.png",
        "/docs/three.png"
      ],
      image: undefined,
      category: "business",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/webcrafter011/React-Ecommerce-Website",
      demo: "https://balaji-super-shop.vercel.app/",
      featured: true,
      purity: "97.3%",
    },
    {
      id: 4,
      title: "Vaishnavi Mobiles Shop",
      description:
        "Custom frontend website for a local mobile shop to showcase products and offers. Responsive and lightweight.",
      video: '/videos/mobileshop.mp4',
      image: undefined,
      category: "corporate",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/webcrafter011/Vaishnavi-Mobile",
      demo: "https://vaishnavi-mobiles.vercel.app/",
      featured: false,
      purity: "94.5%",
    },
    {
      id: 5,
      title: "YouTube Media Downloader",
      description:
        "Full-stack app to download YouTube videos or audio and transcribe using Whisper AI. Built with Python Flask.",
      image:
        "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "legal",
      technologies: ["Python", "Flask", "Whisper AI"],
      github: "https://github.com/webcrafter011/Youtube-Media-Downloader",
      demo: "#",
      featured: false,
      purity: "95.8%",
    },
    {
      id: 6,
      title: "Grok the Chatbot",
      description:
        "AI chatbot built using Flask backend and x.ai integration. Typing effect and prompt-response logic included.",
      image:
        "https://images.pexels.com/photos/5076525/pexels-photo-5076525.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "empire",
      technologies: ["Flask", "HTML", "JavaScript", "x.ai"],
      github: "https://github.com/webcrafter011/Grok-Chatbot",
      demo: "#",
      featured: false,
      purity: "96.2%",
    },
  ];

  const categories = [
    { id: "all", label: "All Operations", icon: Filter },
    { id: "empire", label: "Fullstack Projects", icon: Beaker },
    { id: "business", label: "Frontend UI", icon: DollarSign },
    { id: "legal", label: "AI / Python Tools", icon: Scale },
    { id: "corporate", label: "Client Sites", icon: ExternalLink },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-bb-dark via-bb-gray to-bb-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-oswald tracking-wider">
            <span className="bg-gradient-to-r from-bb-green via-bb-yellow to-bb-orange bg-clip-text text-transparent">
              THE OPERATION
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-mono">
            We're done when I say we're done. Each project represents a
            carefully calculated move in building the most sophisticated web
            applications in the business.
          </p>
        </div>

       {/* YouTube Project Showcase */}
{/* <ProjectVideoSlider /> */}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bold font-oswald transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-bb-green to-bb-yellow text-bb-dark shadow-lg animate-glow"
                    : "bg-bb-gray border border-bb-green/30 text-bb-green hover:bg-bb-green/20 hover:text-bb-yellow"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const videoRef = project.video ? useRef<HTMLVideoElement>(null) : null;
            const [isHovered, setIsHovered] = useState(false);
            const [carouselIndex, setCarouselIndex] = useState(0);
            useEffect(() => {
              let interval: ReturnType<typeof setInterval>;
              if (isHovered && project.images) {
                interval = setInterval(() => {
                  setCarouselIndex((prev) => (prev + 1) % project.images.length);
                }, 3000);
              } else {
                setCarouselIndex(0);
              }
              return () => clearInterval(interval);
            }, [isHovered, project.images]);
            return (
              <div
                key={project.id}
                className={`group bg-bb-gray/30 rounded-xl overflow-hidden border transition-all duration-300 transform hover:scale-105 ${
                  project.featured
                    ? "border-bb-green/50 shadow-lg shadow-bb-green/20 animate-glow"
                    : "border-bb-green/20 hover:border-bb-yellow"
                }`}
                onMouseEnter={() => {
                  setIsHovered(true);
                  if (videoRef?.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                  }
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  if (videoRef?.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                  }
                }}
              >
                <div className="relative overflow-hidden">
                  {project.video ? (
                    <video
                      ref={videoRef}
                      src={project.video}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 filter brightness-75 bg-black"
                      muted
                      loop={false}
                      controls={false}
                      preload="metadata"
                      poster={undefined}
                    />
                  ) : project.images ? (
                    <img
                      src={project.images[carouselIndex]}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 filter brightness-75"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 filter brightness-75"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bb-dark/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-bb-green text-bb-dark text-xs font-bold rounded-full font-oswald transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                      PREMIUM GRADE
                    </div>
                  )}

                  <div className="absolute top-4 right-4 px-3 py-1 bg-bb-yellow/90 text-bb-dark text-xs font-bold rounded-full font-mono transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    {project.purity} PURE
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-bb-green transition-colors font-oswald">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed font-mono">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs transition-colors duration-200 font-mono ${
                          project.featured
                            ? "bg-bb-green/20 text-bb-green hover:bg-bb-green/30"
                            : "bg-bb-gray text-gray-300 hover:bg-bb-yellow/20 hover:text-bb-yellow"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3 mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-bb-dark/80 text-bb-green rounded-lg border border-bb-green/50 hover:bg-bb-green hover:text-bb-dark font-mono text-sm font-semibold transition-colors"
                    >
                      <Github className="h-4 w-4 mr-2" /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-bb-green/80 text-bb-dark rounded-lg border border-bb-yellow/50 hover:bg-bb-yellow font-mono text-sm font-semibold transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Website
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-bb-gray/30 border border-bb-green/30 rounded-xl p-8 max-w-2xl mx-auto">
            <p className="text-bb-green mb-4 font-mono text-lg">Say my name.</p>
            <p className="text-gray-300 mb-6 font-mono">
              Ready to build an empire? Let's cook up something that will
              dominate the market.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-gradient-to-r from-bb-green to-bb-yellow text-bb-dark rounded-lg font-bold font-oswald hover:from-bb-yellow hover:to-bb-orange transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              LET'S COOK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
