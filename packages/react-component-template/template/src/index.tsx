import View from "@x.render/render-view";
import Text from "@x.render/render-text";
import Picture from "@x.render/render-picture";
import logopng from "./logo.jpeg";
import "./index.css";
const App = () => {
  return (
    <View className={"container"}>
      <Picture className={"image"} src={logopng} />
      <View className={"text"}>
        <Text className={"letter"}>Powered</Text>
        <Text className={"letter"}>&nbsp;</Text>
        <Text className={"letter"}>by</Text>
        <Text className={"letter"}>&nbsp;</Text>
        <Text className={"letter"}>render</Text>
        <Text className={"letter"}>&nbsp;</Text>
      </View>
    </View>
  );
};
export default App;
