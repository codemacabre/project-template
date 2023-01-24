module.exports = {
  extends: [
    'standard'
  ],
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended']
    }
  ],
  plugins: [
    '@html-eslint',
    'html'
  ],
  rules: {
    '@html-eslint/indent': ['error', 2]
  }
}
