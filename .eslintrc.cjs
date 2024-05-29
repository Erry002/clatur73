module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // 'eslint:recommended',  questa riga la commento perchè mi segna come errore tutto quello che importo ma non uso
    // 'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    // 'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
