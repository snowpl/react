const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'src', 'app-client.js')
    ],
    output: {
      path: path.join(__dirname, 'src', 'static', 'js'),
      filename: 'bundle.js'
    },
    module:{
      loaders: [{
        rest: path.join(__dirname, 'src'),
        loader: ['babel-loader',
                'react-hot-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      },{
        test: /\.scss$/,
        /*loader: ['style', 'css', 'sass']*/
        loader: ExtractTextPlugin.extract('css!sass')
      }]
    },
    devServer:{
      contentBase: './src',
      hot: true
    },
    plugins: [
      new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
   }),
   new ExtractTextPlugin('src/styles/main.css', {
     allChunks: true
   }),
   new webpack.optimize.DedupePlugin(),
   new webpack.optimize.UglifyJsPlugin({
     compress: { warnings: false },
     mangle: true,
     sourcemap: false,
     beautify: false,
     dead_code: true
   })
 ]
};
