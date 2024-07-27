
import MoviesResult from "@/components/MoviesSeries/MoviesResult";
import SearchFilter from "@/components/Search/SearchFilter";
const API_KEY = process.env.TMDB_API_KEY;

export default async function SearchPage({ params }) {
    const searchTerm = params.searchTerm;

    // Fetch movies
    const movieRes = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=fr&page=1`);
    const movieData = await movieRes.json();
    const movieResults = movieData.results.map(movie => ({ ...movie, media_type: 'movie' }));

    // Fetch TV shows
    const tvRes = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchTerm}&language=fr&page=1`);
    const tvData = await tvRes.json();
    const tvResults = tvData.results.map(tv => ({ ...tv, media_type: 'tv' }));

    // Combine results
    const results = [...movieResults, ...tvResults];

    return (
        <div>
            
           <SearchFilter />


            {
                results && results.length === 0 ? <h1>No result found</h1> : <MoviesResult results={results} />
            }
        </div>
    );
}
