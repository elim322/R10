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
import moment from "moment";
import styles from "./styles";

const Schedule = ({ sessions }) => {
  console.log(sessions);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SectionList
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
            <Ionicons
              name="ios-heart"
              size={"horizontal" ? 20 : 25}
              color="red"
            />
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>
            {moment(section.title).format("LT")}
          </Text>
        )}
        sections={sessions}
        keyExtractor={(item, index) => item + index}
      />
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
