var webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  entry: './front/Index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/,
      }
    ]
  }
};