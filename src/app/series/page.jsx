import React from 'react'
import { fetchMovies } from "@/lib/tmdb_api_call";
import MoviesResult from "@/components/MoviesResult";

export default async function Series() {
    const results = await fetchMovies('tv/popular');
    console.log(results);  // Ajoutez cette ligne pour déboguer
  
    return (
      <div>
        <h1 className="text-2xl font-medium">Series list</h1>
        <div>
          <MoviesResult results={results} />
        </div>
      </div>
    )
  }
  
