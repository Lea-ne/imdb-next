import Image from 'next/image';
import {StarIcon} from '@heroicons/react/24/solid';
import GenreCard from '@/components/genreCard';
import { fetchCredits } from "@/lib/tmdb_api_call";
import ActorCard from '@/components/crew/ActorCard';
import CrewCard from '@/components/crew/CrewCard';


const API_KEY = process.env.TMDB_API_KEY;

export default async function SeriePage({params}) {

  const serieID = params.id
  //test
  const movieID = params.id
  console.log(serieID);

  const res = await fetch(`https://api.themoviedb.org/3/tv/${serieID}?api_key=${API_KEY}`)

  const serie = await res.json();
  console.log(serie);


  
  //****crew and cast info***//
  const mediaType = 'tv'
  const { cast, crew } = await fetchCredits(mediaType, movieID); // Fetch cast and crew data

  // Filtrage du crew
  const director = crew.find(member => member.job === 'Director');
  const productionCrew = crew.filter(member => member.department === 'Production');
  const FullCrew = crew.filter(member =>member.job !== 'Director' && member.department !== 'Production');




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

        <div>
          {serie.genres && serie.genres.map((genre) => (
            <GenreCard key={genre.id} genreName={genre.name} id={genre.id}/>
          ))}
        </div>



        {/* Crew du film */}

          {/* Cast */}
          <div>
            <h2>Cast</h2>
            <ul>
              {cast && cast.slice(0, 10).map((actor) => (
                <ActorCard key={actor.cast_id} actor={actor} />
              ))}
            </ul>
          </div>

          {/* Production Crew */}
          <div>
            <h2>Production Crew</h2>
            <ul>
              {crew && crew.map((member) => (
                <CrewCard key={member.credit_id} member={member} />
              ))}
            </ul>
          </div>

      </div>
    </div>
  )
}
