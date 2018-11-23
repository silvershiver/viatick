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

class Picker extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: props.data,
            displayingField: props.displayingField,
        }
    }

    render() {
        return <FlatList
            keyboardShouldPersistTaps="always"
            style={{ margin: 4 }}
            data={this.state.data}
            renderItem={(rowData) => {
                return (<TouchableOpacity style={styles.autocompleteItemList} onPress={() => {
                    this.props.onSelect(this.state.tagName, rowData.item)
                    this.props.hide()
                }}>
                    <Text style={styles.autocompleteTextItem}>{rowData.item[this.state.displayingField]}</Text>
                    <View style={styles.line} />
                </TouchableOpacity>)
            }}
            keyExtractor={(item, index) => index.toString()}
        />
    }
}

export default Picker;
