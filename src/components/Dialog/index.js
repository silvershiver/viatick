import React, { Component } from 'react';
import { View, ActivityIndicator, Text, TextInput, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';
import Modal from "react-native-modal";
import images from 'images'
import * as constants from 'constants/index'
import Picker from './Picker'
import Calendar from './Calendar'
import Success from './Success'
import Fail from './Fail'

/**
 * props:
 * - isShow
 * - title
 * - data: list of data to be suggestions
 * - displayingField: selected field of data to be displaying in suggestions
 */



class Dialog extends Component {

    static DialogType = {
        picker: 1,
        calendar: 2,
        success: 3,
        fail: 4,
    }

    constructor(props) {
        super(props)

        this.state = {
            isShow: false,
            data: {},
            title: '',
            displayingField: props.displayingField,
            closeButton: false,
            dialogType: Dialog.DialogType.picker,
        }
    }

    render() {


        var freeMode = this.state.dialogType == Dialog.DialogType.success || this.state.dialogType == Dialog.DialogType.fail || this.state.dialogType == Dialog.DialogType.calendar

        return <TouchableWithoutFeedback onPress={() => {
            this.hide()
        }}>
            <Modal
                animationIn='fadeIn'
                animationOut='fadeOut'
                transparent={true}
                animationInTiming={0}
                isVisible={this.state.isShow}
                onBackdropPress={() => {
                    this.hide()
                }}
                avoidKeyboard={true}>

                <View style={freeMode ? styles.modalBackgroundFree : styles.modalBackground}>
                    <TouchableWithoutFeedback>
                        <View style={freeMode ? styles.contentFree : styles.content}>
                            <View style={styles.titleBg}>
                                <Text style={styles.titleText}>{this.state.title}</Text>
                                {this.closeOnTitle()}
                            </View>
                            <View style={freeMode ? styles.mainContentFree : styles.mainContent}>
                                {this.content()}
                                <View style={constants.styles.SHADOW_LINE} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
        </TouchableWithoutFeedback>
    }

    closeOnTitle() {
        if (this.state.closeButton) {
            return <TouchableOpacity 
                        style={styles.closeTouch} 
                        onPress={()=>{this.hide()}}>
                        <Image style={styles.closeImage}
                            resizeMode='contain'
                            source={images.closeWhite} />
            </TouchableOpacity>
        }
        return null
    }

    content() {
        switch (this.state.dialogType) {
            case Dialog.DialogType.picker:
                return <Picker 
                    data={this.state.data} 
                    displayingField={this.state.displayingField} 
                    onSelect={(tagName, selectedData) => this.props.onSelect(tagName, selectedData)}
                    hide={()=>{this.hide()}}/>
            break;
            case Dialog.DialogType.calendar:
                return <Calendar
                    data={this.state.data}
                    onSelect={(tagName, selectedData) => this.props.onSelect(tagName, selectedData)}
                    hide={() => { this.hide() }} />
            break;
            case Dialog.DialogType.success:
                return <Success
                    data={this.state.data}
                    hide={() => { this.hide() }} />
            break;
            case Dialog.DialogType.fail:
                return <Fail
                    data={this.state.data}
                    hide={() => { this.hide() }} />
            break;
        }

        return null
    }

    show(dialogType, data, displayingField, title) {

        var closeButton = dialogType == Dialog.DialogType.fail || dialogType == Dialog.DialogType.success

        this.setState({
            isShow: true,
            data: data,
            dialogType: dialogType,
            displayingField: displayingField,
            title: title,
            closeButton: closeButton,
        })
    }

    hide() {
        this.setState({ isShow: false })
    }
}

export default Dialog;
