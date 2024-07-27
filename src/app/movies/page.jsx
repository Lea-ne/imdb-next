import MovieFilter from "@/components/filterNav/MovieFilter";

export default function Movies() {
  return (
    <div>
      <h1 className="text-2xl font-medium">Movies lists page</h1>
      <p>Ici sera listé les films</p>
      <MovieFilter />
    </div>
  )
}
