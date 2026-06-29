import resolve from "@rollup/plugin-node-resolve";//locate and bundle third-party dependencies in node_modules
import typescript from "@rollup/plugin-typescript";//seemless integration between typescript & rollup
import commonjs from "@rollup/plugin-commonjs";//convert CommonJS modules to ES6, so they can be included in a Rollup bundle
import dts from "rollup-plugin-dts"; // For generating TypeScript declaration files
import postcss from "rollup-plugin-postcss"; //integrate postcss plugin for rollup
import packageJson from "./package.json" with { type: "json" }; //import package.json to access the package name and version

export default [
  {
    input: "src/index.ts", // Entry point of the library
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json", // Specify the path to your build tsconfig
        exclude: ["**/__tests__/**", "**/*.test.ts", "**/*.test.tsx", "**/*.stories.ts", "**/*.stories.js"] // Exclude test files from the build 
      }),
      postcss({
        extensions: [".css", ".scss"], // Specify the file extensions to process,
        inject:true, // Inject CSS into the JavaScript bundle
        extract: false, // Extract CSS to a separate file
      }),
    ]
  },
//   handling type definiition files
  {
    input: "src/index.ts", // Input for the TypeScript declaration files
    output: [{ file: "dist/index.d.ts", format: "esm" }], // Output for the TypeScript declaration files
    plugins: [dts()], // Use the dts plugin to generate TypeScript declaration files
    external: [/\.css$/], // Exclude CSS and SCSS files from the declaration files
  }
];
