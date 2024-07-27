import Image from 'next/image';
import {StarIcon} from '@heroicons/react/24/solid'

const API_KEY = process.env.TMDB_API_KEY;

export default async function SeriePage({params}) {

  const serieID = params.id
  console.log(serieID)

  const res = await fetch(`https://api.themoviedb.org/3/tv/${serieID}?api_key=${API_KEY}`)

  const serie = await res.json();
  console.log(serie);

  return (
    <div>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path || serie.poster__path}`}
          width={500}
          height={300}
          alt="image"
        /> 
        <div>
          <h2 className='font-bold'>{serie.title || serie.name}</h2>
          <p>{serie.overview}</p>
          <p>{serie.release_date || serie.first_air_date}</p>
          <div className='flex'><StarIcon className='w-4' />{serie.vote_average ? serie.vote_average.toFixed(1) : 'no grade'}</div>
        </div>
      </div>
    </div>
  )
}
