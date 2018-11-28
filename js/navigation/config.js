import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableHighlight
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: "100%", width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerLeft: () => {
    if (Platform.OS === "android") {
      return (
        <TouchableHighlight onPress={() => navigation.toggleDrawer()}>
          <Ionicons color="white" name="md-menu" size={15} />
        </TouchableHighlight>
      );
    } else {
      return <Text />;
    }
  },
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerTitleStyle: {
    color: "white"
  }
});
