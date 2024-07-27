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
