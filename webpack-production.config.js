const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const BASENAME = process.env.APP_BASENAME;

const config = {
  entry: [path.join(__dirname, '/' + BASENAME + '/src/app/index.js')],
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: buildPath, // Path of output file
    publicPath: '/',
    filename: 'static/app.js', // Name of output file
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // suppresses warnings, usually from module minification
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.ProvidePlugin({
      $:      "jquery",
      jQuery: "jquery"      
    }),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Transfer Files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, BASENAME + '/src')),
  ],
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
};

module.exports = config;
