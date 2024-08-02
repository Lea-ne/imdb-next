import SearchPageClient from "@/components/Search/SearchPageClient";

const API_KEY = process.env.TMDB_API_KEY;

async function fetchResults(searchTerm, type) {
    const res = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${searchTerm}&language=fr&page=1`);
    const data = await res.json();
    return data.results.map(item => ({ ...item, media_type: type }));
}

export default async function SearchPage({ params }) {
    const searchTerm = params.searchTerm;

    const [movieResults, tvResults] = await Promise.all([
        fetchResults(searchTerm, 'movie'),
        fetchResults(searchTerm, 'tv')
    ]);

    const initialResults = [...movieResults, ...tvResults];

    return (
        <SearchPageClient initialResults={initialResults} searchTerm={searchTerm} />
    );
}
