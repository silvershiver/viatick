import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import ParentScreen from "screens/ParentScreen";
import * as constants from "constants/index";
import MainNavigationBar from "components/Navigation/MainNavigationBar";
import MyButton from "components/Mybutton";
import images from "images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Alert from "components/Alert";

class PreferencesView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: false,
      chinese: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Alert
          ref={cRef => (this.pickBox = cRef)}
          callback={() => {
            //Actions.pop()
          }}
        />
        <Image
          style={styles.background}
          resizeMode="cover"
          source={images.background}
        />
        {this.content()}
      </View>
    );
  }

  content() {
    const { sort, chinese } = this.state;

    return (
      <View style={styles.content}>
        <View style={styles.subContent}>
          <Image
            style={styles.background}
            resizeMode="cover"
            source={images.bgPreTop}
          />
          <Text style={styles.text}>Device Sorting</Text>
          <TouchableOpacity
            style={
              !sort ? styles.pickContainerBorder : styles.unPickContainerBorder
            }
            onPress={() => {
              this.setState({
                sort: false
              });
            }}
          >
            <View style={!sort ? styles.pickContainer : styles.unPickContainer}>
              <Text
                style={[
                  styles.text1,
                  { color: !sort ? "white" : constants.colors.MAIN_COLOR }
                ]}
              >
                Unsorted
              </Text>
              <Text
                style={[
                  styles.text2,
                  { color: !sort ? "white" : constants.colors.MAIN_COLOR }
                ]}
              >
                Content is presented in the order it is found
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              sort ? styles.pickContainerBorder : styles.unPickContainerBorder
            }
            onPress={() => {
              this.setState({
                sort: true
              });
            }}
          >
            <View style={sort ? styles.pickContainer : styles.unPickContainer}>
              <Text
                style={[
                  styles.text1,
                  { color: sort ? "white" : constants.colors.MAIN_COLOR }
                ]}
              >
                Sorted
              </Text>
              <Text
                style={[
                  styles.text2,
                  { color: sort ? "white" : constants.colors.MAIN_COLOR }
                ]}
              >
                Content is sorted by a device’s signal strength
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.subContent}>
          <Image
            style={styles.background}
            resizeMode="cover"
            source={images.bgPreBottom}
          />
          <Text style={styles.text}>Language</Text>
          <TouchableOpacity
            style={[
              !chinese
                ? styles.pickContainerBorder
                : styles.unPickContainerBorder,
              { width: "35%" }
            ]}
            onPress={() => {
              this.setState({
                chinese: false
              });
            }}
          >
            <View
              style={!chinese ? styles.pickContainer2 : styles.unPickContainer2}
            >
              <Text
                style={[
                  styles.text3,
                  { color: !chinese ? "white" : constants.colors.MAIN_COLOR }
                ]}
              >
                English
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              chinese
                ? styles.pickContainerBorder
                : styles.unPickContainerBorder,
              { width: "35%" }
            ]}
            onPress={() => {
              this.setState({
                chinese: true
              });
            }}
          >
            <View
              style={chinese ? styles.pickContainer2 : styles.unPickContainer2}
            >
              <Text
                style={[
                  styles.text3,
                  { color: chinese ? "white" : constants.colors.MAIN_COLOR }
                ]}
              >
                中文
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PreferencesView;
