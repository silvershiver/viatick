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

const ANIM_TIME = 80;
const ANIM_TIME_2 = 50;

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
      this.props.beforeShowCallback()
    }
    Animated.sequence([
      Animated.timing(this.state.fadeAnim1, {
        toValue: 1,
        duration: ANIM_TIME
      }),
      Animated.timing(this.state.fadeAnim2, {
        toValue: 1,
        duration: ANIM_TIME
      }),
      Animated.timing(this.state.fadeAnim3, {
        toValue: 1,
        duration: ANIM_TIME
      }),
      Animated.timing(this.state.fadeAnim4, {
        toValue: 1,
        duration: ANIM_TIME
      })
    ]).start(this.props.showCallback);
  }

  hide() {
    if (this.props.beforeHideCallback) {
      this.props.beforeHideCallback()
    }
    Animated.sequence([
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
              opacity: fadeAnim1,
              backgroundColor: "#22B1D9"
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
          <Animated.View
            style={{
              opacity: fadeAnim2,
              backgroundColor: "#30A0DF"
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
              opacity: fadeAnim3,
              backgroundColor: "#4091E5"
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
              opacity: fadeAnim4,
              backgroundColor: "#5876EF"
            }}
          >
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.pickMenu(3);
              }}
            >
              <View style={styles.avatarView}>
                <Image
                  style={styles.menuIcon}
                  resizeMode="contain"
                  source={images.avatar}
                />
              </View>

              <Text style={styles.menuText}>Louis Lee</Text>
              <TouchableOpacity
                style={styles.closeTouch}
                onPress={() => {
                  Actions.pop();
                }}
              >
                <Text style={styles.menuText2}>LOG OUT</Text>
              </TouchableOpacity>
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
