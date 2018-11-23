//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Dimensions, FlatList } from 'react-native';

/* props
- onPress
- parentWidth
- column
- margin
- itemHeight
- data
- noMarginStartEnd
- headerHeight
- footerHeight
- hidePullToRefresh
*/

class MyFlatList extends Component {

    constructor(props) {
        super(props);
        this.state = this.initState(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.initState(nextProps));
    }

    initState(props) {
        var parentWidth = props.parentWidth != null ? props.parentWidth : this.defaultValues().parentWidth
        var column = props.column != null ? props.column : this.defaultValues().column
        var margin = props.margin != null ? props.margin : this.defaultValues().margin
        var itemHeight = props.itemHeight != null ? props.itemHeight : this.defaultValues().itemHeight
        var noMarginStartEnd = props.noMarginStartEnd != null ? props.noMarginStartEnd : this.defaultValues().noMarginStartEnd
        var headerHeight = props.headerHeight != null ? props.headerHeight : this.defaultValues().headerHeight != null ? this.defaultValues().headerHeight : margin
        var footerHeight = props.footerHeight != null ? props.footerHeight : this.defaultValues().footerHeight != null ? this.defaultValues().footerHeight : margin
        var hidePullToRefresh = props.hidePullToRefresh != null ? props.hidePullToRefresh : this.defaultValues().hidePullToRefresh != null ? this.defaultValues().hidePullToRefresh : false
        return {
            data: props.data,
            gridStyles: this.gridStyles(parentWidth, column, margin, itemHeight, headerHeight, footerHeight),
            parentWidth,
            column,
            margin,
            itemHeight,
            noMarginStartEnd,
            hidePullToRefresh,
        };
    }

    render() {
        return (
            <View style={this.props.flex ? this.state.gridStyles.containerFlex : this.state.gridStyles.container}>
                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    removeClippedSubviews={false}
                    renderItem={({ item, index, separators }) => <View key={index} style={itemStyle(this.state.parentWidth, this.state.column, this.state.margin, this.state.itemHeight, index, this.state.noMarginStartEnd).item}>
                        {this.itemView(item, index, separators)}
                    </View>}
                    showsVerticalScrollIndicator={this.defaultValues().showsVerticalScrollIndicator}
                    numColumns={this.state.column}
                    ListHeaderComponent={this.header.bind(this)}
                    ListFooterComponent={this.footer.bind(this)}
                    ItemSeparatorComponent={this.renderSeparator.bind(this, this.state.margin)}
                    onRefresh={this.state.hidePullToRefresh ? null : () => { this.onRefresh() }}
                    refreshing={false}
                    keyExtractor={(item, index) => index.toString()}
                    keyboardShouldPersistTaps="always"
                    ref={(ref) => { this.mainList = ref }}
                />
            </View>
        );
    }

    onRefresh() {
        console.log('hello world');
    }

    renderSeparator = (margin) => {
        return (
            <View
                style={this.state.gridStyles.separator}
            />
        );
    };

    // overide on sub class
    defaultValues() {
        return {
            parentWidth: Dimensions.get('window').width,
            column: 1,
            margin: 0,
            itemHeight: 50,
            showsVerticalScrollIndicator: true,
            noMarginStartEnd: false,
        }
    }

    // overide on sub class
    itemView(item, index, separators) {
        return null
    }

    // overide on sub class
    header() {
        return <View style={this.state.gridStyles.header}></View>
    }

    // overide on sub class
    footer() {
        return <View style={this.state.gridStyles.footer}></View>
    }

    gridStyles(parentWidth, column, margin, itemHeight, headerHeight, footerHeight) {
        return StyleSheet.create({
            container: {
                //flex: 1,
                width: parentWidth,
            },
            containerFlex: {
                flex: 1,
                width: parentWidth,
            },
            list: {
                flexDirection: 'row',
                flexWrap: 'wrap'
            },
            separator: {
                height: margin,
                width: '100%',
            },
            header: {
                width: '100%',
                height: headerHeight,
            },
            footer: {
                width: '100%',
                height: footerHeight,
            }
        })
    }
}

const itemStyle = function (parentWidth, column, margin, itemHeight, index, noMarginStartEnd) {

    var marginLeft = margin
    var itemWidth = (parentWidth - ((column + 1) * margin)) / column

    if (noMarginStartEnd) {
        if (index % column == 0) {
            marginLeft = 0
        }
        itemWidth = (parentWidth - ((column - 1) * margin)) / column
    }

    return StyleSheet.create({
        item: {
            marginLeft: marginLeft,
            height: itemHeight,
            width: itemWidth,
        },
    })
}


const gridStyles = function (parentWidth, column, margin, itemHeight, headerHeight, footerHeight) {
    return StyleSheet.create({
        container: {
            flex: 1,
            width: parentWidth,
        },
        list: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        separator: {
            height: margin,
            width: '100%',
        },
        header: {
            width: '100%',
            height: headerHeight,
        },
        footer: {
            width: '100%',
            height: footerHeight,
        }
    })
}

export default MyFlatList;
