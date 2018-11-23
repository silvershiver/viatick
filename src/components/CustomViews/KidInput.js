//import liraries
import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';
import * as constants from '../../constants'
import images from 'images'

// create a component
class KidInput extends Component {
    render() {
        return (
            <View style={[{
                width: 320,
                height: 45,
            }, this.props.style]}>
                <Image style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}
                    resizeMode='contain'
                    source={images.kidbginput} />
                <TextInput style={{
                    width: '100%',
                    height: '100%',
                    color: constants.colors.BLACK_TEXT,
                    fontWeight: '400',
                    paddingLeft: 15,
                    paddingRight: 15,
                }}
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
            </View>
        );
    }
}

export default KidInput;
