import { fetchMovies } from "@/lib/tmdb_api_call";
import SeriesResult from '@/components/SeriesResult';


export default async function Series() {
    const results = await fetchMovies('tv/popular');
    console.log(results);  // Ajoutez cette ligne pour déboguer
  
    return (
      <div>
        <h1 className="text-2xl font-medium">Series list</h1>
        <div>
          <SeriesResult results={results}/>
        </div>
      </div>
    )
  }
  
