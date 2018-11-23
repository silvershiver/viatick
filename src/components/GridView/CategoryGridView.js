import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MyFlatList from 'MyFlatList'
import * as constants from '../../constants'


class CategoryGridView extends MyFlatList {
    
    defaultValues() {
        return {
            parentWidth: Dimensions.get('window').width,
            column: 3,
            margin: 10,
            itemHeight: 45,
            showsVerticalScrollIndicator: true,
        }
    }

    itemView(item, index, separators) {
        return (
            <Text style={{ flex: 1, borderColor: 'black', borderWidth: 1, backgroundColor: 'green' }}>{item.key}</Text>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: constants.colors.ORANGE,
    }
});

export default CategoryGridView;
