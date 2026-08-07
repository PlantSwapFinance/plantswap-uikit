const typescript = require("@rollup/plugin-typescript");
const url = require("@rollup/plugin-url");
const pkg = require("./package.json");

module.exports = {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [url(), typescript()],
};