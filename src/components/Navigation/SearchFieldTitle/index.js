import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import HorizontalList from 'src/components/HorizontalList'
import * as constants from 'constants/index'
import styles from './styles'
import images from 'images'
import BaseNavigation from '../BaseNavigation'

/*
props:
- title
*/

class SearchTitle extends BaseNavigation {

    constructor(props) {
        super(props);
        this.state = {
            noColor: true,
        }
    }

    subRender() {
        return (
            <View style={styles.container}>
                <Text numberOfLines={1} style={styles.title}>{this.props.title}</Text>
                {
                    this.props.onPress ?
                        <TouchableOpacity style={styles.touchClose}
                            onPress={() => { this.onPress() }}>
                            <Image style={styles.imageClose}
                                resizeMode='contain'
                                source={images.iconClose} />
                        </TouchableOpacity> : null
                }
            </View>
        );
    }

    onPress() {
        if (this.props.onPress) {
            this.props.onPress()
        }
    }
}

export default SearchTitle;
