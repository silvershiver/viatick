import React, { Component } from 'react';
import { View, ActivityIndicator, Text, TextInput, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';
import Modal from "react-native-modal";
import images from 'images'
import * as constants from 'constants/index'

/**
 * props:
 * - data: list of data to be suggestions
 * - displayingField: selected field of data to be displaying in suggestions
 */

class Failed extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: props.data,
            displayingField: props.displayingField,
        }
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.titleText}>Reason / Remark</Text>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et.</Text>
            <Text style={styles.titleText}>Address</Text>
            <Text style={styles.contentText}>ABC Road No. 123. RT 000 / RW 000</Text>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={styles.titleText}>Date</Text>
                    <Text style={styles.contentText}>01 January 2018</Text>
                </View>

                <View style={{ marginLeft: 20}}>
                    <Text style={styles.titleText}>Time</Text>
                    <Text style={styles.contentText}>12:12 WIB</Text>
                </View>

            </View>
        </View>
    }
}

export default Failed;
