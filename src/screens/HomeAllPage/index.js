import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, Animated } from "react-native";
import styles from "./styles";
import ParentScreen from "screens/ParentScreen";
import HomeNavigationBar from "components/Navigation/HomeNavigationBar";
import { Actions } from "react-native-router-flux";
import images from "images";
import BrowseView from "./BrowseView";
import MenuView from "./MenuView";
import HomeContainerView from "./HomeContainerView";
import EditProfileView from "./EditProfileView";
import PreferencesView from "./PreferencesView";
import RegisterView from "./RegisterView";
import UserManager from "src/managers/UserManager";

const TAB = {
  Preferences: 0,
  Browse: 1,
  Register: 2,
  EditProfile: 3
};

class HomeAllPage extends ParentScreen {
  constructor() {
    super();
    this.state = {
      currentHomeTab: TAB.Register,
      showMenu: false
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
        <HomeNavigationBar
          leftIcon={this.state.showMenu ? images.menuShow : images.menuHide}
          onLeftPress={() => {
            if (this.state.showMenu) {
              this.menu.hide(() => {
                this.showMenu(false)
              });
            } else {
              this.showMenu(true)
            }
          }}
        />
        <HomeContainerView ref={cRef => (this.contentView = cRef)} style={styles.content}>{this.content()}</HomeContainerView>
        {this.state.showMenu ? (
          <MenuView
            ref={cRef => (this.menu = cRef)}
            beforeShowCallback={() => {
              this.contentView.hide()
            }}
            beforeHideCallback={() => {
              this.contentView.show()
            }}
            hideCallback={() => {
              this.showMenu(false)
            }}
            onPick={index => {
              this.changeView(index);
            }}
          />
        ) : null}
      </View>
    );
  }

  showMenu(isShow) {
    this.setState({
      showMenu: isShow
    });
  }

  changeView(index) {
    if (index == this.state.currentHomeTab) {
      return
    }
    if (index == TAB.EditProfile && !UserManager.getInstance().isLogin()) {
      Actions.push("LoginPage")
      return
    }

    this.setState({
      currentHomeTab: index
    });
  }

  content() {
    switch (this.state.currentHomeTab) {
      case TAB.Preferences:
        return <PreferencesView />;
      case TAB.Browse:
        return <BrowseView />;
      case TAB.Register:
        return <RegisterView />;
      case TAB.EditProfile:
        return <EditProfileView />;
      default:
        return <View />;
    }
  }

  loginAction() {
    Actions.pop();
  }
}

export default HomeAllPage;
