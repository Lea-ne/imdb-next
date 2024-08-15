import React from 'react'
import styles from './TopTrendingMovieCard.module.css'

export default function TopTrendingMovieCard({keyNumberImage, postersrc, moviename}) {
  return (
    <div className={styles.topMovieCard}>

            {/* nombre */}
            <div className={styles.numerImage}>
                <img
                    src={`/top${keyNumberImage}.svg`}
                    alt="Screenshots of the dashboard project showing desktop version"
                />
            </div>

            {/* poster */}
            <div className={styles.topMoviePoster}>
                <img
                    src={postersrc}
                    alt="Screenshots of the dashboard project showing desktop version"
                />
                <h1>{moviename}</h1>
            </div>
    </div>

  )
}
