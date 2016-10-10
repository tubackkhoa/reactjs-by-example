const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const BASENAME = process.env.APP_BASENAME;
const fileMap = {
  'chapter6-iso' : '/src/www/scripts/client.js'
};
const scriptFile = fileMap[BASENAME] || '/src/app/index.js';

const config = {
  // Entry points to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',    
    path.join(__dirname, '/' + BASENAME + scriptFile)    
  ],
  // Server Configuration options
  devServer: {
    contentBase: BASENAME + '/src/www', // Relative directory for base of server
    devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  devtool: 'eval',
  output: {
    path: buildPath, // Path of output file
    // build all javascript files as app.js
    publicPath: '/static/',
    filename: 'app.js',
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.IgnorePlugin(/ReactContext|react\/addons/),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $:      "jquery",
      jQuery: "jquery",
      // "React": "react"
    }),

    // Moves files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, BASENAME + '/src')),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [      
      {
        // React-hot loader and
        test: /\.jsx?$/, // All .js files
        // react-hot is like browser sync and babel loads jsx and es6-7
        loaders: ['react-hot', 'babel', 'babel-loader'], 
        exclude: [nodeModulesPath],
        include: path.join(__dirname, BASENAME + '/src')
      },
      { test: /\.css$/, loader: "style-loader!css-loader"},
      { test: /\.woff(\d+)?$/, loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file?prefix=font/' },
      { test: /\.eot$/, loader: 'file?prefix=font/' },
      { test: /\.svg$/, loader: 'file?prefix=font/' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
    ],
  },

  // externals: {    
  //   'react': 'React',
  //   // important!!, so we can import React from 'react/addons';
  //   'react/addons': true, 
  //   'react/lib/ExecutionEnvironment': true,
  //   'react/lib/ReactContext': true
  // }
};

module.exports = config;
