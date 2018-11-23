import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as constants from "../../constants";
import images from "../../res/images";

// create a component
class AppButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {
        width: 0,
        height: 0
      },
      fontSize: props.fontSize ? props.fontSize : 13,
      buttonHeight: props.buttonHeight ? props.buttonHeight : 32
    };
  }

  borderRadius() {
    var radiusStyles = {};
    var isCustomRadius = false;

    if (this.props.borderTopLeftRadius != null) {
      radiusStyles.borderTopLeftRadius = this.props.borderTopLeftRadius;
      isCustomRadius = true;
    }

    if (this.props.borderTopRightRadius != null) {
      radiusStyles.borderTopRightRadius = this.props.borderTopRightRadius;
      isCustomRadius = true;
    }

    if (this.props.borderBottomLeftRadius != null) {
      radiusStyles.borderBottomLeftRadius = this.props.borderBottomLeftRadius;
      isCustomRadius = true;
    }

    if (this.props.borderBottomRightRadius != null) {
      radiusStyles.borderBottomRightRadius = this.props.borderBottomRightRadius;
      isCustomRadius = true;
    }

    if (isCustomRadius) {
      return radiusStyles;
    }

    //Default Radius
    return { borderRadius: constants.dimens.BORDER_RADIUS };
  }

  onLayout(event) {
    if ((this.state.dimensions.width > 0) | (this.state.dimensions.height > 0))
      return; // layout was already called
    let { width, height } = event.nativeEvent.layout;
    this.setState({ dimensions: { width: width, height: height } });
  }

  render() {
    let rightImage = null;
    if (!this.props.hideCorner) {
      rightImage = (
        <Image
          style={{
            width: this.state.dimensions.height * 0.6,
            height: this.state.dimensions.height * 0.75,
            top: 1,
            right: 1,
            position: "absolute"
          }}
          source={images.buttonEffect}
          resizeMode="contain"
          alignSelf="flex-end"
        />
      );
    }

    return (
      <TouchableOpacity
        onLayout={this.onLayout.bind(this)}
        onPress={() => {
          this.props.onPress();
        }}
        style={[
          this.props.style,
          this.borderRadius(),
          {
            backgroundColor: constants.colors.MAIN_RED,
            borderWidth: 0,
            height: this.state.buttonHeight,
            alignItems: "center",
            justifyContent: "center"
          }
        ]}
      >
        <Text
          style={{
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            fontSize: this.state.fontSize,
            textAlign: "center",
            fontWeight: "600"
          }}
          adjustsFontSizeToFit={false}
          numberOfLines={1}
        >
          {this.props.children}
        </Text>
        {rightImage}
      </TouchableOpacity>
    );
  }
}

export default AppButton;
