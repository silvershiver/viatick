import { StyleSheet, Dimensions } from "react-native";
import * as constants from "constants/index";
import { isIPhoneX } from "utils/isIPhoneX";

export default StyleSheet.create({
  menuView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    marginTop: isIPhoneX() ? 85 : 65,
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  mainView: {
    width: "100%",
    height: "100%"
  },
  menuItem: {
    width: "100%",
    height: 70,
    paddingLeft: 88,
    alignItems: "center",
    flexDirection: "row"
  },
  menuIcon: {
    width: 27,
    height: 27
  },
  menuText: {
    marginLeft: 20,
    color: "white",
    fontSize: 18,
    fontWeight: "400",
    flex: 1
  },
  menuText2: {
    color: "white",
    fontWeight: "400",
    fontSize: 15
  },
  closeTouch: {
    height: 35,
    width: 102,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    borderColor: constants.colors.BORDER_TEXT_INPUT,
    borderWidth: 2,
    marginRight: 15
  },
  avatarView: {
    width: 33,
    height: 33,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(255,255,255,0.5)",
    borderWidth: 5,
    borderRadius: 16,
    marginLeft: -3,
  }
});
