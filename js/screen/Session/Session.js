import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, Button, Image } from "react-native";
import moment from "moment";
import styles from "./styles";
import FavesContext from "../../context/FavesContext/FavesProvider";

const Session = ({ data, createFave, deleteFave, faveIds, navigation }) => {
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
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Speaker", { id: item.id });
        }}
        underlayColor="#e6e6e6"
        activeOpacity={0.7}
      >
        <Text>
          <Image source={{ uri: data.speaker.image }} />
          {data.speaker.name}
        </Text>
      </TouchableHighlight>

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
