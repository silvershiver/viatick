import { StyleSheet } from "react-native";
import * as constants from "constants/index";

const bannerHeight = 285 * constants.dimens.RATIO;
const avatarSize = 50;
const border = 15;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.MAIN_BG
  },
  container1: {
    height: bannerHeight,
    alignItems: "center"
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  logo: {
    height: "100%",
    position: "absolute",
    width: "55%",
    marginBottom: 25,
    opacity: 0.6
  },
  content: {
    flex: 1,
    width: "100%",
    paddingTop: 60,
    paddingLeft: 35,
    paddingRight: 35,
    alignItems: "center"
  },
  text1: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
    color: "white",
    marginBottom: 30
  },
  touch: {
    justifyContent: "center",
    width: "100%",
    paddingBottom: 3,
    marginTop: 3
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
  touchContainer: {
    height: 45,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 24,
    backgroundColor: "white",
  },
  touchContainerPick: {
    height: 45,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "white",
  },
  avatarView: {
    width: avatarSize + border,
    height: avatarSize + border,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: bannerHeight - (avatarSize + border) / 2,
    end: 22 * constants.dimens.RATIO,
    borderColor: "rgba(255,255,255,0.5)",
    borderWidth: border,
    borderRadius: (avatarSize + border) / 2
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2
  }
});
