module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@react-native',
    'prettier',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'prettier/prettier': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/extensions': 'off',
  },
  plugins: ['react-hooks', 'prettier'],
};
