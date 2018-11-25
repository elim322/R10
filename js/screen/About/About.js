import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import styles from "./styles";

const About = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../assets/images/r10_logo.png")} />
      </View>
      <Text style={styles.body}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.title}>Date and Venue</Text>
      <Text style={styles.body}>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver BC.
      </Text>
      <Text style={styles.title}>Code of Conduct</Text>
      <FlatList
        data={data.allConducts}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default About;
