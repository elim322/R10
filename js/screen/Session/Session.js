import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";

const iconName = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

const Session = ({ navigation, data, faveIds }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{data.location}</Text>
      <Ionicons
        style={styles.heart}
        name={iconName}
        size={"horizontal" ? 20 : 25}
        color="red"
      />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.startTime}>
        {moment(data.startTime).format("LT")}
      </Text>
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.presented}>Presented By:</Text>
      <Image style={styles.speaker} source={{ uri: data.speaker.image }} />
      <React.Fragment>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Speaker", { speaker: data.speaker });
          }}
        >
          <Text style={styles.speakerName}>{data.speaker.name}</Text>
        </TouchableOpacity>
      </React.Fragment>
      <View>
        {faveIds.includes(data.id) ? (
          <TouchableOpacity
            onPress={() => {
              methods.deleteFave(data.id);
            }}
          >
            <LinearGradient
              colors={["#9963ea", "#8797D6"]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
              style={styles.button}
            >
              <Text style={styles.buttonTitle}>Remove From Faves</Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              methods.createFave(data.id);
            }}
          >
            <LinearGradient
              colors={["#9963ea", "#8797D6"]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
              style={styles.button}
            >
              <Text style={styles.buttonTitle}>Add To Faves</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// Session.propTypes = {
//   data: PropTypes.string.isRequired,
//   methods: PropTypes.object.isRequired,
//   faveIds: PropTypes.id.isRequired
// };
export default Session;
