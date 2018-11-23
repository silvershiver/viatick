import React, { Component } from "react";
import { View, Image, TouchableOpacity, Animated } from "react-native";
import styles from "./styles";
import images from "images";
import { Actions } from "react-native-router-flux";

const ANIM_TIME = 400;
const initSize = 55;
const stepRadius = 42;

class FadeInView extends Component {
  state = {
    fadeAnim1: new Animated.Value(0),
    fadeAnim2: new Animated.Value(0),
    fadeAnim3: new Animated.Value(0),
    fadeAnim4: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.fadeAnim1, {
          delay: this.props.delay,
          toValue: 1,
          duration: ANIM_TIME
        }),
        Animated.timing(this.state.fadeAnim2, {
          delay: this.props.delay,
          toValue: 1,
          duration: ANIM_TIME
        }),
        Animated.timing(this.state.fadeAnim3, {
          delay: this.props.delay,
          toValue: 1,
          duration: ANIM_TIME
        }),
        Animated.timing(this.state.fadeAnim4, {
          delay: this.props.delay,
          toValue: 1,
          duration: ANIM_TIME
        }),

        Animated.timing(this.state.fadeAnim4, {
          delay: this.props.delay,
          toValue: 0,
          duration: ANIM_TIME
        }),
        Animated.timing(this.state.fadeAnim3, {
          delay: this.props.delay,
          toValue: 0,
          duration: ANIM_TIME
        }),
        Animated.timing(this.state.fadeAnim2, {
          delay: this.props.delay,
          toValue: 0,
          duration: ANIM_TIME
        }),
        Animated.timing(this.state.fadeAnim1, {
          delay: this.props.delay,
          toValue: 0,
          duration: ANIM_TIME
        })
      ]),
      {
        iterations: 2
      }
    ).start(this.props.callback);
  }

  render() {
    let { fadeAnim1, fadeAnim2, fadeAnim3, fadeAnim4 } = this.state;

    return (
      <View style={styles.container3}>
        <Animated.View
          style={{
            position: "absolute",
            width: this.circleSize(3),
            height: this.circleSize(3),
            opacity: fadeAnim4
          }}
        >
          <View
            style={[
              styles.container4,
              {
                width: this.circleSize(3),
                height: this.circleSize(3),
                borderRadius: this.radiusSize(3)
              }
            ]}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            width: this.circleSize(2),
            height: this.circleSize(2),
            opacity: fadeAnim3
          }}
        >
          <View
            style={[
              styles.container4,
              {
                width: this.circleSize(2),
                height: this.circleSize(2),
                borderRadius: this.radiusSize(2)
              }
            ]}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            width: this.circleSize(1),
            height: this.circleSize(1),
            opacity: fadeAnim2
          }}
        >
          <View
            style={[
              styles.container4,
              {
                width: this.circleSize(1),
                height: this.circleSize(1),
                borderRadius: this.radiusSize(1)
              }
            ]}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            width: this.circleSize(0),
            height: this.circleSize(0),
            opacity: fadeAnim1
          }}
        >
          <View
            style={[
              styles.container4,
              {
                width: this.circleSize(0),
                height: this.circleSize(0),
                borderRadius: this.radiusSize(0)
              }
            ]}
          />
        </Animated.View>
      </View>
    );
  }

  circleSize(index) {
    return initSize + index * stepRadius;
  }
  radiusSize(index) {
    return (initSize + index * stepRadius) / 2;
  }
}

class BrowseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBrowse: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          {this.state.isBrowse ? (
            <FadeInView
              callback={() => {
                Actions.push("DeviceListPage");
                this.setState({
                  isBrowse: false
                });
              }}
            />
          ) : null}
          <Image
            style={styles.bluetooth}
            resizeMode="contain"
            source={images.bluetooth}
          />
        </View>
        <TouchableOpacity
          style={styles.syncTouch}
          onPress={() => {
            this.setState({
              isBrowse: true
            });
          }}
        >
          <Image style={styles.sync} resizeMode="cover" source={images.sync} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default BrowseView;
