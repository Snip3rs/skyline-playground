
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  image: string;
  className?: string;
  onClick?: () => void;
}

const Card = ({ title, image, className, onClick }: CardProps) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg glass-morphism hover-scale cursor-pointer blue-outline",
        "w-full h-48 group transition-all duration-300",
        className
      )}
      onClick={onClick}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-white font-bold text-lg truncate">{title}</h3>
          <div className="h-0.5 w-0 group-hover:w-full bg-primary mt-1 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
