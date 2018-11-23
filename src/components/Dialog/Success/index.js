import React, { Component } from 'react';
import { View, ActivityIndicator, Text, TextInput, StyleSheet, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';
import Modal from "react-native-modal";
import images from 'images'
import * as constants from 'constants/index'
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls';


/**
 * props:
 * - data: list of data to be suggestions
 * - displayingField: selected field of data to be displaying in suggestions
 */

class Success extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: props.data,
            displayingField: props.displayingField,
            pausedVideo: false,
        }
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.titleText}>Reason / Remark</Text>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et.</Text>
            <Text style={styles.titleText}>Address</Text>
            <Text style={styles.contentText}>ABC Road No. 123. RT 000 / RW 000</Text>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <View>
                    <Text style={styles.titleText}>Date</Text>
                    <Text style={styles.contentText}>01 January 2018</Text>
                </View>

                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.titleText}>Time</Text>
                    <Text style={styles.contentText}>12:12 WIB</Text>
                </View>
            </View>
            {/* <Image source={require('src/res/AllScreenIcons/homeBanner.png')} style={styles.imageView} resizeMode='cover' /> */}

            <View style={styles.videoView}>
            <VideoPlayer source={{ uri: "http://techslides.com/demos/sample-videos/small.mp4" }}   // Can be a URL or a local file.
                //poster="https://baconmockup.com/300/200/" // uri to an image to display until the video plays
                ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                rate={1.0}                              // 0 is paused, 1 is normal.
                volume={1.0}                            // 0 is muted, 1 is normal.
                muted={false}                           // Mutes the audio entirely.
                //paused={this.state.pausedVideo}                          // Pauses playback entirely.
                resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                repeat={true}                           // Repeat forever.
                playInBackground={false}                // Audio continues to play when app entering background.
                playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                //ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                //progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                //onLoadStart={this.loadStart}            // Callback when video starts to load
                //onLoad={this.setDuration}               // Callback when video loads
                //onProgress={this.setTime}               // Callback every ~250ms with currentTime
                //onEnd={this.onEnd}                      // Callback when playback finishes
                //onError={this.videoError}               // Callback when video cannot be loaded
                //onBuffer={this.onBuffer}                // Callback when remote video is buffering
                //onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                //controls={true} 
                controlTimeout={1500}
                disableBack={true}
                disableFullscreen={false}
                />
            </View>
            

        </View>
    }
}

export default Success;
