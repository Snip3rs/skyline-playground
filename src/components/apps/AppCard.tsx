
import React from 'react';
import { cn } from '@/lib/utils';

interface AppCardProps {
  title: string;
  description: string;
  icon: string;
  url: string;
  className?: string;
}

const AppCard = ({ title, description, icon, url, className }: AppCardProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "block h-full transition-all duration-300 hover:scale-105", 
        className
      )}
    >
      <div className="h-full glass-morphism border-primary/20 blue-outline rounded-lg overflow-hidden">
        <div className="p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
            <img 
              src={icon} 
              alt={title} 
              className="w-10 h-10 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/3b82f6/FFFFFF/?text=' + title.charAt(0);
              }}
            />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default AppCard;
