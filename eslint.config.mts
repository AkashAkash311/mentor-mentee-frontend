import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "prettier/prettier": [
        "error",
        {
          "singleQuote": false,
          "semi": true,
          "trailingComma": "none",
          "tabWidth": 4,
          "useTabs": false,
          "printWidth": 140,
          "bracketSpacing": true,
          "arrowParens": "always",
          "endOfLine": "auto"
        }
      ],
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
