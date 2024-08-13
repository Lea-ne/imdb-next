import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import GenreCard from '@/components/GenreCard';
import { fetchCredits } from "@/lib/tmdb_api_call";
import ActorCard from '@/components/crew/ActorCard';
import CrewCard from '@/components/crew/CrewCard';

export default async function MoviePage({ params }) {

  const movieID = params.id;
  const API_KEY = process.env.TMDB_API_KEY;

  // Récupérer les infos du film
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`);
  const movie = await res.json();

  // Récupérer le cast et le crew
  const mediaType = 'movie';
  const { cast, crew } = await fetchCredits(mediaType, movieID);

  // Filtrage des crew (désactivé ici pour montrer tous les crew)
  // const director = crew.find(member => member.job === 'Director');
  // const productionCrew = crew.filter(member => member.department === 'Production');
  // const FullCrew = crew.filter(member => member.job !== 'Director' && member.department !== 'Production');

  return (
    <div>
      <div>
        {/* Poster */}
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          alt="Image"
        /> 

        <div>
          {/* Titre du film */}
          <h2>{movie.title || movie.name}</h2>
          {/* Description du film */}
          <p>{movie.overview}</p>
          {/* Date de sortie */}
          <p>{movie.release_date || movie.first_air_date}</p>
          <div className='flex'><StarIcon className='w-4' />{movie.vote_average ? movie.vote_average.toFixed(1) : 'no grade'}</div>

          {/* Genre du film */}
          <div>
            {movie.genres && movie.genres.map((genre) => (
              <GenreCard key={genre.id} genreName={genre.name} id={genre.id} />
            ))}
          </div>

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
    </div>
  )
}
