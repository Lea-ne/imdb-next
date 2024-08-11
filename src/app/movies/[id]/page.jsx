import Image from 'next/image';
import {StarIcon} from '@heroicons/react/24/solid'
import GenreCard from '@/components/genreCard';
import { fetchCredits } from "@/lib/tmdb_api_call";
import CrewCard from '@/components/crew/CrewCard';

  
export default async function MoviePage({params}) {

  const movieID = params.id;
  const API_KEY = process.env.TMDB_API_KEY;

  
  //recuperer les info du film
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`)
  const movie = await res.json();



  //****crew and cast info***//
  const mediaType = 'movie'
  const { cast, crew } = await fetchCredits(mediaType, movieID); // Fetch cast and crew data

  // Filtrage du crew
  const director = crew.find(member => member.job === 'Director');
  const productionCrew = crew.filter(member => member.department === 'Production');
  const FullCrew = crew.filter(member =>member.job !== 'Director' && member.department !== 'Production');

  console.log(crew);
  console.log(movie);



  return (
    <div>
      <div>

        {/* poster */}
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster__path}`}
          width={500}
          height={300}
          alt="Image"
        /> 

        <div>
          {/* Titre du film */}
          <h2>{movie.title || movie.name}</h2>
          {/* dsecription film */}
          <p>{movie.overview}</p>
          {/* date de réalisation */}
          <p>{movie.release_date || movie.first_air_date}</p>
          <div className='flex'><StarIcon className='w-4' />{movie.vote_average ? movie.vote_average.toFixed(1) : 'no grade'}</div>
        
          {/* Genre du film */}
          <div>
          {movie.genres && movie.genres.map((genre) => (
            <GenreCard key={genre.id} genreName={genre.name} id={genre.id}/>
          ))}
          </div>



          {/* Crew du film */}

          {/* Director */}
          {director && (
            <p><strong>Director:</strong> {director.name}</p>
          )}

          {/* Cast */}
          <div>
            <h2>Cast</h2>
            <ul>
              {cast && cast.slice(0, 10).map((actor) => ( // Limite l'affichage à 10 acteurs par exemple
                <li key={actor.cast_id}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    width={100}
                    height={300}
                    alt="Image"
                  /> 
                  {actor.name} as {actor.character}
                </li>

              ))}
            </ul>
          </div>

          {/* Production Crew */}
          <div>
            <h2>Production Crew</h2>
            <ul>
              {productionCrew && productionCrew.map((member) => (
                <li key={member.credit_id}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                    width={100}
                    height={300}
                    alt="Image"
                  /> 
                  {member.name} - {member.job}
                
                </li>
              ))}
            </ul>
          </div>

            {/* Tout le crew sans le directeur, les equipes de prod */}
            <div>
            <h2>Full crew</h2>
            <ul>
              {FullCrew && FullCrew.map((member) => (
                <li key={member.credit_id}>{member.name} - {member.job}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
