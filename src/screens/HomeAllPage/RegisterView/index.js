import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  Text,
  Linking,
  Alert
} from "react-native";
import styles from "./styles";
import images from "images";
import { Actions } from "react-native-router-flux";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";

class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torchOn: false
    };
  }

  reactive = () => {
    this.scanner.reactivate();
  }

  render() {
    let { torchOn } = this.state;

    return (
      <View style={styles.container}>
        <QRCodeScanner
          ref={node => {
            this.scanner = node;
          }}
          cameraStyle={{ width: "100%", height: "100%" }}
          onRead={this.onSuccess.bind(this)}
          cameraProps={{
            flashMode: torchOn
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }}
        />
        <Image
          style={styles.touch}
          resizeMode="cover"
          source={torchOn ? images.scanOn : images.scanOff}
        />
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            this.setState({
              torchOn: !torchOn
            });
          }}
        />
      </View>
    );
  }

  onSuccess(e) {
    Actions.push('RegisterDevicePage', {reactive : this.reactive})
    // Alert.alert(
    //   "",
    //   e.data,
    //   [
    //     {
    //       text: "OK",
    //       onPress: () => {
    //         console.log("OK Pressed");
    //         this.scanner.reactivate();
    //       }
    //     }
    //   ],
    //   { cancelable: false }
    // );
  }
}

export default RegisterView;
