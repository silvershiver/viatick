import React, { Component } from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";
import ParentScreen from "screens/ParentScreen";
import * as constants from "constants/index";
import MainNavigationBar from "components/Navigation/MainNavigationBar";
import MyButton from "components/Mybutton";
import images from "images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Alert from "components/Alert";

class EditProfileView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info1: "Username: Louis Lee",
      info2: "Company Name: KPP",
      error: ""
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
    const { info1, info2, error } = this.state;

    return (
      <View style={styles.content}>
        <Text style={styles.text1}>Edit Profile</Text>

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
            value={info1}
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
            value={info2}
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

        <MyButton
          style={{ marginTop: 17, marginBottom: 10 }}
          width={180}
          title="SYNC"
          onPress={() => {
            this.pickBox.show("Oh yeah. You were successful!");
          }}
        />
      </View>
    );
  }

}

export default EditProfileView;
