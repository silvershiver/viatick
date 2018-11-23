import { StyleSheet } from "react-native";
import * as constants from "constants/index";

const mainWidth = 150;
const viewHeight = 60;
const border = 8;

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
    alignItems: "center"
  },
  subContent: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },

  touch: {
    justifyContent: "center",
    width: "100%",
    paddingBottom: 3,
    marginTop: 3
  },
  text: {
    width: '85%',
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    paddingLeft: 10,
    marginTop: 48,
    marginBottom: 30,
  },
  text1: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    marginLeft: 18,
    width: 90,
  },
  text2: {
    fontSize: 12,
    fontWeight: "400",
    color: "white",
    flex: 1,
  },
  text3: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    width: '100%',
    textAlign: 'center',
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

  pickContainerBorder: {
    height: viewHeight,
    width: "85%",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: viewHeight / 2,
    borderColor: "rgba(93,112,241,0.2)",
    borderWidth: border,
    marginTop: 13,
  },
  unPickContainerBorder: {
    height: viewHeight,
    width: "85%",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: viewHeight / 2,
    borderColor: "transparent",
    borderWidth: border,
    marginTop: 13,
  },
  pickContainer: {
    height: '100%',
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 8,
    borderRadius: viewHeight / 2,
    backgroundColor: "#5D70F1"
  },
  unPickContainer: {
    height: '100%',
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 8,
    borderRadius: viewHeight / 2,
    backgroundColor: "white"
  },
  pickContainer2: {
    height: '100%',
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: viewHeight / 2,
    backgroundColor: "#5D70F1"
  },
  unPickContainer2: {
    height: '100%',
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: viewHeight / 2,
    backgroundColor: "white"
  }
});
