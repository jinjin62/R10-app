import { StyleSheet, Dimensions } from "react-native";
import { Font } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height
  },
  divider: {
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 2
  },
  time: {
    backgroundColor: "#e6e6e6",
    fontWeight: "bold",
    fontFamily: Font.mont,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  location: {
    fontWeight: "bold",
    fontFamily: Font.mont,
    color: "#999999",
    fontSize: 13
  },
  locationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  eventTitle: {
    fontWeight: "bold",
    fontFamily: Font.mont,
    fontSize: 15,
    marginBottom: 5
  },
  eventList: {
    margin: 20
  }
});

export default styles;
