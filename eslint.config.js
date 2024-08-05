import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser"
import globals from "globals"

import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"

import { FlatCompat } from "@eslint/eslintrc"
const compat = new FlatCompat()

export default [
    js.configs.recommended,
    ...compat.config(reactHooks.configs.recommended),
    ...compat.extends("plugin:@typescript-eslint/recommended"),

    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: {
            "react-refresh": reactRefresh,
        },
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "error",
            "no-undef": "error",
            "react-refresh/only-export-components": [
                "error",
                { allowConstantExport: true },
            ]
        },
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    }
]
