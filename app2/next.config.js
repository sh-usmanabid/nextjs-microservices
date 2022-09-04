const { withModuleFederation } = require("@module-federation/nextjs-mf");

module.exports = {
  future: { webpack5: true },
  webpack: (config, options) => {
    const mfConf = {
      mergeRuntime: true,
      name: "app2",
      library: {
        type: config.output.libraryTarget,
        name: "app2",
      },
      filename: "static/runtime/app2RemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./microService2": "./components/microService2",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },

  webpackDevMiddleware: (config) => {
    return config;
  },
};