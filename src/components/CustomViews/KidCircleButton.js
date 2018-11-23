import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

// create a component
class KidCircleButton extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <TouchableOpacity
                style={[{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 46,
                    height: 48,
                }, this.props.style]}
                onPress={() => {
                    if (this.props.onPress) {
                        this.props.onPress()
                    } else {
                        Actions.pop()
                    }
                }}>
                <Image style={{
                    width: '100%',
                    height: '100%',
                }}
                    resizeMode='contain'
                    source={this.props.image} />
            </TouchableOpacity>
        );
    }
}

export default KidCircleButton;