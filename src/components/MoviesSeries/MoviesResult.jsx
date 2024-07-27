// components/MoviesSeries/MoviesResult.jsx
import MovieCard from "./MovieCard";

export default function MoviesResult({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => {

        // Definir l'url de base pour le lien vers les card
        const baseUrl = result.media_type === 'movie' ? '/movies' : '/series';

        return <MovieCard key={result.id} result={result} url={`${baseUrl}/${result.id}`} />;
      })}
    </div>
  );
}
