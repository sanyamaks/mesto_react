module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb",],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
