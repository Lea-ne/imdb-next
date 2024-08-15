import React from 'react'
import TopTrendingMovieCard from './TopTrendingMovieCard'
import { fetchTopRatedMovie } from "@/lib/tmdb_api_call"
import styles from './TopTrendingMovieCard.module.css'
import { HeartIcon } from '@heroicons/react/24/solid'



export default async function TopTrendingMovie() {

    const topMovies = await fetchTopRatedMovie();

    // Trier les films par date de sortie, du plus récent au plus ancien
    const sortedTopMovies = topMovies.sort((a, b) => b.popularity - a.popularity);

    // Récupérer les posters et les noms des trois premiers films après le tri
    const topThreeMovies = sortedTopMovies.slice(0, 3);


  return (
    <div className={styles.topMoviesection}>

        <h1 className={styles.titleTopMovies}>Top of the month<HeartIcon className='ml-2 h-5 w-5 text-red-600 inline-flex' /></h1>

        <div className={styles.topMovieContainer}>
            <TopTrendingMovieCard 
                keyNumberImage={1} 
                postersrc={`https://image.tmdb.org/t/p/w500${topThreeMovies[0].backdrop_path}`} 
                moviename={topThreeMovies[0].title} 
            />
            <TopTrendingMovieCard 
                keyNumberImage={2} 
                postersrc={`https://image.tmdb.org/t/p/w500${topThreeMovies[1].backdrop_path}`} 
                moviename={topThreeMovies[1].title} 
            />
            <TopTrendingMovieCard 
                keyNumberImage={3} 
                postersrc={`https://image.tmdb.org/t/p/w500${topThreeMovies[2].backdrop_path}`} 
                moviename={topThreeMovies[2].title} 
            />
        </div>
    </div>
  )
}
