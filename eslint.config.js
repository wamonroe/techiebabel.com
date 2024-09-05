import eslintJs from "@eslint/js";
import eslintPretter from "eslint-plugin-prettier";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import eslintTypescript from "typescript-eslint";
import globals from "globals";

export default eslintTypescript.config(
  { ignores: ["dist"] },
  {
    extends: [
      eslintJs.configs.recommended,
      ...eslintTypescript.configs.recommended,
      ...eslintReact.configs.recommended,
      ...eslintPretter.configs,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
    },
    rules: {
      ...eslintReactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
