import { useEffect } from "react";
import { pokemonApi } from "../api/pokemon";

type PokeProps = {
  name: string;
};
export function PokeInfoLazy({ name }: PokeProps) {
  const [
    getPokemon,
    { data, error, isLoading, isFetching, isUninitialized, isSuccess, isError },
  ] = pokemonApi.endpoints.getPokemonByName.useLazyQuery();

  useEffect(() => {
    getPokemon(name);
  }, [getPokemon, name]);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      <br />
      <br />
      <p>isLoading: {String(isLoading)}</p>
      <p>isFetching: {String(isFetching)}</p>
      <p>isUninitialized: {String(isUninitialized)}</p>
      <p>isSuccess: {String(isSuccess)}</p>
      <p>isError: {String(isError)}</p>
      <br />
    </div>
  );
}
