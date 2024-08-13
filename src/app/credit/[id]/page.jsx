import React from 'react';
import MovieCard from '@/components/MoviesSeries/MovieCard';

export default async function MoviePage({ params }) {
  const actorID = params.id;
  const API_KEY = process.env.TMDB_API_KEY;

  // Récupération des informations de l'acteur
  const actorRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}?api_key=${API_KEY}`);
  const actor = await actorRes.json();

  // Récupération des crédits de l'acteur (films et séries)
  const creditsRes = await fetch(`https://api.themoviedb.org/3/person/${actorID}/combined_credits?api_key=${API_KEY}`);
  const credits = await creditsRes.json();

  // Calculer l'âge de l'acteur
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  const actorAge = actor.birthday ? calculateAge(actor.birthday) : 'N/A';

  return (
    <div>
      <h1>{actor.name}</h1>
      <p>Age: {actorAge}</p>
      <p>Biographie : {actor.biography || 'Non disponible'}</p>

      <h2>Filmographie</h2>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {credits.cast.map((credit) => (
          <MovieCard
            key={credit.id}
            result={credit}
            url={`/${credit.media_type === 'movie' ? 'movies' : 'series'}/${credit.id}`}
          />
        ))}
      </div>
    </div>
  );
}
