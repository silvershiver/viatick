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
*/


// create a component
class GridView extends Component {

    constructor(props) {
        super(props);
        var parentWidth = props.parentWidth == null ? this.defaultValues().parentWidth : props.parentWidth
        var column = props.column == null ? this.defaultValues().column : props.column
        var margin = props.margin == null ? this.defaultValues().margin : props.margin
        var itemHeight = props.itemHeight == null ? this.defaultValues().itemHeight : props.itemHeight
        this.gridStyles = gridStyles(parentWidth, column, margin, itemHeight)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.data),
        };
    }

    render() {
        return (
            <View style={this.gridStyles.container}>
                <ListView contentContainerStyle={this.gridStyles.list}
                    removeClippedSubviews={false}
                    enableEmptySections
                    stickySectionHeadersEnabled
                    dataSource={this.state.dataSource}
                    renderRow={(rowData, sectionID, rowID, highlightRow) => <View style={this.gridStyles.item}>{this.itemView(rowData, sectionID, rowID, highlightRow)}</View>}
                    renderHeader={this.header.bind(this)}
                    renderFooter={this.footer.bind(this)}
                    showsVerticalScrollIndicator={this.defaultValues().showsVerticalScrollIndicator}
                />
            </View>
        );
    }

    // overide on sub class
    defaultValues() {
        return {
            parentWidth: Dimensions.get('window').width,
            column: 1,
            margin: 0,
            itemHeight: 50,
            showsVerticalScrollIndicator: true,
        }
    }

    // overide on sub class
    itemView(rowData, sectionID, rowID, highlightRow) {
        return (
            <Text>{rowData}</Text>
        );
    }

    // overide on sub class
    header() {
        return null
    }

    // overide on sub class
    footer() {
        return null
    }

}

var gridStyles = function (parentWidth, column, margin, itemHeight) {
    return StyleSheet.create({
        container: {
            flex: 1,
            width: parentWidth,
        },
        list: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        item: {
            marginLeft: margin,
            marginTop: margin,
            height: itemHeight,
            width: (parentWidth - ((column + 1) * margin)) / column
        }
    })
}

export default GridView;
