import { PluginOptions } from "@x.render/build-react-app-webpack-plugin/lib/types";

const pluginOptions: PluginOptions = {};
const config = {
  builder: "webpack",
  plugins: [["@x.render/build-react-app-webpack-plugin", pluginOptions]],
};

export default config;
