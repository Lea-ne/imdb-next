import MovieResult from "@/components/MovieResult";

const API_KEY = process.env.TMDB_API_KEY;

export default async function Home() {

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=fr-FR&page=1`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    const results = data.results;
    console.log(results);

    return (
      <div>
        <MovieResult results={results} />
      </div>
    );
  } 
  
  catch (error) {
    console.error('Caught Error db');
    return (
      <p>Error</p>
    );
  }

}
