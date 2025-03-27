
import React from 'react';
import Button from '../shared/Button';

const DownloadSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-carbon-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-morphism rounded-lg p-8 blue-outline">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Eaglercraft Downloads</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Play Minecraft in your browser with Eaglercraft
            </p>
            <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="blue-outline rounded-lg p-6 bg-secondary/50 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-white mb-4">Eaglercraft 1.12</h3>
              <p className="text-gray-400 mb-6">
                Play Minecraft 1.12 directly in your browser with support for servers.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-primary mb-2">Server Address</h4>
                  <div className="bg-black/50 p-2 rounded text-gray-300 font-mono">
                    wss://play.skylinenet.xyz
                  </div>
                </div>
                <div>
                  <h4 className="text-primary mb-2">Alternative Server</h4>
                  <div className="bg-black/50 p-2 rounded text-gray-300 font-mono">
                    play.zelz.net (1.12 wasm)
                  </div>
                </div>
                <div className="mt-8">
                  <a 
                    href="https://raw.githack.com/carbonsystems-dev/eaglercraft/main/stable-download/Offline_Download_Version.html" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full">
                      Download Eaglercraft 1.12
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="blue-outline rounded-lg p-6 bg-secondary/50 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-white mb-4">EaglercraftX 1.8</h3>
              <p className="text-gray-400 mb-6">
                Play Minecraft 1.8 directly in your browser with enhanced features.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-primary mb-2">Server Address</h4>
                  <div className="bg-black/50 p-2 rounded text-gray-300 font-mono">
                    wss://play.skylinenet.xyz
                  </div>
                </div>
                <div>
                  <h4 className="text-primary mb-2">Instructions</h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>Download the client</li>
                    <li>Extract the files if needed</li>
                    <li>Open the HTML file in your browser</li>
                    <li>Enter the server address above</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <a 
                    href="https://raw.githack.com/carbonsystems-dev/eaglercraft/main/stable-download/Offline_Download_Version.html" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full">
                      Download EaglercraftX 1.8
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Need help? Join our Discord community for support and updates.
            </p>
            <a 
              href="https://discord.gg/qAwjYGUmAA" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.378-.444.962-.608 1.39a18.27 18.27 0 0 0-5.487 0c-.164-.428-.397-1.012-.608-1.39a.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.028C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.029zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"></path>
                </svg>
                Join Discord
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
