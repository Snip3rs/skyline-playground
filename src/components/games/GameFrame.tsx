
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface GameFrameProps {
  url: string;
  title: string;
  className?: string;
}

const GameFrame = ({ url, title, className }: GameFrameProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={cn("w-full aspect-video relative", className)}>
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-carbon-black">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
          <p className="text-gray-300">Loading {title}...</p>
        </div>
      )}
      
      <iframe 
        src={url}
        title={title}
        className="w-full h-full border-0"
        allowFullScreen
        onLoad={() => setLoading(false)}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
};

export default GameFrame;
