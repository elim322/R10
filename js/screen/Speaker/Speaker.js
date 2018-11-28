import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";

const Speaker = ({ speaker, navigation }) => {
  return (
    <View style={styles.modalContainer}>
      <Text
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        X
      </Text>
      <Text style={styles.modalTitle}>About the Speaker</Text>
      <ScrollView style={styles.modalContent}>
        <View style={styles.profile}>
          <Image style={styles.speaker} source={{ uri: speaker.image }} />
          <Text style={styles.name}>{speaker.name}</Text>
        </View>
        <Text style={styles.bio}>{speaker.bio}</Text>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(speaker.url);
          }}
        >
          <LinearGradient
            colors={["#9963ea", "#8797D6"]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.button}
          >
            <Text style={styles.buttonTitle}>Read More on Wikipedia</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Speaker;
