import { AngularCompilerPlugin, AngularCompilerPluginOptions } from '@ngtools/webpack';
import * as ts from 'typescript';
import * as webpack from 'webpack';

export const JIT_MODE = '_JitMode';


export default {
  config(config: webpack.Configuration) {

    console.log('BUIIIILDER');

    const angularCompilerPlugin = findAngularCompilerPlugin(config) as AngularCompilerPlugin;

    if (!angularCompilerPlugin) {
      throw new Error('Could not inject TypeScript Transformer: Webpack AngularCompilerPlugin not found');
    }

    const jitMode = isJitMode(angularCompilerPlugin);

    // Turn off direct template loading. By default this option is `true`, causing
    // the plugin to load component templates (HTML) directly from the filesystem.
    // This is more efficient than using the raw-loader. However, if we want to add
    // a custom html-loader we have to turn off direct template loading. To do so
    // we have to remove the old compiler plugin and create a new instance with
    // updated options.

    // We also don't run the TypeChecker in a forked process when AOT is enabled.
    // Because of template and class transformations this results in type errors.
    // TODO: This needs a bit further investigation.

    const options: AngularCompilerPluginOptions = {
      ...angularCompilerPlugin.options,
      directTemplateLoading: false,
      forkTypeChecker: jitMode
    };

    config.plugins = removeCompilerPlugin(config.plugins, angularCompilerPlugin);

    const newCompilerPlugin = new AngularCompilerPlugin(options);

    if (jitMode) {
      // Warning: this method is *not* pure and modifies the array of transformers directly
      // addTransformers(newCompilerPlugin, jitTransformers);
    }

    config.plugins.push(newCompilerPlugin);

    return config;
  }
};

function findAngularCompilerPlugin(config: webpack.Configuration) {
  return config.plugins && config.plugins.find(isAngularCompilerPlugin);
}

function isAngularCompilerPlugin(plugin: webpack.Plugin) {
  return plugin instanceof AngularCompilerPlugin;
}

function addTransformers(acp: any, transformers: Array<ts.TransformerFactory<ts.SourceFile>>): void {
  // The AngularCompilerPlugin has no public API to add transformers, use private API _transformers instead
  acp._transformers = [...transformers, ...acp._transformers];
}

function removeCompilerPlugin(plugins: webpack.Plugin[], acp: webpack.Plugin) {
  return plugins.filter(plugin => plugin !== acp);
}

function isJitMode(plugin: AngularCompilerPlugin) {
  return plugin[JIT_MODE];
}
