import React from 'react';
import GradeStar from '../../ui/GradeStar';
import { EyeIcon, Bars3CenterLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { Button } from '../../ui/button';
import styles from './HomePageCarousel.module.css'

export default function HomePageCarousel() {
  return (

    <div className={styles.ContainerTrendingMovie} style={{ backgroundImage: "url('/Rectangle 92.png')" }}>

      <div className={styles.ContentTrendingMovie}>

        {/* title */}
        <h1>In the mood for love</h1>

        {/* movie infos */}
        <div className={styles.MovieInfos}>
          <p>2001</p>
          <p>‘花樣年華’</p>
          <p>Directed by</p>
          <p className={styles.realisator}>Wong Kar wai</p>
          <GradeStar 
            icon={<StarIcon className="w-4 text-orange-500" />} 
            grade="4.1"
          />
        </div>


        {/* descritpion */}
        <p className={styles.description}>20 ans après, redécouvrez au cinéma le film romantique ultime, dans une copie restaurée 4K exceptionnelle… Hong Kong, 1962. Mme Chan loue une chambre chez Mme Suen</p>
        
        {/* cta button */}
        <div className={styles.ctaButton}>
          <Button><Bars3CenterLeftIcon className="mr-2 h-4 w-4" />En savoir plus</Button>
          <Button><EyeIcon className="mr-2 h-4 w-4"/> Save to wathlist</Button>
        </div>
      </div>

      <div className={styles.ArrowCarousel}>
        <ChevronRightIcon className='h-5 w-5 text-white'/>
      </div>

    </div>
  );
}
