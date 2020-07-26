const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'word-relay-dev',
  mode: 'development', // * 실서비스: production
  devtool: 'eval',
  resolve: { // * 확장자 관리
    extensions: ['.js', '.jsx'],
  },
  entry: { // * 입력
    app: './client',
  },
  module: { // * 모듈 관리
    rules: [{
      test: /\.jsx?$/, // * js, jsx 파일 rule 관리
      loader: 'babel-loader', // * (babel rule) babel - webpack 연결
      options: {
        presets: [
          ['@babel/preset-env', { // * 버전 관리
            targets: {browsers: ['last 2 chrome versions']}, // * 브라우저 관리
            debug: true, // * 개발용
          }],
          '@babel/preset-react', // * jsx 지원
        ],
        plugins: ['@babel/plugin-proposal-class-properties','react-hot-loader/babel'],
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [ // * 확장 프로그램
    new webpack.LoaderOptionsPlugin({debug : true}), // * 모든 설정에 debug는 true로 설정
  ], 
  output: { // * 출력
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist'
  }
}