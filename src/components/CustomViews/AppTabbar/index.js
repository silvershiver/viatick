//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import TabButton from '../TabButton';
import { Actions } from 'react-native-router-flux';
import images from 'images'
import { isIPhoneX } from 'utils/isIPhoneX'

// create a component
class AppTabbar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <TabButton imageSource={images.tabHome} title="Beranda" onPress={() => { Actions.TabHome() }} />
                    <View style={styles.seperate_line} />
                    <TabButton imageSource={images.tabMessage} title="Pesan" onPress={() => { Actions.TabMessage() }} />
                    <View style={styles.seperate_line} />
                    <TabButton imageSource={images.tabCart} title="Keranjang" onPress={() => { Actions.TabCart() }} />
                    <View style={styles.seperate_line} />
                    <TabButton imageSource={images.tabNotification} title="Notifikasi" onPress={() => { Actions.TabNotification() }} />
                    <View style={styles.seperate_line} />
                    <TabButton imageSource={images.tabSupport} title="Bantuan" onPress={() => { Actions.TabSupport() }} />
                </View>
                {this.iPhoneXBottomView()}
            </View>
        );
    }

    iPhoneXBottomView() {
        if (isIPhoneX()) {
            return <View style={styles.iPhoneXBottomView} />
        }
        return null
    }
}

//make this component available to the app
export default AppTabbar;
