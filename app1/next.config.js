const { withModuleFederation } = require("@module-federation/nextjs-mf");

module.exports = {
  future: { webpack5: true },
  webpack: (config, options) => {
    const mfConf = {
      mergeRuntime: true,
      name: "app1",
      library: {
        type: config.output.libraryTarget,
        name: "app1",
      },
      filename: "static/runtime/app1RemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./microService1": "./components/microService1",
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