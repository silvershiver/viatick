import React from "react";
import { Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import MyFlatList from "MyFlatList";
import styles from "./styles";
import { Actions } from "react-native-router-flux";

class AppListView extends MyFlatList {
  defaultValues() {
    return {
      parentWidth: Dimensions.get("window").width - 70,
      column: 1,
      margin: StyleSheet.hairlineWidth,
      headerHeight: StyleSheet.hairlineWidth,
      footerHeight: 0,
      noMarginStartEnd: true,
      hidePullToRefresh: true
    };
  }

  itemView(item, index, separators) {
    var isBottom = false;
    if (index == this.props.data.length - 1) {
      isBottom = true;
    }

    var isSelected = false;
    if (item.title == this.props.selectedName) {
      isSelected = true;
    }

    return (
      <TouchableOpacity
        style={isBottom ? styles.touchContainer2 : styles.touchContainer1}
        onPress={() => {
            this.onSelect(item)
        }}
      >
        <Text style={isSelected ? styles.text1 : styles.text2}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  }

  onSelect(item) {
    if(this.props.onSelect) {
        this.props.onSelect(item)
    }
  }
}

export default AppListView;
