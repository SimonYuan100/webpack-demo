var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    index: './main.js'
  },
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {presets: ['es2015']} 
      }
    ]
  }
}

