import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingRight: 25,
    paddingLeft: 25,
    height: Dimensions.get("window").height
  },
  flex: {
    flexDirection: "row"
  },
  title: {
    fontSize: 20
  },
  location: {
    color: "#999999",
    fontWeight: "bold",
    fontSize: 20,

    paddingTop: 25,
    paddingBottom: 15
  },
  time: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15
  },
  description: {
    fontSize: 15,
    lineHeight: 26
  },

  speaker: {
    fontSize: 15,

    paddingRight: 25,
    paddingLeft: 25
  },

  divider: {
    borderTopWidth: 3,
    borderTopColor: "#999999",
    marginTop: 16
  },
  btn: {
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
    margin: 30,
    marginTop: 15
  }
});

export default styles;
