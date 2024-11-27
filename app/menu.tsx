import { useQueryState } from "nuqs";
import { useDebounceValue } from "./useDebounceValue";
import { useMovieQuery } from "./useMovieQuery";
import Title from "./title";

export default function Menu() {
  const [query, setQuery] = useQueryState("");
  const debounceQuery = useDebounceValue(query!, 500);
  const { data, error, isLoading } = useMovieQuery(debounceQuery);

  return (
    <div className="flex h-svh items-center gap-16 md:flex-row flex-col my-5 overflow-y-hidden">
      {" "}
      <form className="flex flex-col justify-center items-center md:mt-0 mt-20">
        <Title>Wanna search for a movie?</Title>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-fsull max-w-sm block mt-10 w-2/4"
          value={query || ""}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>
      <div className="grow overflow-scroll h-4/5 no-scrollbar grid md:grid-cols-3 sm:grid-cols-2 :grid-cols-1 gap-6 md:mb-0 mb-20">
        {error && data?.Search?.length ? <p>Error : {error.message}</p> : null}
        {isLoading ? <p>Loading ...</p> : null}
        {data?.Search?.length > 0
          ? data?.Search.map(
              (movie: { imdbID: string; Title: string; Poster: string }) => (
                <div key={movie.imdbID}>
                  <img src={movie.Poster} alt={movie.Title} />
                  <p>{movie.Title}</p>
                </div>
              )
            )
          : null}
      </div>
    </div>
  );
}
