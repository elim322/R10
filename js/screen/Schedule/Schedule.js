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
      <Text>{data.allSessions}</Text>
      {/* <SectionList
        renderItem={({ item, index }) => <Text item={item} index={index} />}
        renderSectionHeader={({ section: { item } }) => (
          <Text style={styles.header}>{item}</Text>
        )}
        sections={data.allSessions}
        keyExtractor={(item, index) => item.title}
      /> */}
      {/* <Ionicons name="ios-heart" size={"horizontal" ? 20 : 25} color="red" /> */}
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
