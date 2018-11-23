import React, { Component } from 'react';
import { BackHandler, StatusBar, Platform } from 'react-native'
import { Actions } from 'react-native-router-flux'


class ParentScreen extends Component {

    componentDidMount() {
        
        //StatusBar.setBarStyle('light-content', true)
        if (Platform.OS == 'android') {
            StatusBar.setTranslucent(true)
            StatusBar.setBackgroundColor('#0000')
        }
    }

    componentWillUnmount() {
        StatusBar.setHidden(false)
    }

    /*
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
    }

    backAndroid() {
        Actions.pop() // Return to previous screen
        return true // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
    }
    */
}


export default ParentScreen;