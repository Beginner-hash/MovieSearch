import useSWR from "swr";

export const useMovieQuery = (search: string) => {
  return useSWR(`movie-query-${search}`, async () => {
    if (search.length < 3) {
      throw new Error("Please enter at least 3 characters");
    }

    const apiKey = process.env.OMDB_API_KEY;
    const customURL = new URL("http://www.omdbapi.com");
    customURL.searchParams.set("s", search);
    customURL.searchParams.set("apiKey", apiKey ?? "");

    const jsonResponse = await fetch(customURL.toString()).then((res) =>
      res.json()
    );
    return jsonResponse;
  });
};
