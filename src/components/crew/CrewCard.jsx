import React from 'react'
import { fetchCredits } from "@/lib/tmdb_api_call";

const mediaType = 'movie';
const movieID = params.id;

const { cast, crew } = await fetchCredits(mediaType, movieID); // Fetch cast and crew data




export default function CrewCard() {
  return (
    <div key={cast.credit_id}>
        <p>{cast.name} - {cast.job}</p>
    </div>
  )
}

