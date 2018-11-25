import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import { FavesContext } from "../../context/FavesContext/FavesProvider";
import styles from "./styles";

const Faves = ({ faves }) => {
  return (
    <View style={styles.container}>
      <SectionList
        renderItem={({ item }) => (
          <View style={styles.separator}>
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>
                {item.location}
                {props.faveIds.find(fave => fave === item.id) && (
                  <Ionicon name={"ios-heart"} color={globalStyles.red.color} />
                )}
              </Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>
            {moment(section.title).format("LT")}
          </Text>
        )}
        sections={faves}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default Faves;
