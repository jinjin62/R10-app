import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  logoContainer: {
    padding: 50
  },
  logo: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    fontSize: 30,
    margin: 10
  },
  paragraph: {
    margin: 10
  },
  conductTitle: {
    fontSize: 20,
    color: "#9963ea"
  },
  each: { margin: 10 },
  conductContent: {
    marginTop: 5
  },
  divider: {
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomColor: "#bbb",
    borderBottomWidth: 2,
    width: "90%"
  }
});
export default styles;
