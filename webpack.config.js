const path = require('path');

const webpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './src/static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [],
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
  },
  devtool: 'inline-source-map',
};

webpackConfig.module.loaders.push({
  test: /\.js$|\.jsx$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: ['es2015', 'react'],
    plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
  },
});

webpackConfig.module.loaders.push({
  test: /\.(scss|css)$/,
  loader: 'style-loader!css-loader?modules&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded&sourceMap'
  ,
  // loader: 'style-loader!css-loader!resolve-url-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
});

webpackConfig.module.loaders.push({
  test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
  loader: 'file-loader',
  query: {
    name: '[hash:8].[ext]',
  },
})

//   test: /\.(eot|svg|ttf|woff|woff2)$/,
//   loader: 'file?name=./src/fonts/[name].[ext]'
//
module.exports = webpackConfig;
