import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, Button, Image } from "react-native";
import moment from "moment";
import styles from "./styles";
import FavesContext from "../../context/FavesContext/FavesProvider";

const Session = ({ data, createFave, deleteFave, faveIds }) => {
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
        <Image source={{ uri: data.speaker.image }} />
        {data.speaker.name}
      </Text>

      <Button
        onPress={() => {
          createFave(data.id);
        }}
        style={styles.button}
        title="Add to Faves"
      />
      <Button
        onPress={() => {
          deleteFave(data.id);
        }}
        style={styles.button}
        title="Remove from Faves"
      />
    </View>
  );
};

export default Session;
