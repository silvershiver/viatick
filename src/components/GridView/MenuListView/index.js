import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import MyFlatList from 'MyFlatList'
import * as constants from 'constants/index'
import styles from './styles'
import images from 'images'

class MenuListView extends MyFlatList {

    defaultValues() {
        return {
            parentWidth: constants.dimens.MENU_WIDTH,
            column: 1,
            margin: 0,
            itemHeight: 51,
            showsVerticalScrollIndicator: false,
            hidePullToRefresh: true,
        }
    }

    itemView(item, index, separators) {

        var moreImage = null;
        if (item.more) {
            moreImage = <Image style={styles.moreImage} resizeMode='cover' source={images.iconMenuMore} />
        }

        var divider = null;
        //if (item.divider) {
            divider = <View style={styles.line} />
        //}

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.containerTouch}
                    onPress={() => { this.props.onPress(item, index, separators)}}>
                    <View style={styles.container2}>
                        {item.dot ? <View style={[{ backgroundColor: constants.colors.GRAY_TEXT }, styles.dot]} /> : <View style={[{ backgroundColor: '#0000' }, styles.dot]}  />}
                        <Text style={styles.name}>{item.name}</Text>
                        {/* {item.noti > 0 ? <Text style={styles.noti}>{item.noti}</Text> : null} */}
                        <Text style={styles.noti}>{item.noti > 0 ? item.noti : ''}</Text>
                        <Image style={styles.moreImage} resizeMode='contain' source={images.rightDetail}/>
                    </View>
                </TouchableOpacity>
                {divider}
            </View>
        );
    }

    icon(item) {
        if (item.icon) {
            return <Image style={styles.icon} resizeMode='cover' source={item.icon} />
        }
        return <View style={styles.icon} />
    }

    header() {
        return (<View style={styles.header} />)
    }

    footer() {
        return (<View style={styles.footer} />)
    }
}

export default MenuListView;
