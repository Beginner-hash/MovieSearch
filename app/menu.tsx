import { useQueryState } from "nuqs";
import { useDebounceValue } from "./useDebounceValue";
import { useMovieQuery } from "./useMovieQuery";
import Title from "./title";

export default function Menu() {
  const [query, setQuery] = useQueryState("");
  const debounceQuery = useDebounceValue(query!, 500);
  const { data, error, isLoading } = useMovieQuery(debounceQuery);

  return (
    <div className="flex ">
      {" "}
      <form>
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
      <div className="grow">
        {error ? <p>Error : {error.message}</p> : null}
        {isLoading ? <p>Loading ...</p> : null}
        {data?.Search?.length > 0
          ? data?.Search.map((movie: { imdbID: string; Title: string }) => (
              <p key={movie.imdbID}>{movie.Title}</p>
            ))
          : null}
      </div>
    </div>
  );
}
