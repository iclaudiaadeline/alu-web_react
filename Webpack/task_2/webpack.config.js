```js
const path = require('path');

module.exports = {
  mode: 'production',

  entry: './js/dashboard_main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
            },
          },
        ],
      },
    ],
  },

  performance: {
    hints: false,
  },
};
```
