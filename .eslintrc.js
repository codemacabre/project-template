module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}',
        '*.{ts,js}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended']
    }
  ],
  // ignorePatterns: [
  //   '*.html'
  // ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    '@html-eslint',
    'html'
  ],
  rules: {
    '@html-eslint/indent': ['error', 2],
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
