import { StyleSheet } from "react-native";
import { Font } from "../../config/styles";

const styles = StyleSheet.create({
  eachBlock: {
    marginTop: 15,
    paddingBottom: 20
  },
  conductTitle: {
    fontSize: 18,
    color: "#9963ea",
    fontFamily: Font.mont,
    fontWeight: "400"
  },
  conductContent: {
    marginTop: 15,
    fontFamily: Font.mont,
    fontWeight: "100",
    lineHeight: 20
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    color: "#9963ea"
  },
  plusSign: {
    marginRight: 5,
    fontSize: 20,
    width: 10,
    color: "#9963ea",
    fontFamily: Font.mont
  }
});
export default styles;
