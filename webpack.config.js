const glob = require("glob");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// Collect top level js and scss entrypoints
const files = glob.sync(path.join("src/assets/{js,scss}/*.{js,scss}"));
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
    path: path.resolve("dist/assets"),
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
  watchOptions: {
    poll: 1000,
  },
  optimization: {
    removeEmptyChunks: true,
  },
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
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "../bundle-report.html",
      openAnalyzer: false,
    }),
  ],
};

module.exports = webpackConfig;
