const path = require('path');

module.exports = {
  entry: './src/app.tsx',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
  },
};
