import React from 'react'
import TopTrendingMovieCard from './TopTrendingMovieCard'
import { fetchMovies } from "@/lib/tmdb_api_call"
import styles from './TopTrendingMovieCard.module.css'
import { HeartIcon } from '@heroicons/react/24/solid'



export default async function TopTrendingMovie() {


    const topMovies = await fetchMovies('movie/top_rated');

    // Trier les films par date de sortie en ordre décroissant (les plus récents en premier)
    const sortedMovies = topMovies.sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return dateB - dateA; // Ordre décroissant
    });

    // Obtenir les trois premiers films les plus récents
    const topThreeMovies = sortedMovies.slice(0, 3);


  return (
    <div className="px-16">

        <h1 className="text-2xl font-semibold pb-8">Top of the month<HeartIcon className='ml-2 h-5 w-5 text-red-600 inline-flex' /></h1>

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
