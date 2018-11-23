import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";
import ParentScreen from "screens/ParentScreen";
import * as constants from "constants/index";
import MainNavigationBar from "components/Navigation/MainNavigationBar";
import MyButton from "components/Mybutton";
import images from "images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Alert from "components/Alert";
import { Actions } from "react-native-router-flux";

class RegisterDevicePage extends ParentScreen {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Alert
          ref={cRef => (this.pickBox = cRef)}
          callback={() => {
            this.back();
          }}
        />
        <Image
          style={styles.background}
          resizeMode="cover"
          source={images.background}
        />
        <MainNavigationBar
          leftIcon={images.leftArrow}
          showLogo
          onLeftPress={() => {
            this.back();
          }}
        />
        <Image
          style={styles.device}
          resizeMode="cover"
          source={images.device}
        />
        {this.content()}
      </View>
    );
  }

  content() {
    return (
      <View style={styles.content}>
        <Text style={styles.title}>Lorem Ipsum</Text>
        <View style={styles.content2}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>6354</Text>
            <Text style={styles.text2}>Lorem</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>152</Text>
            <Text style={styles.text2}>Lorem Ipsum</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>32</Text>
            <Text style={styles.text2}>Ipsum</Text>
          </View>
        </View>

        <MyButton
          style={{ marginTop: 15 }}
          width={180}
          title="SYNC"
          onPress={() => {
            this.pickBox.show("Oh yeah. You were successful!");
          }}
        />
      </View>
    );
  }

  back() {
    Actions.pop();
    if (this.props.reactive) {
      this.props.reactive();
    }
  }
}

export default RegisterDevicePage;
