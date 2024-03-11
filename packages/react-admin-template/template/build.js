module.exports = {
  builder: "webpack",
  plugins: [
    [
      "@x.render/build-react-admin-webpack-plugin",
      {
        miniCssExtractPluginOptions: {
          filename: "css/[name].[contenthash].css",
          chunkFilename: "css/[id].[contenthash].css",
        },
        splitChunks: {
          chunks: "initial",
          cacheGroups: {
            vendor: {
              name: "js/chunk-vendors",
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: "initial",
            },
            antd: {
              name: "js/chunk-antd",
              priority: 20,
              test: /[\\/]node_modules[\\/]_?antd|@ant(.*)/,
            },
            commons: {
              name: "js/chunk-commons",
              minChunks: 1,
              priority: 5,
              reuseExistingChunk: true,
            },
            lib: {
              test(module) {
                return (
                  module.size() > 160000 &&
                  /node_modules[/\\]/.test(module.nameForCondition() || "")
                );
              },
              name(module) {
                const packageNameArr = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                );
                const packageName = packageNameArr ? packageNameArr[1] : "";
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `js/chunk-lib.${packageName.replace("@", "")}`;
              },
              priority: 15,
              minChunks: 1,
              reuseExistingChunk: true,
            },
          },
        },
      },
    ],
  ],
};
