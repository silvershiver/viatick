import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as constants from 'constants/index'
import styles from './styles'

/*
props:
- title : string
- onPress: func
- boderLeft: bool
- boderTop: bool
- boderRight: bool
*/

class SubTab extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        var flex = { flex : 1 }
        if (this.props.flex != null) {
            flex.flex = this.props.flex
        }

        return (
            <View style={[flex, styles.container, this.borderStyle()]}>
                <TouchableOpacity style={styles.touch} onPress={this.props.onPress}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    borderStyle() {
        var borderStyle = {}

        if (this.props.borderLeft) {
            borderStyle.borderLeftWidth = constants.dimens.SUB_TAB_BORDER_WIDTH
            borderStyle.borderLeftColor = 'white'
        }
        if (this.props.borderTop) {
            borderStyle.borderTopWidth = constants.dimens.SUB_TAB_BORDER_WIDTH
            borderStyle.borderTopColor = 'white'
        }
        if (this.props.borderRight) {
            borderStyle.borderRightWidth = constants.dimens.SUB_TAB_BORDER_WIDTH
            borderStyle.borderRightColor = 'white'
        }

        return borderStyle;
    }
}

export default SubTab;
