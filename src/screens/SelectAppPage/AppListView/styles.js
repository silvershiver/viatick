import { StyleSheet } from "react-native";
import * as constants from "constants/index";

export default StyleSheet.create({
  text1: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    color: "#50E3C2"
  },
  text2: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    color: constants.colors.MAIN_COLOR
  },

  arrow: {
    width: 18,
    position: "absolute",
    end: 18
  },
  touchContainer1: {
    height: 45,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white"
  },
  touchContainer2: {
    height: 45,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: "white"
  }
});
