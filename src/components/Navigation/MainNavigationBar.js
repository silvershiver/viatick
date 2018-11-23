//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, Animated } from 'react-native';
import * as constants from 'constants/index'
import SearchBar from 'components/CustomViews/SearchBar'
import BaseNavigation from './BaseNavigation'
import images from 'images'
import { Actions } from 'react-native-router-flux'


/*
props:
- leftIcon : bool
- onLeftPress : func
- rightIcon : bool
- onRightPress : func
- title
will show logo if title = ''
- showSearch : bool
*/

// create a component
class NavigationBar extends BaseNavigation {

    constructor(props) {
        super(props);
        this.state = {
            noColor: props.noColor ? props.noColor : false,
        }
    }

    subRender() {
        let leftView = null
        let rightView = null
        let middleView = null
        let clearAll = null
        let saveView = null

        let pressLeft = this.props.onLeftPress ? this.props.onLeftPress : () => Actions.pop()

        leftView = <TouchableOpacity
            style={styles.touch}
            onPress={this.props.leftIcon ? pressLeft : null}>
            {this.props.leftIcon ? <Image style={styles.icon} resizeMode='contain' source={this.props.leftIcon} /> : null}
        </TouchableOpacity>;

        if (this.props.showSearch) {
            rightView = <View style={{
                flexDirection: "row",
                height: '100%',
            }}>
                <Animated.View style={[{ width: 1, height: '100%', backgroundColor: 'white' }, this.props.styleLine]} />
                <TouchableOpacity
                    style={styles.touchSearch}
                    onPress={this.props.onRightPress}>
                    {<Image style={styles.iconSearch} resizeMode='contain' source={images.searchWhite} />}
                </TouchableOpacity>
            </View>
        } else {
            rightView = <TouchableOpacity
                style={styles.touch}
                onPress={this.props.onRightPress}>
                {this.props.rightIcon ? <Image style={styles.icon} resizeMode='contain' source={this.props.rightIcon} /> : null}
            </TouchableOpacity>
        }

        middleView = <Text numberOfLines={2} style={styles.textTitle}>{this.props.title}</Text>


        if (this.props.showLogo) {
            middleView = (
                <Image
                style={styles.logoTitle}
                resizeMode="contain"
                source={images.logo}
              />
            );
        }

        if (this.props.clearAll) {
            clearAll = <TouchableOpacity
                style={[styles.touchSearch, { width: 100, position: 'absolute', right: 0 }]}
                onPress={this.props.onRightPress}>
                {<Image style={styles.clearAllImage} resizeMode='contain' source={images.btnClearAll} />}
            </TouchableOpacity>
        }

        if (this.props.save) {
            saveView = <TouchableOpacity
                style={[styles.touchSearch, { width: 90, position: 'absolute', right: 0 }]}
                onPress={this.props.onRightPress}>
                {<Image style={styles.clearAllImage} resizeMode='contain' source={images.btnSaveNav} />}
            </TouchableOpacity>
        }

        return (<View style={[styles.container, this.props.style]}>
            {leftView}
            {middleView}
            {rightView}
            {clearAll}
            {saveView}
        </View>);
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        // alignSelf: 'stretch',
    },
    touch: {
        height: '100%',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchSearch: {
        height: '100%',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 18,
        height: 18,
    },
    iconSearch: {
        width: 22,
        height: 22,
    },
    logoTitle: {
        flex: 1,
        height: 25,
      },
    textTitle: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
    },
    clearAllImage: {
        width: 85,
        height: 34,
    }
});

//make this component available to the app
export default NavigationBar;
