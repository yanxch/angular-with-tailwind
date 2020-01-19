const path = require('path');
const AngularCompilerPlugin = require('@ngtools/webpack/src');

module.exports = (config) => {
  config.module.rules.push(
    {
      test: /\.html$/,
      use: [
        {
          loader: path.resolve(__dirname, './escapeBraces')
        },
        {
          loader: 'raw-loader'
        }
      ]
    }
  );

  config.module.rules.push(
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
  );

  var acp = findAngularCompilerPlugin(config.plugins);
  removeAngularCompilerPlugin(config.plugins);

  var acp_new = new AngularCompilerPlugin.AngularCompilerPlugin(
    createAngularCompilerPluginOptions(acp)
  );

  addAngularCompilerPlugin(config.plugins, acp_new);

  return config;
}

function findAngularCompilerPlugin(plugins) {
  return plugins.find(plugin => plugin instanceof AngularCompilerPlugin.AngularCompilerPlugin);
}

function removeAngularCompilerPlugin(plugins) {
  var acpIndex = plugins.findIndex(plugin => plugin instanceof AngularCompilerPlugin.AngularCompilerPlugin)
  plugins.splice(acpIndex);
}

function addAngularCompilerPlugin(plugins, acp) {
  plugins.push(acp);
}

function createAngularCompilerPluginOptions(acp) {
  return {
    ...acp._options,
    directTemplateLoading: false
  };
}