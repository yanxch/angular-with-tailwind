
// ng serve --extra-webpack-config webpack.partial.js -o


const webpack = require('webpack');
const path = require('path');

const p = path.join(__dirname, 'myloader.js');
console.log(p);

module.exports = {
    resolveLoader: {
      alias: {
        'my-loader': p
      }
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'my-loader'
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