
export default function MoviesResult({results}) {
  return (
    <div>
        {
        results.map((result) => (
            <div key={result.id}>
                {result.original_title || result.original_name || "Titre non disponible"}
            </div>
        ))
        }
    </div>
  )
}
