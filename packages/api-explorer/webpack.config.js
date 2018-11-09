module.exports = {
  entry: {
    'api-explorer': ['whatwg-fetch', './src/index.jsx'],
    content: './src/block-types/Content.jsx',
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules\/(?!(@readme\/syntax-highlighter|fetch-har))/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: '../../.babelrc',
          },
        },
      },
    ],
  },
  output: {
    filename: './dist/[name].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};
