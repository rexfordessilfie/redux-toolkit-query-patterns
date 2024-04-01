import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const baseQuery = fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" });

const query = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  await sleep(3000);
  return await baseQuery(args, api, extraOptions);
};

export const pokemonApi = createApi({
  baseQuery: query,
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),

    getPokemonByNameT: builder.query({
      query: (name: string) => `pokemon/${name}`,
      transformResponse: (response: unknown) => {
        console.log(response);
        (response as { fakeInsert: string }).fakeInsert = "fakeInsert";
        return response;
      },
    }),

    getPokemonByNameP: builder.query({
      query: (name: string) => `pokemon/${name}`,
      onQueryStarted: () => {
        console.log("running query");
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = pokemonApi;
