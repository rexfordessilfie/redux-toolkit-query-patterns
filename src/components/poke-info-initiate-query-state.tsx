import { useEffect } from "react";
import { pokemonApi } from "../api/pokemon";
import { useAppDispatch } from "../store";

type PokeProps = {
  name: string;
};
export function PokeInfoInitiateQueryState({ name }: PokeProps) {
  const {
    data,
    error,
    isLoading,
    isFetching,
    isUninitialized,
    isSuccess,
    isError,
  } = pokemonApi.endpoints.getPokemonByName.useQueryState(name);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(pokemonApi.endpoints.getPokemonByName.initiate(name));
  }, [dispatch, name]);

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
