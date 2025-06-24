import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Video Data ---
const videos = [
  {
    id: 'XYn7mVN_4AM',
    title: 'Craft My Plate Full-Stack Web Application',
    description: 'Craft My Plate Full-Stack Web Application',
  },
  {
    id: 'foWneOa47iM',
    title: 'CS50 Final Project | ResourceNation',
    description: 'CS50 Final Project | ResourceNation',
  },
  {
    id: 'n_SjcC8X6ME',
    title: 'CS50 web programming | Project 1 | Django | web development',
    description: 'CS50 web programming | Project 1 | Django | web development',
  },
  {
    id: '',
    title: 'CS50 web development Project0 Demo',
    description: 'CS50 web development Project0 Demo',
  },
];

// --- Slider Component ---
const ProjectVideoSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => setCurrentIndex(index);

  const currentVideo = videos[currentIndex];

  return (
    <div className="mb-16">
      <div className="bg-gradient-to-r from-bb-green/10 to-bb-yellow/10 p-4 sm:p-8 rounded-2xl border border-bb-green/30">
        <h3 className="text-3xl font-semibold text-center mb-4 text-bb-green font-oswald">
          PROJECT SHOWCASE
        </h3>
        <p className="text-gray-300 text-center mb-6 max-w-3xl mx-auto font-mono">
          Here are a few projects from my lab. Use the arrows to navigate through the video logs and see them in action.
        </p>

        {/* --- Video Slider --- */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl border border-bb-yellow/30 group">
            <iframe
              key={currentVideo.id}
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=0&rel=0`}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-bb-green/80 z-10"
              aria-label="Previous video"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-bb-green/80 z-10"
              aria-label="Next video"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Video Info + Dots */}
          <div className="mt-4 text-center">
            <h4 className="text-lg font-semibold text-bb-yellow font-oswald tracking-wide">{currentVideo.title}</h4>
            <p className="text-gray-400 font-mono text-sm mt-1 mb-4 h-10">{currentVideo.description}</p>

            <div className="flex justify-center items-center space-x-2">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-3 w-3 rounded-full transition-colors duration-300 ${currentIndex === i ? 'bg-bb-yellow' : 'bg-bb-gray/50 hover:bg-bb-green'}`}
                  aria-label={`Go to video ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideoSlider; 