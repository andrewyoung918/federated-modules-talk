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

  output: {
    publicPath: 'http://obscure-funicular-7wx6jpxvw6cw5vp-3006.app.github.dev:3006/count/',
    path: '/workspaces/federated-modules-talk/dist/count',
  },


  devServer: {
    port: 3005, // you can change the port
    historyApiFallback: true,
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
      name: 'count',
      filename: 'remoteEntry.js',
      library: { type: 'var', name: 'count' },
      exposes: {
        './Counter': './src/Counter',
      },
      remotes: {
        chirper: `chirper@http://obscure-funicular-7wx6jpxvw6cw5vp-3006.app.github.dev:3006/count/remoteEntry.js`,
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true
        },
        'react-dom': {
          singleton: true,
          eager: true
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
