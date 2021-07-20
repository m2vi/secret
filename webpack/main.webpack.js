module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: { crypto: false },
  },

  entry: './electron/index.ts',
  module: {
    rules: require('./rules.webpack'),
  },
};
