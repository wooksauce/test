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
    extensions: ['.js', '.jsx'],
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
  test: /\.(css)$/,
  loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
});

module.exports = webpackConfig;
