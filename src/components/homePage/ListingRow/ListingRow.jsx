import React from 'react'
import { fetchMovies } from "@/lib/tmdb_api_call"
import MoviesResult from '@/components/MoviesSeries/MoviesResult';
import { FireIcon } from '@heroicons/react/24/solid'


export default async function ListingRow() {

    const results = await fetchMovies('trending/all/day');
    const onyl5movie = results.slice(0, 5);

  return (
    <div className='px-16'>

        <h1 className="text-2xl font-semibold pb-8">Popular now<FireIcon className='ml-2 h-5 w-5 text-orange-500 inline-flex' /></h1>
        <MoviesResult results={onyl5movie}/>

    </div>
  )
}




