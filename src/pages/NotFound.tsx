
import React from "react";
import { Link } from "react-router-dom";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from "@/components/shared/Button";
import Watermark from "@/components/shared/Watermark";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-carbon-black">
      <Watermark />
      <Navbar />
      
      <main className="pt-20">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="glass-morphism rounded-lg p-8 blue-outline text-center max-w-lg mx-auto">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-white mb-8">Oops! Page not found</p>
            <p className="text-gray-400 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/">
              <Button>
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
