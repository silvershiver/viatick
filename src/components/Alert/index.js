import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import styles from "./styles";
import Modal from "react-native-modal";
import images from "images";
import * as constants from "constants/index";

/**
 * props:
 * - isShow
 * - title
 * - data: list of data to be suggestions
 * - displayingField: selected field of data to be displaying in suggestions
 */

class Alert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false,
      title: ""
    };
  }

  render() {
    var freeMode = true;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.hide();
        }}
      >
        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          transparent={true}
          animationInTiming={0}
          isVisible={this.state.isShow}
          onBackdropPress={() => {
            this.hide();
          }}
          avoidKeyboard={true}
        >
          <View
            style={
              freeMode ? styles.modalBackgroundFree : styles.modalBackground
            }
          >
            <TouchableWithoutFeedback>
              <View style={freeMode ? styles.contentFree : styles.content}>
                <View
                  style={freeMode ? styles.mainContentFree : styles.mainContent}
                >
                  <Text style={styles.titleText}>{this.state.title}</Text>
                  <TouchableOpacity
                    style={styles.closeTouch}
                    onPress={() => {
                      this.hide();
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: 14
                      }}
                    >
                      OK
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    );
  }

  show(title) {
    this.setState({
      isShow: true,
      title: title
    });
  }

  hide() {
    this.setState({ isShow: false });
    if (this.props.callback) {
        this.props.callback()
    }
  }
}

export default Alert;
