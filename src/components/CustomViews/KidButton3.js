import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import * as constants from '../../constants'
import images from 'images'

// create a component
class AppButton extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <TouchableOpacity
                style={[{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 52,
                }, this.props.style]}
                onPress={() => {
                    if (this.props.onPress) {
                        this.props.onPress()
                    }
                }}>
                <Image style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}
                    resizeMode='contain'
                    source={images.btnLogin2} />
                <Text style={{
                    fontFamily: "FredokaOne-Regular",
                    fontSize: 17,
                    textAlign: "center",
                    color: constants.colors.WHITE
                }} adjustsFontSizeToFit={false} numberOfLines={1} >{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

export default AppButton;