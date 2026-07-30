const path = require('path');
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "themeprovider-storybook/register",
  ],
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-router/dom$": path.resolve(__dirname, "../node_modules/react-router/dist/development/dom-export.js"),
      "react-router$": path.resolve(__dirname, "../node_modules/react-router/dist/development/index.js"),
      "react-router-dom$": path.resolve(__dirname, "../node_modules/react-router-dom/dist/index.js"),
    };
    return config;
  },
};
