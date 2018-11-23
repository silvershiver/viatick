//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import * as constants from '../../constants'

// create a component
class AppTextInput extends Component {
    render() {
        return (
            <TextInput style={[constants.styles.TEXTINPUT1, this.props.style]}
                placeholderTextColor={constants.colors.GRAY_PLACEHOLDER_TEXT}
                placeholder={this.props.placeholder}
                onChangeText={this.props.onChangeText} 
                keyboardType={this.props.keyboardType}
                onFocus={this.props.onFocus}
                editable={this.props.editable}
                underlineColorAndroid='#0000'
                ref={(cRef => this.textInput = cRef)}
                value={this.props.value}
                pointerEvents={this.props.pointerEvents}
                secureTextEntry={this.props.secureTextEntry}
                />
        );
    }
}

//make this component available to the app
export default AppTextInput;
