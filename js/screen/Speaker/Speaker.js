import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  Linking
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";

class Speaker extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: true
    };
  }
  setModalVisible() {
    console.log(this.state.modalVisible);
    this.setState({ modalVisible: !this.state.modalVisible });
  }
  render() {
    return (
      <View style={styles.modalContainer}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <TouchableOpacity onPress={() => this.setModalVisible()}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>About the Speaker</Text>
          <View style={styles.modalContent}>
            <View>
              <Image source={{ uri: this.props.speaker.image }} />
              <Text>{this.props.speaker.name}</Text>
              <Text>{this.props.speaker.bio}</Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(this.props.speaker.url);
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
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Speaker;
