
import React from 'react';
import Card from '../shared/Card';

const GameGrid = () => {
  const games = [
    { id: 1, title: 'Slope', image: 'https://lite.nativegames.net/assets/images/games/slope.jpg' },
    { id: 2, title: '2048', image: 'https://lite.nativegames.net/assets/images/games/2048.jpg' },
    { id: 3, title: 'Cut the Rope', image: 'https://lite.nativegames.net/assets/images/games/cut-the-rope.jpg' },
    { id: 4, title: 'Temple Run 2', image: 'https://lite.nativegames.net/assets/images/games/temple-run-2.jpg' },
    { id: 5, title: 'Subway Surfers', image: 'https://lite.nativegames.net/assets/images/games/subway-surfers.jpg' },
    { id: 6, title: 'Wordle', image: 'https://lite.nativegames.net/assets/images/games/wordle.jpg' },
  ];

  const handleGameClick = (id: number) => {
    window.open(`https://lite.nativegames.net/game/${id}`, '_blank');
  };

  return (
    <section className="py-24 bg-carbon-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Games</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out our collection of popular games that you can play directly in your browser
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card
              key={game.id}
              title={game.title}
              image={game.image}
              onClick={() => handleGameClick(game.id)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://lite.nativegames.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-white transition-colors"
          >
            <span>View all games</span>
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
