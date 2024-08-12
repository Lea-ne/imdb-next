import React from 'react';
import MovieCard from '@/components/MoviesSeries/MovieCard';

export default async function MoviePage({ params }) {
  const actorID = params.id;
  const API_KEY = process.env.TMDB_API_KEY;

  const res = await fetch(`https://api.themoviedb.org/3/person/${actorID}?api_key=${API_KEY}`);
  const actor = await res.json();

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
      
    </div>
  );
}
