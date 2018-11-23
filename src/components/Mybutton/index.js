import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image, Dimensions } from "react-native";
import HorizontalList from "src/components/HorizontalList";
import * as constants from "constants/index";
import styles from "./styles";
import images from "images";

/*
props:
- title
- onPress
- lightColor
*/

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        style={[this.buttonStyle(), this.props.style]}
        onPress={() => {
          this.onPress();
        }}
      >
        <View
          style={
            this.props.lightColor ? styles.containerLight : styles.container
          }
        >
          <View
            style={styles.container2}
          >
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  buttonStyle() {
    if (this.props.width) {
      return {
        height: constants.dimens.BUTTON_HEIGHT,
        width: this.props.width,
        marginTop: this.props.marginTop ? this.props.marginTop : 0,
        marginBottom: this.props.marginBottom ? this.props.marginBottom : 0
      };
    }
    return {
      height: constants.dimens.BUTTON_HEIGHT,
      marginTop: this.props.marginTop ? this.props.marginTop : 0,
      marginBottom: this.props.marginBottom ? this.props.marginBottom : 0
    };
  }

  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }
}

export default MyButton;
