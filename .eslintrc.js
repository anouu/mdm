module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-extra-boolean-cast': 0,
    camelcase: 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 0 }],
    'vue/no-v-html': 0,
  },
  ignorePatterns: ['jsconfig.json'],
}
