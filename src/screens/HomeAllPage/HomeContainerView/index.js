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

const ANIM_TIME = 300;

class MenuView extends Component {
  state = {
    fadeAnim1: new Animated.Value(0)
  };

  componentDidMount() {
    this.show();
  }

  show() {
    Animated.timing(this.state.fadeAnim1, {
      toValue: 0,
      duration: ANIM_TIME
    }).start();
  }

  hide() {
    Animated.timing(this.state.fadeAnim1, {
      toValue: 280,
      duration: ANIM_TIME
    }).start();
  }

  render() {
    let { fadeAnim1 } = this.state;

    return (
      <Animated.View
        style={[this.props.style, {
          top: fadeAnim1,
        }]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default MenuView;
