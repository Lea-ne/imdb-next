'use client';

export default function SearchFilter({ filter, setFilter }) {
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div>
            <label>
                <input 
                    type="radio" 
                    name="filter" 
                    value="all" 
                    checked={filter === 'all'} 
                    onChange={handleFilterChange}
                />
                All
            </label>
            <label>
                <input 
                    type="radio" 
                    name="filter" 
                    value="movie" 
                    checked={filter === 'movie'}
                    onChange={handleFilterChange}
                />
                Movies
            </label>
            <label>
                <input 
                    type="radio" 
                    name="filter" 
                    value="tv" 
                    checked={filter === 'tv'}
                    onChange={handleFilterChange}
                />
                Series
            </label>
        </div>
    );
}
