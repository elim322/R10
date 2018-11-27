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
import styles from "../Schedule/styles";
import moment from "moment";
import PropTypes from "prop-types";

const iconName = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

const Faves = ({ faves, faveIds, navigation }) => {
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
                <Ionicons
                  style={styles.heart}
                  name={iconName}
                  size={"horizontal" ? 20 : 25}
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
    </View>
  );
};

// Faves.propTypes = {
//   description: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   startTime: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired
// };

export default Faves;
