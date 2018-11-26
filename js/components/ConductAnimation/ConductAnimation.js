import React, { Component } from "react";
import { Text, View, TouchableOpacity, Animated, Easing } from "react-native";
import styles from "./styles";

export default class ConductItem extends Component {
  duration = 750;
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      opacity: new Animated.Value(0)
    };
  }
}
