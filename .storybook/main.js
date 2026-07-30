import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
  ],
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-router/dom$": path.resolve(__dirname, "../node_modules/react-router/dist/development/dom-export.js"),
      "react-router$": path.resolve(__dirname, "../node_modules/react-router/dist/development/index.js"),
      "react-router-dom$": path.resolve(__dirname, "../node_modules/react-router-dom/dist/index.js"),
    };

    // The `@storybook/react-webpack5` framework installs its own babel-loader
    // rule that only configures `@babel/preset-env`. Inject the React and
    // TypeScript presets so JSX/TS stories compile.
    config.module = config.module || {};
    config.module.rules = (config.module.rules || []).map((rule) => {
      if (
        rule &&
        Array.isArray(rule.use) &&
        rule.use.some((entry) => entry && typeof entry === "object" && entry.loader && entry.loader.includes("babel-loader/lib/index.js"))
      ) {
        return {
          ...rule,
          use: rule.use.map((entry) => {
            if (entry && entry.loader && entry.loader.includes("babel-loader")) {
              const existingPresets = (entry.options && entry.options.presets) || [];
              const basePresets = existingPresets.filter((p) => {
                const name = Array.isArray(p) ? p[0] : p;
                return name !== "@babel/preset-env";
              });
              return {
                ...entry,
                options: {
                  ...(entry.options || {}),
                  babelrc: true,
                  configFile: true,
                  presets: [
                    ...basePresets,
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                  ],
                },
              };
            }
            return entry;
          }),
        };
      }
      return rule;
    });

    return config;
  },
};
