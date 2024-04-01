import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./api/pokemon";

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const store = setupStore();
