module.exports = {
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    settings: {
        react: {
            version: "999.999.999",
        },
    },
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        quotes: ["error", "single"],
        semi: ["error", "always"],
        "react/react-in-jsx-scope": "off",
    },
};
