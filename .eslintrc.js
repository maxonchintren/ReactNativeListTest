module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  env: {
    node: true
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react/prop-types': 0,
    'default-case': 1,
    'require-await': 2,
    'no-return-await': 2,
    eqeqeq: 2,
    'no-unused-vars': 1,
    'no-undef-init': 2,
    'comma-dangle': 2,
    'no-trailing-spaces': 1,
    'no-var': 2,
    semi: ['error', 'never']
  }
}