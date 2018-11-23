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
import { checkEmail, checkPass } from "utils/utils";

class LoginPage extends ParentScreen {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      password2: "",
      errorUsername: "",
      errorEmail: "",
      errorPass: "",
      errorPass2: ""
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
          style={styles.keyboardAvoidingView}
          keyboardShouldPersistTaps="handled"
        >
          {this.content()}
        </KeyboardAwareScrollView>
      </View>
    );
  }

  content() {
    const { errorEmail, errorPass, errorUsername, errorPass2 } = this.state;

    return (
      <View style={styles.content}>
        <Image style={styles.logo} resizeMode="contain" source={images.logo} />

        <View
          style={[
            styles.textContainer,
            {
              borderColor:
                errorUsername.length != 0
                  ? constants.colors.MAIN_RED
                  : constants.colors.BORDER_TEXT_INPUT
            }
          ]}
        >
          <TextInput
            value={this.state.username}
            style={[
              styles.textInput,
              {
                color:
                  errorUsername.length != 0
                    ? constants.colors.MAIN_RED
                    : constants.colors.WHITE
              }
            ]}
            placeholder="Username"
            placeholderTextColor={
              errorUsername.length != 0
                ? constants.colors.MAIN_RED
                : constants.colors.WHITE
            }
            onChangeText={text => {
              this.setState({
                username: text,
                errorUsername: ""
              });
            }}
            underlineColorAndroid="#0000"
            onSubmitEditing={() => {}}
          />
        </View>
        <Text style={styles.errorText}>{errorUsername}</Text>

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
                errorEmail: ""
              });
            }}
            underlineColorAndroid="#0000"
            onSubmitEditing={() => {}}
          />
        </View>
        <Text style={styles.errorText}>{this.state.errorEmail}</Text>

        <View
          style={[
            styles.textContainer,
            {
              borderColor:
                errorPass.length != 0
                  ? constants.colors.MAIN_RED
                  : constants.colors.BORDER_TEXT_INPUT
            }
          ]}
        >
          <TextInput
            value={this.state.password}
            style={[
              styles.textInput,
              {
                color:
                errorPass.length != 0
                    ? constants.colors.MAIN_RED
                    : constants.colors.WHITE
              }
            ]}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={
              errorPass.length != 0
                ? constants.colors.MAIN_RED
                : constants.colors.WHITE
            }
            onChangeText={text => {
              this.setState({
                password: text,
                errorPass: ""
              });
            }}
            underlineColorAndroid="#0000"
            onSubmitEditing={() => {}}
          />
        </View>
        <Text style={styles.errorText}>{this.state.errorPass}</Text>

        <View
          style={[
            styles.textContainer,
            {
              borderColor:
                errorPass2.length != 0
                  ? constants.colors.MAIN_RED
                  : constants.colors.BORDER_TEXT_INPUT
            }
          ]}
        >
          <TextInput
            value={this.state.password2}
            style={[
              styles.textInput,
              {
                color:
                errorPass2.length != 0
                    ? constants.colors.MAIN_RED
                    : constants.colors.WHITE
              }
            ]}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor={
              errorPass2.length != 0
                ? constants.colors.MAIN_RED
                : constants.colors.WHITE
            }
            onChangeText={text => {
              this.setState({
                password2: text,
                errorPass2: ""
              });
            }}
            underlineColorAndroid="#0000"
            onSubmitEditing={() => {}}
          />
        </View>
        <Text style={styles.errorText}>{errorPass2}</Text>

        <MyButton
          style={{ marginTop: 10, marginBottom: 10 }}
          width={180}
          title="SIGN UP"
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
    var errorPass = "";
    var errorPass2 = "";
    if (this.state.email.length == 0 || !checkEmail(this.state.email)) {
      errorEmail = "Please enter a valid email address";
      validate = false;
    }
    if (this.state.password.length == 0 || !checkPass(this.state.password)) {
      errorPass =
        "Password requires at least 1 digit and longer than 8 characters";
      validate = false;
    }
    if (this.state.password2.length == 0 || !checkPass(this.state.password2)) {
      errorPass2 =
        "Password requires at least 1 digit and longer than 8 characters";
      validate = false;
    } else if (this.state.password != this.state.password2) {
      errorPass2 = "Two passwords don’t match";
      validate = false;
    }

    this.setState({
      errorEmail: errorEmail,
      errorPass: errorPass,
      errorPass2: errorPass2
    });
    return validate;
  }
}

export default LoginPage;
