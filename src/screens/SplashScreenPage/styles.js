import { StyleSheet } from "react-native";
import * as constants from "constants/index";

const mainWidth = 150;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.MAIN_BG,
    alignItems: "center",
    justifyContent: "center"
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  logo: {
    height: 70 * constants.dimens.RATIO,
    width: 70 * constants.dimens.RATIO,
  }
});
