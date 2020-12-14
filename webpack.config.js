const glob = require("glob");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// Workaround for https://github.com/webpack/webpack/issues/7300 whereby
// webpack outputs empty chunks when used with the css extract plugin
// See exact solution at https://github.com/webpack/webpack/issues/7300#issuecomment-413959996
// Without this workaround, the css extract solution leaves behind empty JavaScript files
// Once this ticket has been resolved this workaround can be removed
class MiniCssExtractPluginCleanUp {
  constructor(deleteWhere = /css.*\.js(\.map)?$/) {
    this.shouldDelete = new RegExp(deleteWhere);
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "MiniCssExtractPluginCleanup",
      (compilation, callback) => {
        Object.keys(compilation.assets).forEach((asset) => {
          if (this.shouldDelete.test(asset)) {
            delete compilation.assets[asset];
          }
        });
        callback();
      }
    );
  }
}

// Collect top level js and scss entrypoints
const files = glob.sync(path.join("assets/{js,scss}/*.{js,scss}"));
const entrypoints = files.reduce((accumulator, value) => {
  const assetExtension = path.extname(value);
  const extMap = {
    ".scss": "css",
    ".js": "js",
  };

  accumulator[
    path.join(extMap[assetExtension], path.basename(value, assetExtension))
  ] = path.resolve(value);
  return accumulator;
}, {});

if (process.env.NODE_ENV !== "production") {
  console.log("Running in development mode");
}

// Construct the webpack config
const webpackConfig = {
  mode: process.env.NODE_ENV,
  bail: false,
  devtool: "source-map",
  output: {
    path: path.resolve("dist"),
  },
  resolve: {
    modules: ["node_modules"],
  },
  resolveLoader: {
    modules: ["node_modules"],
  },
  stats: {
    assets: true,
    colors: true,
    entrypoints: false,
    hash: false,
    modules: false,
    version: false,
    performance: false,
  },
  // externals: {
  //   jquery: 'jQuery'
  // },
  entry: entrypoints,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [require("@babel/preset-env").default],
            },
          },
        ],
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
              publicPath: "../fonts/",
              name: "[name].[ext]?[contenthash]",
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              publicPath: "../images/",
              name: "[name].[ext]?[contenthash]",
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        resolve: {
          extensions: [".scss", ".css"],
        },
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new MiniCssExtractPluginCleanUp(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "../../bundle-report.html",
      openAnalyzer: false,
    }),
  ],
};

module.exports = webpackConfig;
