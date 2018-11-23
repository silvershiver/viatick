import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
import Modal from "react-native-modal";


class Loader extends Component {

    render() {
        return (
            <Modal
                animationIn='fadeIn'
                animationOut='fadeOut'
                transparent={true}
                animationInTiming={0}
                isVisible={this.props.loading}>
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <SkypeIndicator color='white' />
                        {/* <ActivityIndicator
                        animating={loading} /> */}
                    </View>
                </View>
            </Modal>
        );
    }
}


export default Loader;
