import React, { useState } from 'react';
import { Music } from 'lucide-react';

const SpotifyPlayer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      {/* Floating Music Button */}
      <button
        onClick={toggleVisibility}
        className="fixed top-24 right-6 z-50 p-3 bg-gradient-to-r from-bb-green to-bb-yellow text-bb-dark rounded-full shadow-lg hover:from-bb-yellow hover:to-bb-orange transition-all duration-300 transform hover:scale-110 animate-glow"
      >
        <Music className="h-6 w-6" />
      </button>
      {/* Spotify Embed Player */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="bg-bb-gray/95 backdrop-blur-sm border border-bb-green/50 rounded-xl p-4 w-[380px] shadow-2xl flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-4">
            <span className="text-bb-green font-oswald font-semibold">MY SPOTIFY PLAYLIST</span>
            <button onClick={toggleVisibility} className="text-gray-400 hover:text-bb-yellow transition-colors">×</button>
          </div>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/2pRLfJvW2gltB2eaHz0HPO?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            allowFullScreen
            title="Spotify Playlist"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default SpotifyPlayer;