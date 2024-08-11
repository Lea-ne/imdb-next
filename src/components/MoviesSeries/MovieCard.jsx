// components/MoviesSeries/MovieCard.jsx
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid'

export default function MovieCard({ result, url }) {
  return (
    <div>
      <a href={url} className='group'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
          width={200}
          height={300}
          className='rounded-s group-hover:opacity-65 transition-opacity duration-300'
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <div>

          {/* titre du film */}
          <h4>{result.title || result.name}</h4>

          {/* notation */}
          <div className='flex'>
            <StarIcon className='w-4' />
            {result.vote_average ? result.vote_average.toFixed(1) : 'no grade'}
          </div>

        </div>
      </a>
    </div>
  )
}
