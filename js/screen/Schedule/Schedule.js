import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  StatusBar,
  Platform
} from "react-native";

const Schedule = ({ sessions }) => {
  console.log(sessions);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SectionList
        renderItem={({ item, index }) => <Text item={item} index={index} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{sessions.title}</Text>
        )}
        sections={sessions}
        keyExtractor={(item, index) => item.title}
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
