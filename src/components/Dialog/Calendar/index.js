import React, { Component } from 'react';
import { View, ActivityIndicator, Text, TextInput, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';
import Modal from "react-native-modal";
import images from 'images'
import * as constants from 'constants/index'
import { Calendar } from 'react-native-calendars';
import moment from 'moment'

/**
 * props:
 * - data: list of data to be suggestions
 * - displayingField: selected field of data to be displaying in suggestions
 */

class Picker extends Component {

    constructor(props) {
        super(props)

        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 1);
        var date = moment(currentDate).format("YYYY-MM-DD")
        console.log(date);

        this.state = {
            data: props.data,
            selectedDate: date
        }
    }

    onDayPress(day) {
        this.setState({
            selectedDate: day.dateString
        });

        if (this.props.onSelect) {
            this.props.onSelect('calendar', day)
        }

        if (this.props.hide) {
            this.props.hide()
        }
    }

    render() {
        
        return (
            <View style={{ margin: 10 }}>
                <Calendar
                    // Initially visible month. Default = Date()
                    //current={'2012-03-01'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    //minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    //maxDate={'2012-05-30'}
                    markedDates={{
                        [this.state.selectedDate]: { selected: true },
                    }}
                    
                    theme={{
                        //backgroundColor: '#ffffff',
                        //calendarBackground: '#ffffff',
                        //textSectionTitleColor: 'red',
                        selectedDayBackgroundColor: constants.colors.MAIN_RED,
                        //selectedDayTextColor: 'red',
                        todayTextColor: constants.colors.MAIN_RED,
                        // dayTextColor: '#2d4150',
                        // textDisabledColor: '#d9e1e8',
                        // dotColor: '#00adf5',
                        // selectedDotColor: 'red',
                        arrowColor: constants.colors.MAIN_RED,
                        // monthTextColor: 'blue',
                        // textDayFontFamily: 'monospace',
                        // textMonthFontFamily: 'monospace',
                        // textDayHeaderFontFamily: 'monospace',
                        textDayFontSize: 13,
                        textMonthFontSize: 13,
                        textDayHeaderFontSize: 13,
                    }}

                    onDayPress={this.onDayPress.bind(this)}
                />
            </View>)
    }
}

export default Picker;
