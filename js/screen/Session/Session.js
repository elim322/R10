import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  Modal
} from "react-native";
import moment from "moment";
import styles from "./styles";

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.data.location}
          <Ionicons
            name="ios-heart"
            size={"horizontal" ? 20 : 25}
            color="red"
          />
        </Text>
        <Text>{this.props.data.title}</Text>
        <Text>{moment(this.props.data.startTime).format("LT")}</Text>
        <Text>{this.props.data.description}</Text>
        <Text>Presented By:</Text>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
          underlayColor="#e6e6e6"
          activeOpacity={0.7}
        >
          <Text>
            <Image
              style={{ height: 50, width: 50 }}
              source={{ uri: this.props.data.speaker.image }}
            />
            {this.props.data.speaker.name}
          </Text>
        </TouchableHighlight>
        <View>
          <Button
            onPress={() => {
              this.props.createFave(this.props.data.id);
            }}
            style={styles.button}
            title="add fave"
          />
          <Button
            onPress={() => {
              this.props.deleteFave(this.props.data.id);
            }}
            style={styles.button}
            title="remove fave"
          />
        </View>
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <Image source={{ uri: this.props.data.speaker.image }} />
                <Text>{this.props.data.speaker.name}</Text>
                <Text>{this.props.data.speaker.bio}</Text>
                <Button title="Read more on Wikipedia" />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

export default Session;
