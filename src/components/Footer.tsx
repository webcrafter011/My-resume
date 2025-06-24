import React from 'react';
import { Beaker, Skull } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-bb-dark border-t border-bb-green/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Beaker className="h-8 w-8 text-bb-green animate-glow" />
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-bb-green via-bb-yellow to-bb-orange bg-clip-text text-transparent font-oswald tracking-wider">
                HEISENBERG
              </span>
              <div className="text-xs text-bb-green font-mono">EMPIRE BUILDER</div>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-400 font-mono">
            <span>I am the one who codes</span>
            <Skull className="h-4 w-4 text-bb-yellow" />
          </div>

          <div className="text-gray-400 text-sm mt-4 md:mt-0 font-mono">
            © {new Date().getFullYear()} All territories secured.
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-bb-green/20 text-center">
          <p className="text-bb-green font-mono text-sm">
            Chemistry is the study of change. - Walter White
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;