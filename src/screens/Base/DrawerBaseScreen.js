//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DrawerScreen from '../../components/SlideMenu/DrawerScreen'
import MainNavigationBar from '../../components/Navigation/MainNavigationBar'

// create a component
class DrawerBaseScreen extends Component {
    render() {
        return <DrawerScreen
            ref={(ref) => this.drawerScreen = ref}
            titleView={this.titleView()}
            contentView={this.contentView()} />
    }

    // implement on subclass
    contentView() {
        return <Text>DrawerBaseScreen</Text>
    }

    titleView() {
        return <MainNavigationBar title='Base Screen' isShowLeftDrawerButton={true} onPressLeftDrawerButton={() => {
            this.drawerScreen.toggleControlPanel()
        }} />
    }
}

//make this component available to the app
export default DrawerBaseScreen;
