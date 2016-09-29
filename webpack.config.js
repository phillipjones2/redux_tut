const path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/ClientApp.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // resolve: {
  //   extensions: ['', '.js', '.jsx', '.json']
  // },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node-modules/
      }
    ],
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|ttf)$/i,
        loader: 'file-loader'
      }
    ]
  },
  'watch': true
}
