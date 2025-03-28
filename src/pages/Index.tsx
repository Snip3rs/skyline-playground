
import React from 'react';
import Hero from '@/components/home/Hero';
import GameGrid from '@/components/home/GameGrid';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Watermark from '@/components/shared/Watermark';

const Index = () => {
  return (
    <div className="min-h-screen bg-carbon-black">
      <Watermark />
      <Navbar />
      <main>
        <Hero />
        <GameGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
