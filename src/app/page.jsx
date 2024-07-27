import MoviesResult from "@/components/MoviesSeries/MoviesResult";
import { fetchMovies } from "@/lib/tmdb_api_call";


export default async function Home() {

   const results = await fetchMovies('trending/all/week');

    return (
      <div>
        <MoviesResult results={results} baseUrl="/movies"/>
      </div>
    );
} 

