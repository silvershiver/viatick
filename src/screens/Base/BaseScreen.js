//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DrawerScreen from '../../components/SlideMenu/DrawerScreen'
import MainNavigationBar from 'components/Navigation/MainNavigationBar'
import { Actions } from 'react-native-router-flux';
import ParentScreen from 'screens/ParentScreen'
import images from 'images'
import * as constants from 'constants/index'

// create a component
class BaseScreen extends ParentScreen {

    render() {
        return (<View style={{flex: 1}}>
            {this.titleView()}
            <View style={{ flex: 1 }}>
                {this.contentView()}
                <View style={constants.styles.SHADOW_LINE}/>
            </View>
        </View>)
    }

    // implement on subclass
    contentView() {
        return <Text>Base Screen</Text>
    }
    
    titleView() {
        return <MainNavigationBar rightIcon={images.iconSidebar} onRightPress={() => {
            Actions.drawerOpen()
        }} />
    }
}

//make this component available to the app
export default BaseScreen;
