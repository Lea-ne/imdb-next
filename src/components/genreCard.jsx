import React from 'react'


// Icônes associées aux IDs des genres
const genreIcons = {
  '28': '💥',         // Action
  '12': '🌍',         // Adventure
  '16': '🎨',         // Animation
  '35': '🤣',         // Comedy
  '80': '🕵️',        // Crime
  '99': '🎥',         // Documentary
  '18': '🎭',         // Drama
  '10751': '👪',      // Family
  '14': '🧚',         // Fantasy
  '36': '🏰',         // History
  '27': '👻',         // Horror
  '10402': '🎵',      // Music
  '9648': '🕵️‍♂️',    // Mystery
  '10749': '💖',      // Romance
  '878': '🚀',        // Science Fiction
  '10770': '📺',      // TV Movie
  '53': '😱',         // Thriller
  '10752': '⚔️',      // War
  '37': '🤠',         // Western
  '10759': '🔫',      // Action & Adventure
  '10762': '🧒',      // Kids
  '10763': '📰',      // News
  '10764': '📡',      // Reality
  '10765': '🛸',      // Sci-Fi & Fantasy
  '10766': '💔',      // Soap
  '10767': '🎤',      // Talk
  '10768': '🏛️'      // War & Politics
};


// Composant pour afficher un genre avec son icône
export default function GenreCard({ genreName, id }) {
  return (
    <div className="flex items-center space-x-2">
      {genreIcons[id] && <span>{genreIcons[id]}</span>} {/* Afficher l'icône */}
      <p key={id}>{genreName}</p>
    </div>
  );
}



//requet API pour voir tout les genre
const http = require('https');

const API_KEY = process.env.TMDB_API_KEY;

const options = {
  method: 'GET',
  hostname: 'api.themoviedb.org',
  port: null,
  path: `/3/genre/tv/list?language=en&api_key=${API_KEY}`,
  headers: {
    accept: 'application/json'
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
