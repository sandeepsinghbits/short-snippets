const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry:{
      home:'./home/home.js',
      about:'./about/about.js'
  },
  output:{
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'library',
          chunks: 'all'
        },
        commons: {
          test: /(common)\/.*\.(js|jsx)$/,
          name: 'common',
          chunks: 'all'
        },
        css: {
          name: 'style',
          test: /(common)\/.*\.(css)$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [
    new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  module: {
    rules: [
      {
        test: /(home|about|common)\/.*\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /(home|about)\/.*\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /(home|about|common)\/.*\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./home/home.html",
      filename:'home.html',
      chunks:['home','library','common','style']

    }),
    new HtmlWebPackPlugin({
      template: "./about/about.html",
      filename:'about.html',
      chunks:['about','library','common','style']

    }),
    new MiniCssExtractPlugin({
      filename: "seller.[contenthash].css",
      chunkFilename:"shared.[contenthash].css"
    })
  ]
};