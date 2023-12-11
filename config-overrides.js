const { override, addLessLoader, addPostcssPlugins } = require('customize-cra');

module.exports = override(
  addLessLoader({
    lessOptions: {
      strictMath: true,
      noIeCompat: true,
    },
  }),
  addPostcssPlugins([require('autoprefixer')]),
  (config, env) => {
    // 修改 output.publicPath
    config.output.publicPath = '/';

    return config;
  }
);