const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    home: path.resolve(__dirname, './home.js'), 
    gifts: path.resolve(__dirname, './gifts.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', 
    clean: true,
    //assetModuleFilename: 'assets/images/[name][ext]',
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 2000,
    open: true,
    hot: true,
    liveReload: true,
    client: {
      overlay: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'home.html'),
      filename: 'home.html',
      chunks: ['home'], 
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'gifts.html'),
      filename: 'gifts.html',
      chunks: ['gifts'], 
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', 
    }),
    /*palgin to copy resurses*/
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }, 
      ],
    }),

  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', 
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/inline', 
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'], 
  },
};