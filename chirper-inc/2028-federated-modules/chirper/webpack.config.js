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
    publicPath: 'http://localhost:3006/',
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
        count: `count@http://localhost:3005/moduleEntry.js`,
        chirper: `chirper@http://localhost:3006/moduleEntry.js`,
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
