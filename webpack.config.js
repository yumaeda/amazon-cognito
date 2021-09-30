const path = require('path')
const dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
      rules: [
          {
              enforce: 'pre',
              test: /\.tsx?$/,
              loader: 'ts-loader',
              exclude: /node_modules/
          }
      ]
  },
  resolve: {
      alias: {},
      extensions: [ '.ts', '.tsx', '.js', '.json' ]
  },
  devServer: {
      hot: true,
      historyApiFallback: true,
      open: true,
      static: {
        directory: __dirname
      },
      compress: true
  },
  plugins: [
    new dotenv()
  ],
  output: {
      path: __dirname,
      filename: 'bundle.js'
  }
}
