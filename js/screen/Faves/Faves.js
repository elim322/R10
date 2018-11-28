import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  SectionList,
  StatusBar,
  TouchableHighlight,
  Platform
} from "react-native";
import styles from "./styles";
import moment from "moment";
import PropTypes from "prop-types";

const iconName = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

const Faves = ({ faves, navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {faves.length > 0 ? (
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
                  <Ionicons
                    style={styles.heart}
                    name={iconName}
                    size={"horizontal" ? 15 : 15}
                    color="red"
                  />
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
      ) : (
        <Text style={styles.addFave}>Added Faves will appear here!</Text>
      )}
    </View>
  );
};

Faves.propTypes = {
  faves: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Faves;
