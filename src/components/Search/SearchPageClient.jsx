'use client';

import { useState, useEffect } from 'react';
import MoviesResult from "@/components/MoviesSeries/MoviesResult";
import SearchFilter from "@/components/Search/SearchFilter";

export default function SearchPageClient({ initialResults, searchTerm }) {
    const [filter, setFilter] = useState('all');
    const [results, setResults] = useState(initialResults || []);

    useEffect(() => {
        setResults(initialResults);
    }, [initialResults]);

    const filteredResults = results.filter(result => 
        filter === 'all' || result.media_type === filter
    );

    return (
        <div>
            <SearchFilter filter={filter} setFilter={setFilter} />
            
            {filteredResults.length === 0 ? (
                <h1>No results found</h1>
            ) : (
                <MoviesResult results={filteredResults} />
            )}
        </div>
    );
}
