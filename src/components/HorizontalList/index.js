//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Dimensions, FlatList } from 'react-native';

/* props
- onPress
- showsHorizontalScrollIndicator
- data
- itemWidth
- leftRightMargin
*/

class HorizontalList extends Component {

    constructor(props) {
        super(props);

        var margin = this.props.margin != null ? this.props.margin : 0
        var marginLeft = this.props.marginLeft != null ? this.props.marginLeft : 0
        var marginRight = this.props.marginRight != null ? this.props.marginRight : 0

        if (marginLeft == 0) {
            marginLeft = margin
        }
        if (marginRight == 0) {
            marginRight = margin
        }

        this.state = {
            data: this.props.data,
            margin: margin,
            marginLeft: marginLeft,
            marginRight: marginRight,
        }

        this.itemStyle = this.itemStyle.bind(this)
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                style={this.props.style}
                removeClippedSubviews={false}
                renderItem={({ item, index, separators }) => <View style={this.itemStyle(index, this.state.margin, this.state.marginLeft, this.state.marginRight).item}>
                    {this.itemView(item, index, separators)}
                </View>}
                showsHorizontalScrollIndicator={this.props.showsHorizontalScrollIndicator}
                horizontal={true}
                onRefresh={() => { this.onRefresh() }}
                refreshing={false}
                keyExtractor={(item, index) => index.toString()}
                ref={(ref) => { this.mainList = ref }}
            />
        );
    }



    onRefresh() {
        console.log('hello world');
    }

    itemStyle(index, margin, marginLeft, marginRight) {

        var marginL = 0;
        var marginR = 0;

        if (index == 0) {
            marginL = marginLeft
        } else if (index == this.state.data.length - 1) {
            marginL = margin
            marginR = marginRight
        } else {
            marginL = margin
        }

        let style = StyleSheet.create({
            item: {
                marginLeft: marginL,
                marginRight: marginR,
            }
        })

        return style
    }
}




export default HorizontalList;
