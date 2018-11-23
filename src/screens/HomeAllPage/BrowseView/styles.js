import { StyleSheet, Dimensions } from "react-native";
import * as constants from "constants/index";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 120
  },
  container3: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  container4: {
    backgroundColor: "rgba(255,255,255,0.2)",
    position: "absolute"
  },
  bluetooth: {
    width: 66 * constants.dimens.RATIO,
    height: 66 * constants.dimens.RATIO
  },
  syncTouch: {
    position: "absolute",
    right: 15 * constants.dimens.RATIO,
    bottom: 18 * constants.dimens.RATIO
  },
  sync: {
    width: 60 * constants.dimens.RATIO,
    height: 60 * constants.dimens.RATIO
  }
});
