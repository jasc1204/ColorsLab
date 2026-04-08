module.exports = [
  {
    files: ['js/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        document: 'readonly',
        window: 'readonly',
        XMLHttpRequest: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        define: 'readonly'
      }
    },
    rules: {
      'no-dupe-keys': 'error',
      'no-undef': 'error'
    }
  }
]