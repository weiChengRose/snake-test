const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
   // 稍微解释下: __dirname表示当前目录，".."表示返回上一级，
   // "./src/index.tsx"表示返回上一级后的当前目录 下的src下的index.tsx
   entry: path.resolve(__dirname, "..", "./src/index.tsx"),
   resolve: {
      extensions: [".tsx", ".ts", ".js"], // 按顺序解析
   },
   module: {
      rules: [
         {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: "babel-loader",
               },
            ],
       },
       {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
         },
         {
            test: /\.less$/,
            use: [
               "style-loader",
               "css-loader",
               {
                  loader: "postcss-loader",         
                  
               },
      "less-loader"],
        },
      ],
   },
   output: {
      path: path.resolve(__dirname, "..", "./dist"),
      filename: "bundle.js",
   },
   mode: "development",
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "..", "./src/index.html"),
      }),
   ],
}