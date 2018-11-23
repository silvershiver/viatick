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

class DeviceEditPage extends ParentScreen {
  constructor(props) {
    super(props);

    var device = props.device;

    if (device == null || device == undefined) {
      device = constants.hardData.deviceData[0];
    }

    if (device.type == "beacon") {
      this.state = {
        device: device,
        info1: "UUID: ../xxx/xxx",
        info2: "Major: ../xxx/xxx",
        info3: "Minor: ../xxx/xxx",
        error: ""
      };
    } else {
      this.state = {
        device: device,
        info1: "WiFi: ../xxx/xxx",
        info2: "Path: ../xxx/xxx",
        info3: "Filter: ../xxx/xxx",
        error: ""
      };
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Alert
          ref={cRef => (this.pickBox = cRef)}
          callback={() => {
            Actions.pop()
            if (this.props.callback) {
              this.props.callback()
            }
          }}
        />
        <Image
          style={styles.background}
          resizeMode="cover"
          source={images.background}
        />
        <MainNavigationBar leftIcon={images.leftArrow} showLogo />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 75 }}
          style={styles.keyboardAvoidingView}
          keyboardShouldPersistTaps="handled"
        >
          {this.content()}
        </KeyboardAwareScrollView>
      </View>
    );
  }

  content() {
    const { error, device } = this.state;

    return (
      <View style={styles.content}>
        <Text style={styles.text1}>{device.title}</Text>
        <Text style={[styles.text1, { marginBottom: 46 }]}>{device.info}</Text>

        <View
          style={[
            styles.textContainer,
            {
              borderColor:
                error.length != 0
                  ? constants.colors.MAIN_RED
                  : constants.colors.BORDER_TEXT_INPUT
            }
          ]}
        >
          <TextInput
            value={this.state.info1}
            style={styles.textInput}
            placeholder=""
            placeholderTextColor="white"
            onChangeText={text => {
              this.setState({
                info1: text
              });
            }}
            underlineColorAndroid="#0000"
            onSubmitEditing={() => {}}
          />
        </View>
        <Text style={styles.errorText}>{error}</Text>

        <View
          style={[
            styles.textContainer,
            {
              borderColor:
                error.length != 0
                  ? constants.colors.MAIN_RED
                  : constants.colors.BORDER_TEXT_INPUT
            }
          ]}
        >
          <TextInput
            value={this.state.info2}
            style={styles.textInput}
            placeholder=""
            placeholderTextColor="white"
            onChangeText={text => {
              this.setState({
                info2: text
              });
            }}
            underlineColorAndroid="#0000"
            onSubmitEditing={() => {}}
          />
        </View>
        <Text style={styles.errorText}>{this.state.error}</Text>

        <View
          style={[
            styles.textContainer,
            {
              borderColor:
                error.length != 0
                  ? constants.colors.MAIN_RED
                  : constants.colors.BORDER_TEXT_INPUT
            }
          ]}
        >
          <TextInput
            value={this.state.info3}
            style={styles.textInput}
            placeholder=""
            placeholderTextColor="white"
            onChangeText={text => {
              this.setState({
                info3: text
              });
            }}
            underlineColorAndroid="#0000"
            onSubmitEditing={() => {}}
          />
        </View>
        <Text style={styles.errorText}>{this.state.error}</Text>

        <MyButton
          style={{ marginTop: 10, marginBottom: 10 }}
          width={180}
          title="SYNC"
          onPress={() => {
            this.pickBox.show("Oh yeah. You were successful!");
          }}
        />
      </View>
    );
  }

  pickApp(selectedData) {
    this.setState({
      appName: selectedData.title
    });
  }
}

export default DeviceEditPage;
