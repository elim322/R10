import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import { FavesContext } from "../../context/FavesContext/FavesProvider";

const Faves = ({ sessions }) => {
  return (
    <View style={styles.container}>
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

export default Faves;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
