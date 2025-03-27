
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card from '@/components/shared/Card';
import Watermark from '@/components/shared/Watermark';

interface Game {
  id: number;
  title: string;
  image: string;
  category: string;
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Simulated game data (normally this would come from an API)
  useEffect(() => {
    // This simulates fetching games from an API
    const fetchGames = () => {
      setLoading(true);
      
      // Sample game data inspired by NativeGames
      const gameData = [
        { id: 1, title: 'Slope', image: 'https://lite.nativegames.net/assets/images/games/slope.jpg', category: 'Arcade' },
        { id: 2, title: '2048', image: 'https://lite.nativegames.net/assets/images/games/2048.jpg', category: 'Puzzle' },
        { id: 3, title: 'Wordle', image: 'https://lite.nativegames.net/assets/images/games/wordle.jpg', category: 'Word' },
        { id: 4, title: 'Basketball Stars', image: 'https://lite.nativegames.net/assets/images/games/basketball-stars.jpg', category: 'Sports' },
        { id: 5, title: 'Cut the Rope', image: 'https://lite.nativegames.net/assets/images/games/cut-the-rope.jpg', category: 'Puzzle' },
        { id: 6, title: 'Temple Run 2', image: 'https://lite.nativegames.net/assets/images/games/temple-run-2.jpg', category: 'Runner' },
        { id: 7, title: 'Subway Surfers', image: 'https://lite.nativegames.net/assets/images/games/subway-surfers.jpg', category: 'Runner' },
        { id: 8, title: 'Geometry Dash', image: 'https://lite.nativegames.net/assets/images/games/geometry-dash.jpg', category: 'Arcade' },
        { id: 9, title: 'Flappy Bird', image: 'https://lite.nativegames.net/assets/images/games/flappy-bird.jpg', category: 'Arcade' },
        { id: 10, title: 'Minecraft Classic', image: 'https://lite.nativegames.net/assets/images/games/minecraft-classic.jpg', category: 'Adventure' },
        { id: 11, title: 'Angry Birds', image: 'https://lite.nativegames.net/assets/images/games/angry-birds.jpg', category: 'Puzzle' },
        { id: 12, title: 'Chess', image: 'https://lite.nativegames.net/assets/images/games/chess.jpg', category: 'Board' },
      ];
      
      setGames(gameData);
      setLoading(false);
    };
    
    fetchGames();
  }, []);

  const categories = ['All', 'Arcade', 'Puzzle', 'Runner', 'Sports', 'Adventure', 'Board', 'Word'];

  const filteredGames = games.filter((game) => {
    const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleGameClick = (id: number) => {
    window.open(`https://lite.nativegames.net/game/${id}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-carbon-black">
      <Watermark />
      <Navbar />
      
      <main className="pt-20">
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Games</h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Browse our collection of unblocked games that you can play directly in your browser
              </p>
              <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              <div className="flex overflow-x-auto pb-2 scrollbar-none glass-morphism p-2 rounded-lg blue-outline">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap transition-all ${
                      activeCategory === category 
                        ? 'bg-primary text-white' 
                        : 'text-gray-300 hover:bg-primary/10'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="relative mt-4 md:mt-0">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="w-full md:w-64 px-4 py-2 pl-10 rounded-lg bg-secondary/70 backdrop-blur-lg border-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 blue-outline"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
            </div>
            
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredGames.map((game) => (
                  <Card
                    key={game.id}
                    title={game.title}
                    image={game.image}
                    onClick={() => handleGameClick(game.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No games found matching your criteria</p>
                <button 
                  onClick={() => {setSearchTerm(''); setActiveCategory('All');}}
                  className="text-primary mt-4 hover:underline"
                >
                  Reset filters
                </button>
              </div>
            )}
            
            <div className="text-center mt-12">
              <a 
                href="https://lite.nativegames.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-white transition-colors"
              >
                <span>Visit NativeGames for more games</span>
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Games;
