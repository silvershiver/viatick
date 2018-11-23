//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";
import * as constants from "constants/index";
import SearchBar from "components/CustomViews/SearchBar";
import BaseNavigation from "./BaseNavigation";
import images from "images";
import { Actions } from "react-native-router-flux";

/*
props:
- leftIcon : bool
- onLeftPress : func
- rightIcon : bool
- onRightPress : func
- title
will show logo if title = ''
- showSearch : bool
*/

// create a component
class HomeNavigationBar extends BaseNavigation {
  constructor(props) {
    super(props);
    this.state = {
      noColor: props.noColor ? props.noColor : false
    };
  }

  subRender() {
    let leftView = null;
    let rightView = null;
    let middleView = null;
    let clearAll = null;
    let saveView = null;

    let pressLeft = this.props.onLeftPress
      ? this.props.onLeftPress
      : () => Actions.pop();

    leftView = (
      <TouchableOpacity style={styles.touch} onPress={pressLeft}>
        {this.props.leftIcon ? (
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={this.props.leftIcon}
          />
        ) : null}
      </TouchableOpacity>
    );

    rightView = (
      <TouchableOpacity style={styles.touch} onPress={this.props.onRightPress}>
        {this.props.rightIcon ? (
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={this.props.rightIcon}
          />
        ) : null}
      </TouchableOpacity>
    );

    //if (this.props.title) {
    middleView = (
        <Image
        style={styles.logoTitle}
        resizeMode="contain"
        source={images.logo}
      />
    );
    //}

    return (
      <View style={[styles.container, this.props.style]}>
        {leftView}
        {middleView}
        {rightView}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45
    // alignSelf: 'stretch',
  },
  touch: {
    height: "100%",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  touchSearch: {
    height: "100%",
    width: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 24,
    height: 24,
  },
  logoTitle: {
    flex: 1,
    height: 25,
  },
  textTitle: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "700"
  },
});

//make this component available to the app
export default HomeNavigationBar;
