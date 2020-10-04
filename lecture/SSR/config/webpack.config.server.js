const paths = require("./paths");
// * 가끔 자바스크립트 내부에서 파일에 대한 경로가 필요하거나 CSS Module 처럼 로컬 className을 참조할 수 있다.
// * 해당 파일을 로더에서 별도로 설정하여 처리하지만 따로 결과물에 포함되지 않도록 구현할 수 있다.
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent"); // * CSS Module의 고유 className을 만들 때 필요한 옵션
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const getClientEnvironment = require("./env");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
  mode: "production", // * 프로덕션 모드로 설정하여 최적화 옵션을 활성화
  entry: paths.ssrIndexJs, // * 엔트리 경로
  target: "node", // * node 환경에서 실행될 것이라는 점을 명시
  output: {
    path: paths.ssrBuild, // * 빌드 경로
    filename: "server.js", // * 파일 이름
    chunkFilename: "js/[name].chunk.js", // * 청크 파일이름
    publicPath: paths.publicUrlOrPath, // * 정적 파일이 제공될 경로
  },
  module: {
    rules: [
      {
        oneOf: [
          // * 자바스크팁트를 위한 처리
          // * 기존 webpack.config.js를 참고하여 작성
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve("babel-loader"),
            options: {
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              plugins: [
                [
                  require.resolve("babel-plugin-named-asset-import"),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: "@svgr/webpack?-svgo![path]",
                      },
                    },
                  },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false,
            },
          },

          // * CSS 를 위한 처리
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            //  exportOnlyLocals: true 옵션을 설정해야 실제 css 파일을 생성하지 않습니다.
            loader: require.resolve("css-loader"),
            options: {
              onlyLocals: true,
            },
          },
          // * CSS Module 을 위한 처리
          {
            test: cssModuleRegex,
            loader: require.resolve("css-loader"),
            options: {
              modules: true,
              onlyLocals: true,
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },
          // * Sass 를 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  onlyLocals: true,
                },
              },
              require.resolve("sass-loader"),
            ],
          },
          // * Sass + CSS Module 을 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  modules: true,
                  onlyLocals: true,
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              },
              require.resolve("sass-loader"),
            ],
          },
          // * url-loader 를 위한 설정
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
              emitFile: false, // * 파일을 따로 저장하지 않는 옵션
              limit: 10000, // * 원래는 9.76kb가 넘어가면 파일로 저장하는데
              // * emitFile 값이 false일 때는 경로만 준비하고 파일은 저장하지 않는다.
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
          // * 위에서 설정된 확장자즐 제외한 파일들은 file-loader를 사용한다.
          {
            loader: require.resolve("file-loader"),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              emitFile: false, // * 파일을 따로 저장하지 않는 옵션
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"], // * node_modules 내부의 라이브러리를 불러올 수 있게 한다.
  },
  // * 브라우저에서 사용할 때는 결과물 파일에 리액트 라이브러리와 우리의 애플리케이션에 관한 코드가 공존해야 한다.
  // * 하지만, 서버에서는 굳이 결과물 파일 안에 리액트 라이브러리가 들어 있지 않아도 된다.
  // * node_modules를 통해 바로 불러와서 사용할 수 있기 때문이다.
  // * 따라서 서버를 위해 번들링할 때는 node_modueles에서 불러오는 것을 제외하고 번들링 하는 것이 좋다.
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin(env.stringified), // * 환경변수를 주입한다.
    // * 환경변수를 준비하면 프로젝트 내에서 process.env.NODE_ENV 값을 참조하여 현재 개발환경인지 구별할 수 있다.
  ],
};
