module.exports = {
    root: true,
    extends: ["@react-native", "standard-with-typescript", "eslint-config-prettier", "plugin:react-hooks/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "react-native", "react-hooks"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        project: "./tsconfig.json"
    },
    env: {
        "react-native/react-native": true
    },

    rules: {
        "prettier/prettier": 0,
        "react-native/no-inline-styles": 0,
        "@typescript-eslint/no-confusing-void-expression": 0,
        "@typescript-eslint/consistent-type-imports": 0,
        "@typescript-eslint/strict-boolean-expressions": 0,
        "@typescript-eslint/no-floating-promises": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/consistent-type-definitions": 0,
        "@typescript-eslint/no-namespace": 0,
        "@typescript-eslint/array-type": 0,
        "@typescript-eslint/prefer-nullish-coalescing": 0,
        "@typescript-eslint/restrict-plus-operands": 0,
        "@typescript-eslint/no-shadow": 0,
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                checksVoidReturn: false
            }
        ],
        "import/order": [
            "warn",
            {
                groups: ["builtin", "external", "internal", "type"],
                pathGroups: [
                    {
                        pattern: "react+(|-native)",
                        group: "builtin",
                        position: "before"
                    },
                    {
                        pattern: "@**",
                        group: "external",
                        position: "after"
                    }
                ],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                },
                pathGroupsExcludedImportTypes: ["builtin"]
            }
        ],
        "no-shadow": "off",
        "react/no-unstable-nested-components": ["error", { allowAsProps: true }]
    }
};
