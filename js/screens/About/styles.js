import { StyleSheet } from "react-native";
import { Font } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  desc: {
    margin: 10,
    fontFamily: Font.mont
  },
  title: {
    fontSize: 30,
    margin: 10,
    fontFamily: Font.mont
  },
  logoContainer: {
    padding: 50
  },
  logo: {
    marginLeft: "auto",
    marginRight: "auto"
  },

  conductTitle: {
    fontSize: 20,
    color: "#9963ea",
    fontFamily: Font.mont
  },
  divider: {
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomColor: "#bbb",
    borderBottomWidth: 2,
    width: "90%"
  },
  each: { margin: 10 },
  conductContent: {
    marginTop: 5
  }
});
export default styles;
