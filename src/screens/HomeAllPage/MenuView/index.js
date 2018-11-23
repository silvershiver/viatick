import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  Text,
  TouchableWithoutFeedback
} from "react-native";
import styles from "./styles";
import images from "images";
import { Actions } from "react-native-router-flux";
import UserManager from "src/managers/UserManager";

const ANIM_TIME = 300;
const ANIM_TIME_2 = 300;

class MenuView extends Component {
  state = {
    fadeAnim1: new Animated.Value(0),
    fadeAnim2: new Animated.Value(0),
    fadeAnim3: new Animated.Value(0),
    fadeAnim4: new Animated.Value(0)
  };

  componentDidMount() {
    this.show();
  }

  show() {
    if (this.props.beforeShowCallback) {
      this.props.beforeShowCallback();
    }
    Animated.parallel([
      Animated.timing(this.state.fadeAnim1, {
        toValue: 70 * 4,
        duration: ANIM_TIME
      }),
      Animated.timing(this.state.fadeAnim2, {
        toValue: 70 * 3,
        duration: ANIM_TIME,
        delay: 150
      }),
      Animated.timing(this.state.fadeAnim3, {
        toValue: 70 * 2,
        duration: ANIM_TIME,
        delay: 300
      }),
      Animated.timing(this.state.fadeAnim4, {
        toValue: 70,
        duration: ANIM_TIME,
        delay: 450
      })
    ]).start(this.props.showCallback);
  }

  hide() {
    if (this.props.beforeHideCallback) {
      this.props.beforeHideCallback();
    }
    Animated.parallel([
      Animated.timing(this.state.fadeAnim4, {
        toValue: 0,
        duration: ANIM_TIME_2
      }),
      Animated.timing(this.state.fadeAnim3, {
        toValue: 0,
        duration: ANIM_TIME_2
      }),
      Animated.timing(this.state.fadeAnim2, {
        toValue: 0,
        duration: ANIM_TIME_2
      }),
      Animated.timing(this.state.fadeAnim1, {
        toValue: 0,
        duration: ANIM_TIME_2
      })
    ]).start(this.props.hideCallback);
  }

  render() {
    let { fadeAnim1, fadeAnim2, fadeAnim3, fadeAnim4 } = this.state;
    let userManager = UserManager.getInstance();
    let isLogin = userManager.isLogin();

    return (
      <TouchableWithoutFeedback
        style={styles.mainView}
        onPress={() => {
          this.hide();
        }}
      >
        <View style={styles.menuView}>
          <Animated.View
            style={{
              overflow: "hidden",
              height: fadeAnim1,
              backgroundColor: "#5876EF",
              position: "absolute",
              top: 0,
              width: "100%",
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.pickMenu(3);
              }}
            >
              {/* {isLogin ? (
                <View style={styles.avatarView}>
                  <Image
                    style={styles.menuIcon}
                    resizeMode="contain"
                    source={images.avatar}
                  />
                </View>
              ) : (
                <Image
                  style={styles.menuIcon}
                  resizeMode="contain"
                  source={images.iconGuest}
                />
              )} */}

              <Image
                  style={styles.menuIcon}
                  resizeMode="contain"
                  source={images.iconGuest}
                />

              {isLogin ? (
                <View style={{ marginLeft: 20, flex: 1 }}>
                  <Text style={[styles.menuText, { marginLeft: 0, flex: 0 }]}>
                    Louis Lee
                  </Text>
                  <Text style={[styles.menuText, { marginLeft: 0, flex: 0, fontSize: 14 }]}>KPP</Text>
                </View>
              ) : (
                <Text style={styles.menuText}>Guest</Text>
              )}

              <TouchableOpacity
                style={styles.closeTouch}
                onPress={() => {
                  if (isLogin) {
                    UserManager.getInstance().setLogin(false);
                    Actions.push("LoginPage");
                  } else {
                    Actions.push("LoginPage");
                  }
                  this.hide();
                }}
              >
                <Text style={styles.menuText2}>
                  {isLogin ? "LOG OUT" : "LOG IN"}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={{
              overflow: "hidden",
              top: 0,
              height: fadeAnim2,
              backgroundColor: "#4091E5",
              position: "absolute",
              width: "100%",
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.pickMenu(2);
              }}
            >
              <Image
                style={styles.menuIcon}
                resizeMode="contain"
                source={images.iconQrcode}
              />
              <Text style={styles.menuText}>Register Device</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={{
              overflow: "hidden",
              top: 0,
              height: fadeAnim3,
              backgroundColor: "#30A0DF",
              position: "absolute",
              width: "100%",
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.pickMenu(1);
              }}
            >
              <Image
                style={styles.menuIcon}
                resizeMode="contain"
                source={images.bluetooth}
              />
              <Text style={styles.menuText}>Browse Device</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={{
              overflow: "hidden",
              top: 0,
              height: fadeAnim4,
              backgroundColor: "#22B1D9",
              position: "absolute",
              width: "100%",
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.pickMenu(0);
              }}
            >
              <Image
                style={styles.menuIcon}
                resizeMode="contain"
                source={images.iconSetting}
              />
              <Text style={styles.menuText}>Preferences</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  pickMenu(index) {
    this.hide();
    if (this.props.onPick) {
      this.props.onPick(index);
    }
  }
}

export default MenuView;
