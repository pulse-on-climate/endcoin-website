// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    assert: require.resolve('assert/'),
    process: require.resolve('process/browser'),
    buffer: require.resolve('buffer/'),
    stream: require.resolve('stream-browserify'),
    crypto: require.resolve('crypto-browserify'),
    util: require.resolve('util/'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    zlib: require.resolve('browserify-zlib'),
    url: require.resolve('url'),
    // Add other polyfills if needed
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};
