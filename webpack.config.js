const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: path.resolve(__dirname, 'src/javascripts/main.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'javascripts/main.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    }
  },
  stats: {
    children: true
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        },
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     esModule: false,
          //     name: 'images/[name].[ext]'
          //   }
          // }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/main.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname)
    }
  }
}
