// Ziel für 27.11.2019:

// - Create a custom Angular Builder for configuring TailwindCSS
// -- preconfigured webpack builder ?
// -- basically i have to ship the webpack extension in my lib


// - Create a custom Angular Builder for code support
// - VSCodeExtension for Highlighting HTML in a Angular Component that does not have a template file
// - Beispiel Applikation mit Tailwind CSS
// - Writing Modals with Angular CDK

// ng serve --extra-webpack-config webpack.partial.js -o

// hier Konfiguration laden die wir verwenden möchten. z.B die Tags auf die wir anspringen

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