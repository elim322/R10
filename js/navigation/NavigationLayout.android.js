import React from "react";
import AboutScreen from "../screen/About";
import FavesScreen from "../screen/Faves";
import ScheduleScreen from "../screen/Schedule";
import MapScreen from "../screen/Map";
import SessionScreen from "../screen/Session";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";
import { Text, View } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,

    Faves: FavesStack,

    Map: MapStack,

    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerLabel: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "About") {
          iconName = `md-information-circle`;
        } else if (routeName === "Map") {
          iconName = `md-map`;
        } else if (routeName === "Schedule") {
          iconName = `md-calendar`;
        } else if (routeName === "Faves") {
          iconName = `md-heart`;
        }
        return (
          <View>
            <Ionicons name={iconName} size={20} color={tintColor} />
            <Text>{routeName}</Text>
          </View>
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#999",
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);
