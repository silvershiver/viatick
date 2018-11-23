import React, { Component } from "react";
import { View, Animated, Image, Easing } from "react-native";
import styles from "./styles";
import ParentScreen from "screens/ParentScreen";
import { Actions } from "react-native-router-flux";
import images from "images";

class RotateView extends Component {
  state = {
    spinValue: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.spinValue, {
      toValue: 720,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(this.props.callback);
  }

  render() {
    let { spinValue } = this.state;

    const spin = spinValue.interpolate({
      inputRange: [0, 720],
      outputRange: ["0deg", this.props.inverse ? "-720deg" : "720deg"]
    });

    return (
      <Animated.View
        style={[this.props.style, { transform: [{ rotate: spin }] }]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

class SplashScreenPage extends ParentScreen {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.background}
          resizeMode="cover"
          source={images.background}
        />

        <View
          style={[styles.background, { opacity: 0.5, backgroundColor: "#000" }]}
          resizeMode="cover"
          source={images.background}
        />
        <RotateView
          style={{
            position: "absolute"
          }}
          callback={() => {
            Actions.replace("HomeAllPage");
          }}
        >
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={images.DoubleRing}
          />
        </RotateView>

        <RotateView
          inverse
          style={{
            position: "absolute"
          }}
        >
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={images.DoubleRing2}
          />
        </RotateView>
      </View>
    );
  }
}

export default SplashScreenPage;
