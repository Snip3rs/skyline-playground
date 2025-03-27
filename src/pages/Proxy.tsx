
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProxySearch from '@/components/proxy/ProxySearch';
import Watermark from '@/components/shared/Watermark';

const Proxy = () => {
  return (
    <div className="min-h-screen bg-carbon-black">
      <Watermark />
      <Navbar />
      
      <main className="pt-20">
        <ProxySearch />
      </main>
      
      <Footer />
    </div>
  );
};

export default Proxy;
