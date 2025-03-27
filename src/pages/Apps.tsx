
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Watermark from '@/components/shared/Watermark';
import AppGrid from '@/components/apps/AppGrid';

const Apps = () => {
  return (
    <div className="min-h-screen bg-carbon-black">
      <Watermark />
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Web Applications</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access useful web applications directly from your browser
            </p>
            <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
          </div>
          <AppGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apps;
