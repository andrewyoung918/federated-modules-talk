const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },


  devServer: {
    port: 3006, // you can change the port
    historyApiFallback: true,
  },
  output: {
    publicPath: 'http://obscure-funicular-7wx6jpxvw6cw5vp-3006.app.github.dev:3006/chirper/',
    path: '/workspaces/federated-modules-talk/dist/chirper',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'chirper',
      library: { type: 'var', name: 'chirper' },

      exposes: {
        './Button': './src/Button',
      },

      remotes: {
        count: `count@http://obscure-funicular-7wx6jpxvw6cw5vp-3006.app.github.dev:3006/remoteEntry.js`,
        chirper: `chirper@http://obscure-funicular-7wx6jpxvw6cw5vp-3006.app.github.dev:3006/remoteEntry.js`,
      },
      filename: 'remoteEntry.js',
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          eager: true,
        },
        '@mui/material': {
          singleton: true,
        },
        '@emotion/react': {
          singleton: true,
        },
        '@emotion/stylee\d': {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
