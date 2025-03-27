
import React from 'react';
import AppCard from './AppCard';

const AppGrid = () => {
  const apps = [
    { 
      id: 1, 
      title: 'Discord', 
      description: 'Chat with friends and communities',
      icon: 'https://lunaar.org/img/discord.png',
      url: 'https://discord.com'
    },
    { 
      id: 2, 
      title: 'YouTube', 
      description: 'Watch videos from around the world',
      icon: 'https://lunaar.org/img/youtube.png',
      url: 'https://youtube.com'
    },
    { 
      id: 3, 
      title: 'Twitch', 
      description: 'Watch live streams of your favorite games',
      icon: 'https://lunaar.org/img/twitch.png',
      url: 'https://twitch.tv'
    },
    { 
      id: 4, 
      title: 'Google Drive', 
      description: 'Cloud storage for all your files',
      icon: 'https://lunaar.org/img/gdrive.png',
      url: 'https://drive.google.com'
    },
    { 
      id: 5, 
      title: 'Netflix', 
      description: 'Watch movies and TV shows',
      icon: 'https://lunaar.org/img/netflix.png',
      url: 'https://netflix.com'
    },
    { 
      id: 6, 
      title: 'Spotify', 
      description: 'Listen to your favorite music',
      icon: 'https://lunaar.org/img/spotify.png',
      url: 'https://spotify.com'
    },
    { 
      id: 7, 
      title: 'Reddit', 
      description: 'The front page of the internet',
      icon: 'https://lunaar.org/img/reddit.png',
      url: 'https://reddit.com'
    },
    { 
      id: 8, 
      title: 'TikTok', 
      description: 'Short-form mobile videos',
      icon: 'https://lunaar.org/img/tiktok.png',
      url: 'https://tiktok.com'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {apps.map((app) => (
        <AppCard
          key={app.id}
          title={app.title}
          description={app.description}
          icon={app.icon}
          url={app.url}
        />
      ))}
    </div>
  );
};

export default AppGrid;
