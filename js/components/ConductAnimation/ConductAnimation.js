import React, { Component } from "react";
import { Text, View, TouchableOpacity, Animated, Easing } from "react-native";
import styles from "./styles";

class ConductAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      opacity: new Animated.Value(0)
    };
  }

  onPress = () => {
    const toggleShow = !this.state.show;
    this.startAnimation(toggleShow);
    this.setState({
      show: !this.state.show
    });
  };

  startAnimation() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 800,
      easing: Easing.elastic(0.5)
    }).start();
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.title}>{`${this.state.show ? "-" : "+"} ${
            this.props.data.title
          }`}</Text>
        </TouchableOpacity>
        {this.state.show && (
          <Animated.Text style={{ opacity: this.state.opacity }}>
            {this.props.data.description}
          </Animated.Text>
        )}
      </View>
    );
  }
}
export default ConductAnimation;
