import MoviesResult from "@/components/MoviesSeries/MoviesResult";
import { fetchMovies } from "@/lib/tmdb_api_call";
import HomePageCarousel from "@/components/homePage/HomePageCarousel/HomePageCarousel";
import TopTrendingMovie from "@/components/homePage/TopTrending/TopTrendingMovie";
// import TopTrendingMovie from "@/components/homePage/TopTrending/TopTrendingMovie";
// import { fetchTopRatedMovie } from "@/lib/tmdb_api_call"

export default async function Home() {

  // const topMovies = await fetchTopRatedMovie();

  // // Trier les films par date de sortie, du plus récent au plus ancien
  // const sortedTopMovies = topMovies.sort((a, b) => b.popularity - a.popularity);

  // // Récupérer les posters et les noms des trois premiers films après le tri
  // const topThreeMovies = sortedTopMovies.slice(0, 3);

  return (
    <div>
      <HomePageCarousel />

      <div className="mt-20 mb-20">
        <TopTrendingMovie/>
      </div>

      

    </div>
  );
}
