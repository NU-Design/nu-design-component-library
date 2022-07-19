module.exports = {
  tabWidth: 2, // for Airbnb style
  singleQuote: true, // for Airbnb style
  endOfLine: 'auto', // keep EOL as-is
  trailingComma: 'all', // for Airbnb style
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
