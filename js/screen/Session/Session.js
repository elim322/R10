import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  SectionList,
  StatusBar,
  Platform
} from "react-native";
import moment from "moment";
import styles from "./styles";

const Session = ({ data }) => {
  return (
    <View>
      <Text>
        {data.location}
        <Ionicons name="ios-heart" size={"horizontal" ? 20 : 25} color="red" />
      </Text>
      <Text>{data.title}</Text>
      <Text>{moment(data.startTime).format("LT")}</Text>
      <Text>{data.description}</Text>
      <Text>Presented By:</Text>
      <Text>
        <Image height={50} width={50} source={data.speaker.image} />
        {data.speaker.name}
      </Text>
      <Button title="Remove from Faves" />
    </View>
  );
};

export default Session;
