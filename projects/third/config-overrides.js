const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

// Update the webpack config
module.exports = function override(config, env) {
  // Add module federation plugin
  config.plugins = [
    ...config.plugins,
    new ModuleFederationPlugin({
      name: "thirdApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/bootstrap.tsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
  ];

  // Set public path to auto to make module load properly in container
  config.output.publicPath = "auto";

  return config;
};
