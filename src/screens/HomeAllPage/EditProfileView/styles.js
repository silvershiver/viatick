import { StyleSheet } from "react-native";
import * as constants from "constants/index";

const mainWidth = 150;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.MAIN_BG
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  logo: {
    height: 100,
    width: "37%",
    marginBottom: 5
  },
  content: {
    flex: 1,
    width: "100%",
    paddingTop: 0,
    paddingBottom: 20,
    alignItems: "center"
  },
  touch: {
    justifyContent: "center",
    width: "100%",
    paddingBottom: 3,
    marginTop: 3
  },
  text1: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    width: "75%",
    marginBottom: 58,
  },
  errorText: {
    width: "70%",
    fontSize: 12,
    fontWeight: "300",
    color: constants.colors.MAIN_RED,
    marginTop: 5,
    marginBottom: 18,
    textAlign: "center"
  },
  button1: {
    width: 295,
    height: 40,
    marginBottom: 10
  },
  line: {
    width: "90%",
    height: 1,
    backgroundColor: constants.colors.GRAY_LINE,
    marginBottom: 30,
    marginTop: 20
  },
  textContainer: {
    height: 48,
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 8,
    borderWidth: 2,
    borderRadius: 24,
    backgroundColor: "transparent"
  },
  textInput: {
    color: "white",
    height: "100%",
    flex: 1,
    fontWeight: "400",
    fontSize: 16,
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: "center"
  }
});
