//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { isIPhoneX } from "utils/isIPhoneX";
import * as constants from "constants/index";
import images from "images";

// create a component
class BaseNavigation extends Component {
  render() {
    return (
      <View style={styles.containerNoColor}>
        {this.state != null && this.state.noColor ? null : (
          <Image
            style={styles.bgBar}
            resizeMode="cover"
            source={images.topbar}
          />
        )}
        {this.iPhoneXTopView()}
        {this.subRender()}
      </View>
    );
  }

  // overide from sub com
  subRender() {
    return null;
  }

  iPhoneXTopView() {
    if (isIPhoneX()) {
      return <View style={styles.iPhoneXTopView} />;
    }
    return <View style={styles.normalTopView} />;
  }
}

// define your styles
const styles = StyleSheet.create({
  containerNoColor: {
    width: "100%",
    overflow: 'hidden',
  },
  container: {
    width: "100%",
    backgroundColor: constants.colors.SECONDARY_COLOR_3
  },
  iPhoneXTopView: {
    width: "100%",
    height: 40
  },
  normalTopView: {
    width: "100%",
    height: 20
  },
  bgBar: {
    position: "absolute",
    width: "100%",
    height: isIPhoneX() ? 85 : 65
  }
});

//make this component available to the app
export default BaseNavigation;
