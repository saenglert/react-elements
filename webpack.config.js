const path = require("path");

module.exports = {
  entry: {
    testpage: path.join(__dirname, "src", "testpage.tsx"),
    package: path.join(__dirname, "src")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "react_elements_[name].js"
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    open: true
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.css?/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true, localIdentName: "re-el-[local]" }
          }
        ]
      }
    ]
  }
};
