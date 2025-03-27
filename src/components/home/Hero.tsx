
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-carbon-black">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>
      
      {/* Grid Lines */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black)]">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzQjgyRjYyMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Welcome to </span>
            <span className="text-primary text-outline">Skyline Network</span>
          </h1>
          
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            Your gateway to unblocked games, Eaglercraft, and web proxy services
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/games">
              <Button size="lg" className="animate-pulse-blue">
                Play Games
              </Button>
            </Link>
            
            <Link to="/eaglercraft">
              <Button size="lg" variant="outline">
                Eaglercraft
              </Button>
            </Link>
            
            <Link to="/proxy">
              <Button size="lg" variant="ghost">
                Web Proxy
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
