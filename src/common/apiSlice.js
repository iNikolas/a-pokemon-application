import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import {createApi} from "@reduxjs/toolkit/dist/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: (fullLink) => fullLink,
    }),
  }),
});

export const { useGetPokemonQuery } = pokemonApi