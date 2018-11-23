import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import * as constants from '../../constants'
import images from 'images'

// create a component
class KidButton extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <TouchableOpacity
                style={[{
                    alignItems: 'center',
                    justifyContent: 'center',
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
                    left: 0,
                    top: 0,
                }}
                    resizeMode='contain'
                    source={this.props.image} />
                {
                    this.props.text ?
                        <Text style={[{
                            fontSize: 15,
                            textAlign: "center",
                            color: constants.colors.WHITE,
                            marginBottom: 5,
                        }, this.props.textStyle]} adjustsFontSizeToFit={false} numberOfLines={1} >{this.props.children}</Text>
                        : null
                }




            </TouchableOpacity>
        );
    }
}

export default KidButton;