
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Watermark from '@/components/shared/Watermark';
import GameFrame from '@/components/games/GameFrame';
import { Gamepad2 } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  image: string;
  url: string;
  category: string;
}

const GamePlayer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchGame = () => {
      setLoading(true);
      
      // Sample game data inspired by the provided HTML structure
      const gameData: Game[] = [
        { id: 1, title: 'Slope', image: 'https://lite.nativegames.net/assets/images/games/slope.jpg', url: 'https://lite.nativegames.net/slope', category: 'Arcade' },
        { id: 2, title: '2048', image: 'https://lite.nativegames.net/assets/images/games/2048.jpg', url: 'https://lite.nativegames.net/2048', category: 'Puzzle' },
        { id: 3, title: 'Wordle', image: 'https://lite.nativegames.net/assets/images/games/wordle.jpg', url: 'https://lite.nativegames.net/wordle', category: 'Word' },
        { id: 4, title: 'Basketball Stars', image: 'https://lite.nativegames.net/assets/images/games/basketball-stars.jpg', url: 'https://lite.nativegames.net/basketball-stars', category: 'Sports' },
        { id: 5, title: 'Cut the Rope', image: 'https://lite.nativegames.net/assets/images/games/cut-the-rope.jpg', url: 'https://lite.nativegames.net/cut-the-rope', category: 'Puzzle' },
        { id: 6, title: 'Temple Run 2', image: 'https://lite.nativegames.net/assets/images/games/temple-run-2.jpg', url: 'https://lite.nativegames.net/temple-run-2', category: 'Runner' },
        { id: 7, title: 'Subway Surfers', image: 'https://lite.nativegames.net/assets/images/games/subway-surfers.jpg', url: 'https://lite.nativegames.net/subway-surfers', category: 'Runner' },
        { id: 8, title: 'Geometry Dash', image: 'https://lite.nativegames.net/assets/images/games/geometry-dash.jpg', url: 'https://lite.nativegames.net/geometry-dash', category: 'Arcade' },
        { id: 9, title: 'Flappy Bird', image: 'https://lite.nativegames.net/assets/images/games/flappy-bird.jpg', url: 'https://lite.nativegames.net/flappy-bird', category: 'Arcade' },
        { id: 10, title: 'Minecraft Classic', image: 'https://lite.nativegames.net/assets/images/games/minecraft-classic.jpg', url: 'https://lite.nativegames.net/minecraft-classic', category: 'Adventure' },
        { id: 11, title: 'Angry Birds', image: 'https://lite.nativegames.net/assets/images/games/angry-birds.jpg', url: 'https://lite.nativegames.net/angry-birds', category: 'Puzzle' },
        { id: 12, title: 'Chess', image: 'https://lite.nativegames.net/assets/images/games/chess.jpg', url: 'https://lite.nativegames.net/chess', category: 'Board' },
      ];
      
      const foundGame = gameData.find(g => g.id === Number(id));
      setGame(foundGame || null);
      setLoading(false);
    };
    
    if (id) {
      fetchGame();
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-carbon-black">
      <Watermark />
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : game ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <button 
                    onClick={() => navigate('/games')}
                    className="mb-4 inline-flex items-center text-primary hover:text-white transition-colors"
                  >
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    <span>Back to Games</span>
                  </button>
                  <h1 className="text-3xl font-bold text-white flex items-center">
                    <Gamepad2 className="mr-2 h-7 w-7 text-primary" />
                    {game.title}
                  </h1>
                  <p className="text-gray-400 mt-1">Category: {game.category}</p>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => window.open(game.url, '_blank')}
                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/80 transition-colors"
                  >
                    Open in Full Screen
                  </button>
                </div>
              </div>
              
              <div className="w-full relative glass-morphism rounded-lg blue-outline overflow-hidden">
                <GameFrame url={game.url} title={game.title} />
              </div>
              
              <div className="text-center text-gray-400 text-sm">
                <p>Having trouble with the game? Try opening it in full screen mode or refreshing the page.</p>
                <p className="mt-2">All games are sourced from <a href="https://lite.nativegames.net/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NativeGames</a></p>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-white mb-4">Game Not Found</h2>
              <p className="text-gray-400 mb-6">The game you're looking for doesn't exist or is unavailable.</p>
              <button 
                onClick={() => navigate('/games')}
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
              >
                Browse Games
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GamePlayer;
