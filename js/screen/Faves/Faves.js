import React from "react";
import { View, Text, SectionList } from "react-native";
import styles from "../Schedule/styles";

const Faves = ({ faves }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SectionList
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Session", { id: item.id });
            }}
            underlayColor="#e6e6e6"
            activeOpacity={0.7}
          >
            <View style={styles.separator}>
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
                {faveIds.find(item => item === item.id) && (
                  <Ionicons
                    name="ios-heart"
                    size={"horizontal" ? 20 : 25}
                    color="red"
                  />
                )}
              </View>
            </View>
          </TouchableHighlight>
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
