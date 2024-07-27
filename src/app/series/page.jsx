import MoviesResult from "@/components/MoviesSeries/MoviesResult";
import { fetchMovies } from "@/lib/tmdb_api_call";



export default async function Series() {
    const results = await fetchMovies('tv/popular');
    // console.log(results);  
  
    return (
      <div>
        <h1 className="text-2xl font-medium">Series list</h1>
        <div>
          <MoviesResult results={results} baseUrl="/series"/>
        </div>
      </div>
    )
  }

  
