const webpack                  = require('webpack');
const path                     = require('path');
const buildPath                = path.resolve(__dirname, 'build');
const nodeModulesPath          = path.resolve(__dirname, 'node_modules');
// const TransferWebpackPlugin = require('transfer-webpack-plugin');
var CopyWebpackPlugin          = require('copy-webpack-plugin');
const ExtractTextPlugin        = require("extract-text-webpack-plugin");
const BASENAME                 = process.env.APP_BASENAME;
const publicPath               = BASENAME + '/src/www';
const fs                       = require('fs');

const config = {
  entry: [path.join(__dirname, '/' + BASENAME + '/src/app/index.js')],
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: buildPath, // Path of output file
    publicPath: '/',
    filename: 'app.[chunkhash].js', // Name of output file
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new ExtractTextPlugin('main.[chunkhash].css', {
        allChunks: true
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
    // Transfer Files, in html file we should replace script and link main.css
    // with hash file follow to flush cached at client
    // new TransferWebpackPlugin([
    //   {from: 'www'},
    // ], path.resolve(__dirname, BASENAME + '/src'))
    new CopyWebpackPlugin([            
      { from: publicPath }
    ],{
        // Doesn't copy css which is watched by css-loader   
        // we should also ignore other extensions watched by loader 
        // alternative for watch => loader: "raw-loader" then require the file
        ignore: ['*.css','*.pug']
    }),

    // this is custom resolve for assets, 'cos we use pug to generate this'
    function() {
        this.plugin("done", function(statsData) {
            var stats = statsData.toJson();
            if (!stats.errors.length) {
                var htmlFileName = "index.html";
                var html = fs.readFileSync(path.join(__dirname, publicPath + '/' + htmlFileName), "utf8");                
                // console.log(stats.assetsByChunkName);
                // by default the first chunk is app.js and the second is main.css, following are map files
                var htmlOutput = html.replace(
                  /<script\s+src=(["'])(.+?)app\.js\1/i,
                  "<script src=$1" + stats.assetsByChunkName.main[0] + "$1");

                htmlOutput = htmlOutput.replace(
                  /<link\s+(?:.*?)href=(["'])(.+?)main\.css\1/i,
                  "<link rel=\"stylesheet\" type=\"text/css\" href=$1" + stats.assetsByChunkName.main[1] + "$1");                

                fs.writeFileSync(
                    path.join(buildPath, htmlFileName),
                    htmlOutput);
            }
        });
    }
    
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
      // { test: /\.css$/, loader: "style-loader!css-loader"},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
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
