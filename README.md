# Redux-Toolkit Query Patterns

![Demo](./public/demo.png)

A repository for playing around with different usage patterns in Redux-Toolkit Query to discover best approaches for managing state.

It is built around common api's such as [PokeApi](https://pokeapi.co/).

# Patterns

1. `useQuery`
2. `useLazyQuery` + Trigger in `useEffect`
3. `useQueryState` + Initiate in `useEffect`
4. `useSelector` + Initiate in `useEffect` (Coming soon...)
5. `useQuery` + `skip`/`skipToken` (Coming soon...)
6. `transformResponse` (Coming soon...)
7. Pagination (Coming soon...)
8. Infinite Scroll (Coming soon...)

# Development

This project was bootstrapped with Vite and provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
