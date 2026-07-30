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

    // `@storybook/addon-webpack5-compiler-babel` appends a babel-loader rule
    // pointing at a `babel-loader` resolved from its own nested
    // `node_modules`, which transitively depends on `@babel/core@^7.26.0`. With
    // Babel 8 presets loaded via `babel.config.js`, that nested babel-core@7
    // breaks enum/JSX transforms (e.g. `Cannot read properties of undefined
    // (reading 'members')`). Rewrite the addon's rule to use the top-level
    // `babel-loader` so Babel 8 runs against the project's `@babel/core@^8`.
    config.module = config.module || {};
    const topLevelBabelLoader = path.resolve(__dirname, "../node_modules/babel-loader/lib/index.js");
    config.module.rules = (config.module.rules || []).map((rule) => {
      if (!rule || !Array.isArray(rule.use)) return rule;
      let touched = false;
      const newUse = rule.use.map((entry) => {
        if (
          entry &&
          typeof entry === "object" &&
          typeof entry.loader === "string" &&
          entry.loader.includes("addon-webpack5-compiler-babel") &&
          entry.loader.includes("babel-loader")
        ) {
          touched = true;
          return {
            ...entry,
            loader: topLevelBabelLoader,
          };
        }
        return entry;
      });
      return touched ? { ...rule, use: newUse } : rule;
    });

    return config;
  },
};
