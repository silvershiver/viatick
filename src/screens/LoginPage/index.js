import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard
} from "react-native";
import styles from "./styles";
import ParentScreen from "screens/ParentScreen";
import * as constants from "constants/index";
import MainNavigationBar from "components/Navigation/MainNavigationBar";
import { Actions } from "react-native-router-flux";
import MyButton from "components/Mybutton";
import images from "images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { checkEmail, checkPass } from "utils/utils";
import UserManager from "src/managers/UserManager"

class LoginPage extends ParentScreen {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errorEmail: "",
      errorPass: ""
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
        {/* <MenuView menuName={constants.strings.MENU_PROFILE} /> */}
      </View>
    );
  }

  content() {
    const { errorEmail, errorPass } = this.state;

    return (
      <View style={styles.content}>
        <Image style={styles.logo} resizeMode="contain" source={images.logo} />

        <View style={{ width: "100%", alignItems: "center" }}>
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
          <Text style={[styles.errorText, { marginBottom: 5 }]}>
            {this.state.errorPass}
          </Text>

          <TouchableOpacity
            style={{ justifyContent: "center", paddingBottom: 30 }}
            onPress={() => {
              Actions.push("ForgotPassPage");
            }}
          >
            <Text style={[styles.text2, { color: "#50E3C2", fontSize: 13 }]}>
              FORGOT PASSWORD?
            </Text>
          </TouchableOpacity>
          <MyButton
            style={{ marginTop: 0, marginBottom: 7 }}
            width={180}
            title="LOG IN"
            onPress={() => {
              this.loginAction();
            }}
          />

          <Text style={styles.text2}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              Actions.push("SignUpPage", { callback: this.props.callback });
            }}
          >
            <Text style={[styles.text2, { color: "#50E3C2", fontSize: 13 }]}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  loginAction() {
    if (this.validate()) {
      Keyboard.dismiss()
      Actions.push("SelectAppPage", {callback: this.selectAppCallback});
    }
  }

  validate() {
    var validate = true;
    var errorEmail = "";
    var errorPass = "";
    if (this.state.email.length == 0 || !checkEmail(this.state.email)) {
      errorEmail = "Please enter a valid email address";
      validate = false;
    }
    if (this.state.password.length == 0 || !checkPass(this.state.password)) {
      errorPass =
        "Password requires at least 1 digit and longer than 8 characters";
      validate = false;
    }

    this.setState({
      errorEmail: errorEmail,
      errorPass: errorPass
    });
    return validate;
  }

  selectAppCallback = () => {
    UserManager.getInstance().setLogin(true)
    Actions.pop()
  }
}

export default LoginPage;
