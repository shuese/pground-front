/* eslint-disable @typescript-eslint/no-unsafe-call */
import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import WebpackPwaManifest from 'webpack-pwa-manifest'
import WorkboxPlugin from 'workbox-webpack-plugin'
import Dotenv from 'dotenv-webpack'

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/index',
  node: {
    fs: "empty"
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.[hash].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
      }),
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff2|png|jpg|jpeg|svg|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: "assets/[hash].[ext]"
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: "./src/assets/favicon.ico",
    }),
    new WebpackPwaManifest({
      name: "PG Frontend",
      short_name: "PGF",
      description: "Плацдарм для обучения и экспериментов.",
      background_color: "#ffffff",
      inject: true,
      fingerprints: true,
      ios: true,
      crossorigin: undefined,
      icons: [
        {
          src: path.resolve("./src/assets/logo512.png"),
          sizes: [96, 128, 192, 256, 384, 512, 1024]
        }
      ]
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      offlineGoogleAnalytics: true,
      skipWaiting: true,
      navigateFallback: "index.html",
      navigateFallbackDenylist: [
        // Exclude URLs starting with /_, as they're likely an API call
        new RegExp('^/_'),
        // Exclude any URLs whose last part seems to be a file extension
        // as they're likely a resource and not a SPA route.
        // URLs containing a "?" character won't be blacklisted as they're likely
        // a route with query params (e.g. auth callbacks).
        new RegExp('/[^/?]+\\.[^/]+$')
      ]
    }),
    new Dotenv(),
    new CleanWebpackPlugin(),
  ],
}