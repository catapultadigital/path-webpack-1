const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
      presets: [['@babel/preset-react', {
        runtime: 'automatic'
      }]]
    }
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  }
];

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html' 
    })
  ],
  module: { rules },
  devServer: {
    open: true,
    port: 8081,
  }
}