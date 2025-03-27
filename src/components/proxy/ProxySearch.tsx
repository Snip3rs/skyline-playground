
import React, { useState } from 'react';
import Button from '../shared/Button';

const ProxySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Using DuckDuckGo as the search engine through Coproxy
    if (searchQuery.trim()) {
      const encodedQuery = encodeURIComponent(searchQuery);
      const proxyUrl = `https://www.coproxy.org/search?q=${encodedQuery}&type=web`;
      window.open(proxyUrl, '_blank');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-carbon-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="glass-morphism rounded-lg p-8 blue-outline">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Web Proxy</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse the web anonymously using our secure proxy service
            </p>
            <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <input
                type="text"
                className="blue-outline bg-black/40 backdrop-blur-lg text-white placeholder-gray-400 py-4 block w-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md"
                placeholder="Search the web with DuckDuckGo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM3.5 10a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" clipRule="evenodd" />
                  <path d="M12.207 12.207a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414l2-2a1 1 0 011.414 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <Button type="submit" className="w-full">
                Search with DuckDuckGo
              </Button>
            </div>
          </form>
          
          <div className="mt-12">
            <h3 className="text-primary font-bold mb-4">About Our Proxy</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span>Bypass network restrictions and access blocked content</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                <span>Browse anonymously with encrypted connections</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Search using DuckDuckGo for privacy-focused results</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>This proxy service uses Coproxy technology.</p>
            <p className="mt-2">
              By using this service, you agree to our terms of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProxySearch;
