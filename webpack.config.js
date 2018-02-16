const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './react-client/src'),
  output: {
    path: path.resolve(__dirname, './react-client/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}