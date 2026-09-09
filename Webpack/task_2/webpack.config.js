const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.sharpMinify,
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
};