import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import * as constants from '../../constants'
import { Actions } from 'react-native-router-flux';
import images from 'images'
import BaseNavigation from './BaseNavigation'

/*
props:
- showBackButton : bool
- onPressBackButton : func
- showTitle : bool
- title : string
will show logo if showTitle = true & title = ''
*/

class SimpleNavigationBar extends BaseNavigation {

    subRender() {
        let backButton = null
        let flexTitle = 1
        let title = null
        if (this.props.showBackButton) {
            flexTitle = 0.6

            var onback = this.props.onPressBackButton;
            if (onback == null) {
                onback = () => { Actions.pop()}
            }

            backButton = <TouchableOpacity
                style={{ flex: 0.2, marginTop: 15 }}
                onPress={onback}>
                <Image style={styles.backButton} source={images.backIcon} />
            </TouchableOpacity>;
        }
        if (this.props.showTitle) {
            if (this.props.title) {
                title = <Text style={{
                    flex: flexTitle,
                    textAlign: 'center',
                    marginTop: 20,
                    marginBottom: 4,
                    color: 'white',
                    fontSize: 18
                }}>{this.props.title}</Text>
            } else {
                title = <Image style={{
                    flex: flexTitle,
                    height: 30,
                    marginBottom: 4,
                    marginTop: 20
                }}
                    resizeMode='contain'
                    source={images.logoWhite} />
            }
        }
        return (
            <View style={styles.container}>
                {backButton}
                {title}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 58,
        alignSelf: 'stretch',
    },
    backButton: {
        width: 40,
        height: 40,
        marginLeft: 5
    }
});

export default SimpleNavigationBar;
