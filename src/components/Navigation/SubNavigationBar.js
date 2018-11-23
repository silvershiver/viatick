import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import * as constants from 'constants/index'
import { Actions } from 'react-native-router-flux';
import images from 'images'
import BaseNavigation from './BaseNavigation'

/*
props:
- title : string
- hideBackButton : bool
- hideSearchButton : bool
- onPressBackButton : func
- onPressSearchButton : func

- rightButtonTitle: string
- onPressRightButton : func
*/

class SimpleNavigationBar extends BaseNavigation {
    subRender() {
        let backButton = null
        let title = null
        let searchButton = null;
        let rightButton = null;

        if (!this.props.hideBackButton) {
            var onback = this.props.onPressBackButton;
            if (onback == null) {
                onback = () => { Actions.pop() }
            }

            backButton = <TouchableOpacity
                style={styles.touchButton}
                onPress={onback}>
                <Image style={styles.backImage} source={images.backIcon} />
            </TouchableOpacity>;
        }

        title = <Text style={styles.title}>{this.props.title}</Text>
        

        if (this.props.rightButtonTitle != null) {
            var onRight = this.props.onPressRightButton;
            if (onRight == null) {
                onRight = () => { Actions.pop() }
            }

            rightButton = <TouchableOpacity
                style={styles.touchButton}
                onPress={onback}>
                <Text style={styles.rightTitle}>{this.props.rightButtonTitle}</Text>
            </TouchableOpacity>;
        } else if (!this.props.hideSearchButton) {
            var onSearch = this.props.onPressSearchButton;
            if (onSearch == null) {
                onSearch = () => { Actions.pop() }
            }

            searchButton = <TouchableOpacity
                style={styles.touchButton}
                onPress={onback}>
                <Image style={styles.searchImage} source={images.icon59} />
            </TouchableOpacity>;
        }

        return (
            <View style={styles.container}>
                {backButton}
                {title}
                {rightButton}
                {searchButton}
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
    touchButton: {
        marginTop: 15, 
        paddingLeft: 5, 
        paddingRight: 5,
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backImage: {
        width: 40,
        height: 40,
    },
    title: {
        flex: 1,
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 4,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    searchImage: {
        width: 33,
        height: 33,
        marginRight: 5,
    },
    rightTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        marginRight: 7,
    },
    iPhoneXTopView: {
        width: '100%',
        height: 20,
    },
});

export default SimpleNavigationBar;
