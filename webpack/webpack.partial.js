
// ng serve --extra-webpack-config webpack.partial.js -o


const webpack = require('webpack');
const path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: path.resolve(__dirname, '../dist/out-tsc/loader/loader')
            },
            {
              loader: 'raw-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require("postcss-import"),
                  require('tailwindcss'),
                  require('autoprefixer')
                ]
              }
            }
          ]
        }
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "VERSION": JSON.stringify("4711")
        })
    ]
}