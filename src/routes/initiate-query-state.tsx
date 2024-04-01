import { useDispatch } from "react-redux";
import { Layout } from "../components/layout";
import { pokemonApi } from "../api/pokemon";
import { useState } from "react";
import { PokeInfoInitiateQueryState } from "../components/poke-info-initiate-query-state";

function InitiateQueryState() {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);

  return (
    <Layout>
      {hide ? null : <PokeInfoInitiateQueryState name="bulbasaur" />}

      <div className="flex flex-row gap-2">
        <button onClick={() => dispatch(pokemonApi.util.resetApiState())}>
          Reset
        </button>

        <button
          onClick={() => {
            setHide((prev) => !prev);
          }}
        >
          {hide ? "Show" : "Hide"}
        </button>
      </div>
    </Layout>
  );
}

export default InitiateQueryState;
