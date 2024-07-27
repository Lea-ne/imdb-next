import { fetchMovies } from "@/lib/tmdb_api_call";
import MovieFilter from "@/components/filterNav/MovieFilter";
import MoviesResult from "@/components/MoviesSeries/MoviesResult";

export default async function Movies() {

  const results = await fetchMovies('trending/all/week');

  return (
    <div>
      <h1 className="text-2xl font-medium">Movies lists page</h1>
      <p>Ici sera listé les films</p>
      <MovieFilter />

      <MoviesResult results={results}/>
    </div>
  )
}
