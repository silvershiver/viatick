import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import ParentScreen from "screens/ParentScreen";
import * as constants from "constants/index";
import MainNavigationBar from "components/Navigation/MainNavigationBar";
import images from "images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DeviceList from './DeviceList/'
import { Actions } from "react-native-router-flux";

class DeviceListPage extends ParentScreen {
  
    constructor() {
    super();
    this.state = {
      email: "",
      errorEmail: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.background}
          resizeMode="cover"
          source={images.background}
        />
        <MainNavigationBar leftIcon={images.leftArrow} showLogo/>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          style={styles.keyboardAvoidingView}
          keyboardShouldPersistTaps="handled"
        >
          {this.content()}
        </KeyboardAwareScrollView>
      </View>
    );
  }

  back = () => {

  }

  content() {

    return (
      <View style={styles.content}>
        <DeviceList data={constants.hardData.deviceData}/>
      </View>
    );
  }

  
}

export default DeviceListPage;
