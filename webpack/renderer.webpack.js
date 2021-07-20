module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'css'],
    fallback: { crypto: false },
  },
  module: {
    rules: require('./rules.webpack'),
  },
};
