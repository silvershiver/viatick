import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import images from '../../../res/images'

/*
props:
- placeholder : string
- onSearch: func
*/

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchKey: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewInput}>
                    <Image style={styles.icon} resizeMode='contain' source={images.icon59} />
                    <TextInput
                        style={styles.textInput}
                        placeholder={this.props.placeholder}
                        onChangeText={(text) => this.setState({ searchKey: text })}
                        underlineColorAndroid='#0000'
                    />
                </View>
                <TouchableOpacity style={styles.searchButton} onPress={this.openSearch.bind(this)}>
                    <Text style={styles.searchText}>Cari</Text>
                </TouchableOpacity>
            </View>
        );
    }

    openSearch() {
        Actions.push('SearchScreen')
    }
}

export default SearchBar;
