const path = require(`path`);

module.exports = {
  mode: `none`,
  entry: path.join(__dirname, `src`, `index.tsx`),
  target: `web`,
  devtool: `inline-source-map`,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: `ts-loader`,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`, `.jsx`],
  },
  output: {
    filename: `index.js`,
    path: path.resolve(__dirname, `dist`),
  },
};
