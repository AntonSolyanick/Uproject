import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "react/jsx-indent": [2, 4],
      "no-unused-vars": "warn",
      "react/jsx-uses-react": "0",
      "react/react-in-jsx-scope": "0",
    },
  },
  { languageOptions: { globals: globals.browser } },
  {
    plugins: ["i18n"],
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
