import React from "react";
import { useGetPokemonQuery } from "../../../common/apiSlice";
import PropTypes from "prop-types";
import CardTemplate from "./CardTemplate/CardTemplate";

export default function PokemonCard({ pokemonLink, callback }) {
  const { data, error, isLoading } = useGetPokemonQuery(pokemonLink);
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <CardTemplate callback={callback} data={data} />
      ) : null}
    </>
  );
}

PokemonCard.propTypes = {
  pokemonLink: PropTypes.string,
  callback: PropTypes.func
};
