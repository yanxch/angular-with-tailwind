
// ng serve --extra-webpack-config webpack.partial.js -o


const webpack = require('webpack');

module.exports = {
    module: {
      rules: [
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