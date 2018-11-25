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

const Schedule = ({ sessions }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SectionList
        renderItem={({ item }) => (
          <View style={styles.separator}>
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>
                {item.location}
                <Ionicons
                  name="ios-heart"
                  size={"horizontal" ? 20 : 25}
                  color="red"
                />
              </Text>
            </View>
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
    backgroundColor: "#e6e6e6",
    height: 25,
    paddingTop: 5,
    paddingLeft: 5
  },
  content: {
    paddingTop: 5,
    paddingBottom: 5
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "#e6e6e6"
  },
  title: {
    paddingLeft: 5,
    fontWeight: "400",
    fontSize: 16
  },
  location: {
    paddingLeft: 5,
    color: "#999999"
  }
});
