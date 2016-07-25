const join = require('path').join

module.exports = {
  entry: './src/artisan.js',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'artisan.js'
  },
  module: {
    loaders: [
      { test: /.js?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    alias: {
      string: join(__dirname, 'src/string'),
      lang: join(__dirname, 'src/lang'),
      number: join(__dirname, 'src/number')
    }
  }
}
