'use client'

import { useState } from 'react';

export default function SearchFilter() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    console.log(selectedFilter);
  };

  return (
    <div>
      <label>
        <input 
          type="radio" 
          name="filter" 
          value="all" 
          defaultChecked 
          onChange={handleFilterChange}
        />
        All
      </label>
      <label>
        <input 
          type="radio" 
          name="filter" 
          value="movies" 
          onChange={handleFilterChange}
        />
        Movies
      </label>
      <label>
        <input 
          type="radio" 
          name="filter" 
          value="series" 
          onChange={handleFilterChange}
        />
        Series
      </label>
    </div>
  );
}
