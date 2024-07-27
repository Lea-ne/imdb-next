import React from 'react';

const genres = [
  'action',
  'comedy',
  'drama',
  'horror',
  'sci-fi',
  'adventure',
  'animation',
  'biography',
  'crime',
  'documentary',
  'family',
  'fantasy',
  'history',
  'music',
  'mystery',
  'romance',
  'thriller',
  'war',
  'western',
];


const GenreFilter = () => {
  return (
    <form action="/submit-form" method="post">
      <h1>Sélectionnez les genres de films que vous aimez</h1>
      {genres.map((genre) => (
        <label key={genre}>
          <input type="checkbox" name="genres" value={genre} />{genre}<br/>
        </label>
      ))}
    </form>
  );
};

export default GenreFilter;
