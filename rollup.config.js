import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import resolve from "rollup-plugin-node-resolve";
import serve from "rollup-plugin-serve";

export default {
  input: "main.js",
  output: {
    file: "bundle.js",
    format: "iife",
  },
  plugins: [resolve(), commonjs(), babel(), serve(), livereload()],
};
