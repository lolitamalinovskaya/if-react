const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use:
                    [
                      'style-loader',
                      'css-loader',
                    ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.svg$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.txt$/,
        use:
          'raw-loader',
      },
      {
        test: /\.(woff|ttf|eot)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        use: [{
          loader: 'url-loader?limit=100000',
          options: {
            outputPath: 'fonts/',
            name: '[name].[ext]',
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
  ],
};
