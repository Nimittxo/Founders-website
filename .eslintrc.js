module.exports = {
  extends: ['next', 'next/core-web-vitals', "next/typescript", 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Add your custom ESLint rules here
  },
};