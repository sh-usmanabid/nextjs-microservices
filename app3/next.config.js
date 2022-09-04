const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");

module.exports = {
  future: { webpack5: true },
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack: (config, options) => {
    const mfConf = {
      name: "app3",
      library: {
        type: config.output.libraryTarget,
        name: "app3",
      },
      remotes: {
        app1: "app1",
        app2: "app2", 
      },
      exposes: {
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};