import React from "react";
import { Text, View, Dimensions } from "react-native";
import MyFlatList from "MyFlatList";
import styles from "./styles";
import MyButton from "components/Mybutton";
import { Actions } from "react-native-router-flux";

class DeviceList extends MyFlatList {
  defaultValues() {
    return {
      parentWidth: Dimensions.get("window").width,
      column: 1,
      margin: 0,
      itemHeight: null,
      showsVerticalScrollIndicator: true,
      headerHeight: 50,
      footerHeight: 40,
    };
  }

  itemView(item, index, separators) {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.name}>{item.title}</Text>
          <Text style={styles.info}>{item.info}</Text>
        </View>
        <MyButton
          style={{ height: 52 }}
          width={85}
          title="EDIT"
          onPress={() => {
            Actions.push('DeviceEditPage', {device: item, callback: () => {Actions.pop()}})
          }}
        />
      </View>
    );
  }
}

export default DeviceList;
