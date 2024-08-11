import SearchPageClient from "@/components/Search/SearchPageClient";

const API_KEY = process.env.TMDB_API_KEY;

async function fetchResults(searchTerm, type) {
    const res = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${searchTerm}&language=fr&page=1`);
    const data = await res.json();
    return data.results.map(item => ({ ...item, media_type: type }));
}

export default async function SearchPage({ params }) {
    const searchTerm = params.searchTerm;

    // Récupération des résultats pour les films et les séries
    const movieResults = fetchResults(searchTerm, 'movie');
    const tvResults = fetchResults(searchTerm, 'tv');

    // Fusion des résultats et tri par popularité
    const combinedResults = [...(await movieResults), ...(await tvResults)]
        .sort((a, b) => b.popularity - a.popularity);

    return <SearchPageClient initialResults={combinedResults} />;
}
