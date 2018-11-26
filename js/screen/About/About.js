import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import ConductAnimation from "../../components/ConductAnimation/ConductAnimation";
import PropTypes from "prop-types";

const About = ({ data }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logo}>
          <Image source={require("../../assets/images/r10_logo.png")} />
        </View>
        <Text style={styles.body}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.title}>Date and Venue</Text>
        <Text style={styles.body}>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver BC.
        </Text>
        <Text style={styles.title}>Code of Conduct</Text>

        {data.map((item, index) => {
          return <ConductAnimation data={item} />;
        })}
      </ScrollView>
    </View>
  );
};

About.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default About;
