import Image from 'next/image';
import {StarIcon} from '@heroicons/react/24/solid'

export default function MovieCard({ result }) {
  return (
    <div>
      <a href={`/movies/${result.id}`} className='group'>
      <Image
        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster__path}`}
        width={200}
        height={300}
        className='rounded-s group-hover:opacity-65 transition-opacity duration-300'
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <div>
        <h4>{result.original_title || result.original_name}</h4>
        <div className='flex'><StarIcon className='w-4' />{result.vote_average ? result.vote_average.toFixed(1) : 'no grade'}</div>
      </div>
      </a>
    </div>
  )
}
