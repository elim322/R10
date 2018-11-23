import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

const Faves = () => {
  return (
    <View style={styles.container}>
      <SectionList
        renderItem={({ item, index, section }) => (
          <Text key={index}>{item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        sections={[
          { title: "9:00am", data: ["item1", "item2"] },
          { title: "10:00am", data: ["item3", "item4"] },
          { title: "11:00am", data: ["item5", "item6"] }
        ]}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default Faves;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
