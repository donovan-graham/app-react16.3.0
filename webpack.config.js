const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

/*
* Fix for loading externs: https://gist.github.com/sunzhuoshi/86f2d5a7f3330e227762b0909372ca60
* Open github issue: https://github.com/google/closure-compiler-js/issues/66
*
* List of externs: https://github.com/google/closure-compiler/tree/master/externs/browser
*/
const externsGCCSrc = fs.readFileSync(path.resolve(__dirname, 'externs.gcc.js'), 'utf8');

const developmentPlugins = [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
];

const productionPlugins = [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new ClosureCompiler({
    options: {
      languageIn: 'ECMASCRIPT6',
      languageOut: 'ECMASCRIPT5',
      compilationLevel: 'SIMPLE',
      warningLevel: 'VERBOSE',
      externs: [{ src: externsGCCSrc }]
    }
  })
];

const config = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    host: '0.0.0.0',
    disableHostCheck: true,
    clientLogLevel: 'warning',
    compress: true,
    hot: true
  },
  plugins: process.env.NODE_ENV === 'production' ? productionPlugins : developmentPlugins,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = config;
