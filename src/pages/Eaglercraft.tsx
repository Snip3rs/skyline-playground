
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DownloadSection from '@/components/eaglercraft/DownloadSection';
import Watermark from '@/components/shared/Watermark';

const Eaglercraft = () => {
  return (
    <div className="min-h-screen bg-carbon-black">
      <Watermark />
      <Navbar />
      
      <main className="pt-20">
        <DownloadSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Eaglercraft;
