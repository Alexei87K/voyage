const autoprefixer = require('autoprefixer');
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin({})
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 4200
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.css', '.less']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      { 
        test: /\.(js|ts)$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }
    ],
  }
}