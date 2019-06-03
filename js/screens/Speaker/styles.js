import { StyleSheet, Dimensions } from "react-native";
import { Font } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    color: "#fff",
    flex: 1,
    padding: 15,
    paddingBottom: 30,
    height: Dimensions.get("window").height * 1.5
  },
  speakerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingBottom: 0,
    paddingTop: 50
  },
  speakerTitle: {
    color: "#fff",
    fontSize: 15,
    fontFamily: Font.mont,
    marginRight: 60
  },

  wrapper: {
    backgroundColor: "#fff",
    borderRadius: 7,
    flex: 1,
    padding: 25
  },
  avatar: {
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 60
  },
  name: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: Font.mont,
    marginTop: 15,
    marginBottom: 20
  },
  bio: {
    lineHeight: 26,
    marginBottom: 20
  },
  wikiLink: {
    color: "white",
    alignSelf: "center",
    fontSize: 15,
    fontFamily: Font.mont,
    marginTop: 25
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    borderRadius: 25,
    margin: 20
  },
  btnText: {
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 15,
    fontFamily: Font.mont
  },
  x: {
    color: "#fff",
    paddingRight: 40,
    fontSize: 20
  }
});

export default styles;
