import { StyleSheet, Dimensions } from "react-native";

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
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  location: {
    fontWeight: "bold",
    color: "#999999"
  },
  eventTitle: {
    fontWeight: "bold",
    marginBottom: 5
  },
  eventList: {
    margin: 20
  },
  fave: {
    paddingLeft: 235
  }
});

export default styles;
