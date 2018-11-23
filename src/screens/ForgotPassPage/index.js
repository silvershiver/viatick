import React from "react";
import { View, Text, TextInput, Image, Keyboard } from "react-native";
import styles from "./styles";
import ParentScreen from "screens/ParentScreen";
import * as constants from "constants/index";
import MainNavigationBar from "components/Navigation/MainNavigationBar";
import { Actions } from "react-native-router-flux";
import MyButton from "components/Mybutton";
import images from "images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Alert from "components/Alert";
import { checkEmail } from "utils/utils";

class LoginPage extends ParentScreen {
  constructor() {
    super();
    this.state = {
      email: "",
      errorEmail: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Alert
          ref={cRef => (this.pickBox = cRef)}
          callback={() => {
            Actions.pop();
          }}
        />
        <Image
          style={styles.background}
          resizeMode="cover"
          source={images.background}
        />
        <View
          style={{
            width: "100%",
            height: 80,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10
          }}
        >
          <MainNavigationBar leftIcon={images.leftArrow} noColor />
        </View>

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          style={{}}
          keyboardShouldPersistTaps="handled"
        >
          {this.content()}
        </KeyboardAwareScrollView>
      </View>
    );
  }

  content() {
    const { errorEmail } = this.state;

    return (
      <View style={styles.content}>
        <Image style={styles.logo} resizeMode="contain" source={images.logo} />

        <View
          style={[
            styles.textContainer,
            {
              borderColor:
                errorEmail.length != 0
                  ? constants.colors.MAIN_RED
                  : constants.colors.BORDER_TEXT_INPUT
            }
          ]}
        >
          <TextInput
            value={this.state.email}
            style={[
                styles.textInput,
                {
                  color:
                    errorEmail.length != 0
                      ? constants.colors.MAIN_RED
                      : constants.colors.WHITE
                }
              ]}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor={
              errorEmail.length != 0
                ? constants.colors.MAIN_RED
                : constants.colors.WHITE
            }
            onChangeText={text => {
              this.setState({
                email: text,
                errorEmail: "",
              });
            }}
            underlineColorAndroid="#0000"
            onSubmitEditing={() => {}}
          />
        </View>

        {this.state.errorEmail.length == 0 ? (
          <Text style={[styles.errorText, { color: "white" }]}>
            A valid registered email
          </Text>
        ) : (
          <Text style={styles.errorText}>{this.state.errorEmail}</Text>
        )}

        <MyButton
          style={{ marginTop: 0, marginBottom: 7 }}
          width={"80%"}
          title="REQUEST NEW PASSWORD"
          onPress={() => {
            this.loginAction();
          }}
        />
      </View>
    );
  }

  loginAction() {
    if (this.validate()) {
      Keyboard.dismiss();
      this.pickBox.show("Email sent, please check your inbox.");
    }
  }

  validate() {
    var validate = true;
    var errorEmail = "";
    if (this.state.email.length == 0 || !checkEmail(this.state.email)) {
      errorEmail = "Please enter a valid email address";
      validate = false;
    }

    this.setState({
      errorEmail: errorEmail
    });
    return validate;
  }
}

export default LoginPage;
