import MoviesResult from "@/components/MoviesSeries/MoviesResult";
const API_KEY = process.env.TMDB_API_KEY;


export default async function SearchPage({params}) {

    const searchTerm = params.searchTerm

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=fr&page=1`);

    const data = await res.json();

    const results = data.results;
  return (
    <div>
        {
            results && results.length === <h1>No result found</h1>
        }
        {
            results && <MoviesResult results={results} />
        }
    </div>
  )
}
