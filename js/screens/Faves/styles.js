import { StyleSheet, Dimensions } from "react-native";
import { Font } from "../../config/styles";

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#999999"
  },
  container: {
    paddingBottom: 15
  },
  event: {
    margin: 15,
    width: Dimensions.get("window").width * 0.9
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: Font.mont,
    marginBottom: 4
  },
  location: {
    color: "#999999",
    fontWeight: "bold",
    fontFamily: Font.mont
  },
  time: {
    backgroundColor: "#e6e6e6",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    fontFamily: Font.mont,
    fontWeight: "bold"
  },
  noFave: {
    alignSelf: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  noFaveText: {
    fontFamily: Font.mont,
    fontSize: 22
  }
});

export default styles;
