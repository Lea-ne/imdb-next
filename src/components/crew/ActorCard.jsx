import React from 'react';
import Image from 'next/image';


export default function ActorCard({ actor }) {
  return (
    <div key={actor.cast_id} className="actor-card">
    <a href={`/credit/${actor.id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        width={100}
        height={150}
        alt={`Image de ${actor.name}`}
      />
      <p>{actor.name} as {actor.character}</p>
      </a>
    </div>
  );
}
