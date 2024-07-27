import Image from 'next/image';
import {StarIcon} from '@heroicons/react/24/solid'

const API_KEY = process.env.TMDB_API_KEY;

export default async function MoviePage({params}) {

  const movieID = params.id

  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`)

  const movie = await res.json();
  console.log(movie);

  return (
    <div>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster__path}`}
          width={500}
          height={300}
          alt="Screenshots of the dashboard project showing desktop version"
        /> 
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>{movie.release_date || movie.first_air_date}</p>
          <div className='flex'><StarIcon className='w-4' />{movie.vote_average ? movie.vote_average.toFixed(1) : 'no grade'}</div>
        </div>
      </div>
    </div>
  )
}
