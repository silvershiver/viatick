import { StyleSheet } from "react-native";
import * as constants from "constants/index";

export default StyleSheet.create({
  containerTouch: {
    height: constants.dimens.BUTTON_HEIGHT
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    color: "white"
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: constants.dimens.BUTTON_HEIGHT / 2,
    borderColor: 'rgba(93,112,241,0.2)',
    borderWidth: 8,
    flexDirection: 'row',
  },
  container2: {
    height: "100%",
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: constants.colors.MAIN_COLOR,
    borderRadius: constants.dimens.BUTTON_HEIGHT / 2,
  },
  containerLight: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: constants.dimens.BUTTON_HEIGHT / 2,
    backgroundColor: constants.colors.MAIN_COLOR_LIGHT,
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 3,
  }
});
