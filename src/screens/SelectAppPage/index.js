import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import ParentScreen from "screens/ParentScreen";
import * as constants from "constants/index";
import MainNavigationBar from "components/Navigation/MainNavigationBar";
import { Actions } from "react-native-router-flux";
import MyButton from "components/Mybutton";
import images from "images";
import Dialog from "components/Dialog";
import AppListView from "./AppListView";

class LoginPage extends ParentScreen {
  constructor() {
    super();
    this.state = {
      pickApp: false,
      appName: "APP 1"
    };
  }

  render() {
    let { pickApp, appName } = this.state;

    return (
      <View style={styles.container}>
        <Dialog
          ref={cRef => (this.pickBox = cRef)}
          onSelect={(tagName, selectedData) => {
            this.pickApp(selectedData);
          }}
        />
        <Image
          style={styles.background}
          resizeMode="cover"
          source={images.background}
        />
        <View style={styles.container1}>
          <Image
            style={styles.background}
            resizeMode="cover"
            source={images.geometric}
          />
          <MainNavigationBar leftIcon={images.leftArrow} noColor />
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={images.logo}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.text1}>
            Hi Louis, welcome back, please select your app here.
          </Text>

          <TouchableOpacity
            style={pickApp ? styles.touchContainerPick : styles.touchContainer}
            onPress={() => {
              this.setState({
                pickApp: !this.state.pickApp
              });

              // this.pickBox.show(
              //   Dialog.DialogType.picker,
              //   constants.hardData.apps,
              //   "title",
              //   "Select App"
              // );
            }}
          >
            <Text style={styles.text2}>{appName}</Text>
            <Image
              style={styles.arrow}
              resizeMode="contain"
              source={pickApp ? images.topArrow : images.bottomArrow}
            />
          </TouchableOpacity>

          {pickApp ? (
            <AppListView
              selectedName={appName}
              data={constants.hardData.apps}
              onSelect={item => {
                this.setState({
                  pickApp: false,
                  appName: item.title
                });
              }}
            />
          ) : (
            <MyButton
              style={{ marginTop: 30, marginBottom: 7 }}
              width={180}
              title="DONE"
              onPress={() => {
                this.loginAction();
              }}
            />
          )}
        </View>
        <View style={styles.avatarView}>
          <Image
            style={styles.avatar}
            resizeMode="cover"
            source={images.avatar}
          />
        </View>
      </View>
    );
  }

  pickApp(selectedData) {
    this.setState({
      appName: selectedData.title
    });
  }

  loginAction() {
    //Actions.replace("HomeAllPage");
    Actions.pop()
    if (this.props.callback) {
      this.props.callback();
    }
  }
}

export default LoginPage;
