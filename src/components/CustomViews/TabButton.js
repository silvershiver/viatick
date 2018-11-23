//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as constants from '../../constants'

// create a component
class TabButton extends Component {
  render() {
    return (
      (<TouchableOpacity onPress={this.props.onPress} style={[this.props.style, styles.container]}>
        <Image source={this.props.imageSource} resizeMode='contain' style={{width: '100%', flex: 0.7, marginBottom: -3}}/>
        <Text style={[constants.styles.APP_FONT_REGULAR, {color: 'white', flex: 0.3}]}>{this.props.title}</Text>
      </TouchableOpacity>)
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
});

//make this component available to the app
export default TabButton;

