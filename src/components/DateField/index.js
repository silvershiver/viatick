import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from './styles'
import images from 'images'
import { Actions } from 'react-native-router-flux';
var moment = require('moment');

DATE_MODE = {
    Month: 0,
    Date: 1,
}

export { DATE_MODE }

export default class DateField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: props.date ? props.date : null,
            mode: props.mode ? props.mode : DATE_MODE.Month,
            dates: []
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.date != this.props.date) {
            this.setState({
                date: newProps.date ? newProps.date : null,
            })
        }
        if (newProps.mode != this.props.mode) {
            this.setState({
                mode: newProps.mode ? newProps.mode : DATE_MODE.Month,
            })
        }
    }

    render() {
        const { mode, date, dates } = this.state;

        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity style={styles.containerTouch}
                    onPress={() => { this.selectDate() }}>
                    {this.flightIcon()}
                    {this.content()}
                </TouchableOpacity>
            </View>
        );
    }

    flightIcon() {
        const { dates } = this.state;
        if (this.props.flight && dates != null && dates.length > 0) {
            return <Image style={styles.iconFlight}
                resizeMode='contain'
                source={dates.length == 1 ? images.oneWay : images.twoWay} />
        }
        return null
    }

    content() {
        const { mode, date, dates } = this.state;
        if (mode == DATE_MODE.Month && date != null) {
            return <Text style={styles.title}>{date.month != null ? date.month.name : ''} {date.year}</Text>
        }
        else if (mode == DATE_MODE.Date && dates != null && dates[0] != null && dates[1] != null) {
            return <Text style={styles.title}>{moment(dates[0].timestamp).format('DD MMM YYYY')} - {moment(dates[1].timestamp).format('DD MMM YYYY')}{this.showNights(dates)}</Text>
        }
        else if (mode == DATE_MODE.Date && dates != null && dates[0] != null) {
            return <Text style={styles.title}>{moment(dates[0].timestamp).format('DD MMM YYYY')}</Text>
        }
        return <Text style={styles.titleGray}>Date</Text>
    }

    showNights(dates) {
        if (this.props.showNights) {
            var start = moment(dates[0].timestamp);
            var end = moment(dates[1].timestamp);
            var duration = moment.duration(end.diff(start));
            var days = duration.asDays();
            return ', ' + days + ' Nights'
        }
    }

    monthCallback = (date) => {
        this.setState({
            date: date
        })
    }

    datesCallback = (dates) => {
        this.setState({
            dates: dates
        })
    }

    selectDate() {
        if (this.state.mode == DATE_MODE.Month) {
            var props = {
                callback: this.monthCallback,
                selectedDate: this.state.date,
            }
            Actions.push('SelectMonthPage', props)
        }
        else if (this.state.mode == DATE_MODE.Date) {
            var props = {
                callback: this.datesCallback,
                selectedDates: this.state.dates,
                flight: this.props.flight
            }
            Actions.push('SelectDatePage', props)
        }
    }

}