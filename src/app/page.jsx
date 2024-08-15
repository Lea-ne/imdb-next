import MoviesResult from "@/components/MoviesSeries/MoviesResult";
import { fetchMovies } from "@/lib/tmdb_api_call";
import HomePageCarousel from "@/components/homePage/HomePageCarousel/HomePageCarousel";
import TopTrendingMovie from "@/components/homePage/TopTrending/TopTrendingMovie";
import ListingRow from "@/components/homePage/ListingRow/ListingRow";
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

      <div className="mt-16 mb-16">
        <TopTrendingMovie/>
      </div>


      <div className="mt-16 mb-16">
        <ListingRow />
      </div>

      

    </div>
  );
}
