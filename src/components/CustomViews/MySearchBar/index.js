import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import images from 'images'

/*
props:
- placeholder : string
- onSearch: func
*/

class MySearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchKey: props.searchKey ? props.searchKey : ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            searchKey: nextProps.searchKey ? nextProps.searchKey : ''
        })
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TextInput
                    value={this.state.searchKey}
                    style={styles.textInput}
                    placeholder={this.props.placeholder}
                    onChangeText={(text) => {
                        if (text == '') {
                            this.clear()
                        } else {
                            this.setState({ searchKey: text })
                        }
                    }}
                    underlineColorAndroid='#0000'
                    onSubmitEditing={() => {
                        this.onSubmitEditing()
                    }}
                />
                {
                    this.state.searchKey == '' ? null :
                        <TouchableOpacity style={styles.touch} onPress={this.clear.bind(this)}>
                            <Image style={styles.icon} resizeMode='contain' source={images.iconCloseCircleGray} />
                        </TouchableOpacity>
                }
                {
                    this.props.hideSearch ? null :
                        <TouchableOpacity style={styles.touch} onPress={this.search.bind(this)}>
                            <Image style={styles.icon} resizeMode='contain' source={images.searchGray} />
                        </TouchableOpacity>
                }
            </View>
        );
    }

    onSubmitEditing() {
        if (this.props.onSubmitEditing) {
            this.props.onSubmitEditing(this.state.searchKey)
        }
    }

    search() {
        if (this.state.searchKey.length == 0) {
            this.clear()
            return
        }
        if (this.props.onSearch) {
            this.props.onSearch(this.state.searchKey)
        }
    }

    clear() {
        this.setState({
            searchKey: '',
        })
        if (this.props.onClear) {
            this.props.onClear()
        }
    }
}

export default MySearchBar;
