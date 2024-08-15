// utils/api.js

const API_KEY = process.env.TMDB_API_KEY;

export async function fetchMovies(endpoint) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=fr&page=1`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data.results;
  } 
  
  catch (error) {
    console.error('Caught Error:', error);
    return [];
  }
}


// tmdbcall.js
export async function fetchCredits(mediaType, movieID) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/${mediaType}/${movieID}/credits?api_key=${API_KEY}&language=en-US`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return {
      cast: data.cast, // Acteurs
      crew: data.crew  // Équipe technique
    };
  } 
  catch (error) {
    console.error('Caught Error:', error);
    return {
      cast: [],
      crew: []
    };
  }
}


export async function fetchTopRatedMovie() {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data.results;
  } 
  
  catch (error) {
    console.error('Caught Error:', error);
    return [];
  }
}

