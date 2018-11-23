import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  StatusBar,
  Platform
} from "react-native";

const Schedule = ({ data }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SectionList
        renderItem={({ item, index, section }) => (
          <Text key={index}>{item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.header}>
            <Text>{title}</Text>
          </View>
        )}
        sections={[
          { title: "9:00am", data: ["item1", "item2"] },
          { title: "10:00am", data: ["item3", "item4"] },
          { title: "11:00am", data: ["item5", "item6"] }
        ]}
        keyExtractor={(item, index) => item + index}
      />
      <Ionicons name="ios-heart" size={"horizontal" ? 20 : 25} color="red" />
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start"
  },
  header: {
    fontWeight: "bold",
    backgroundColor: "#e6e6e6"
  }
});
