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
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      prettier: eslintPretter,
    },
    rules: {
      ...eslintReactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  }
);
