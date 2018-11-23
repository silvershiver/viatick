//import liraries
import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Dimensions
} from 'react-native';
import CategoryGridView from './CategoryGridView'


// create a component
class GridViewEx extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                { key: 'row 1' },
                { key: 'row 2' },
                { key: 'row 3' },
                { key: 'row 4' },
                { key: 'row 5' },
                { key: 'row 6' },
                { key: 'row 7' },
                { key: 'row 8' },
                { key: 'row 9' },
                { key: 'row 10' },
                { key: 'row 11' },
                { key: 'row 12' },
                { key: 'row 13' },
                { key: 'row 14' },
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                    <CategoryGridView
                        data={this.state.data}
                    />
                </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    grid: {
        width: '100%',
        flex: 1,
        backgroundColor: 'red',
    },
});

//make this component available to the app
export default GridViewEx;
