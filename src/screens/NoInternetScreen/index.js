import React, { Component } from 'react';
import styles from './styles'
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import ParentScreen from 'screens/ParentScreen'
import { Actions } from 'react-native-router-flux';
import images from 'images'

class NoInternetScreen extends ParentScreen {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableWithoutFeedback style={styles.container} onPress={() => this.close()}>
                <View style={styles.touch}>
                    <Image style={styles.image}
                        resizeMode='contain'
                        source={images.noInternet} />
                </View>
            </TouchableWithoutFeedback>
        );
    }

    close() {
        Actions.pop()
        Actions.pop()
    }
}

export default NoInternetScreen;
