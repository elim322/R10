import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  Modal,
  TouchableOpacity,
  Platform
} from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";

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
    const iconName = Platform.select({
      ios: "ios-heart",
      android: "md-heart"
    });

    const modalIconName = Platform.select({
      ios: "ios-close",
      android: "md-close"
    });

    return (
      <View style={styles.container}>
        <Text style={styles.location}>{this.props.data.location}</Text>
        <Ionicons
          style={styles.heart}
          name={iconName}
          size={"horizontal" ? 20 : 25}
          color="red"
        />
        <Text style={styles.title}>{this.props.data.title}</Text>
        <Text style={styles.startTime}>
          {moment(this.props.data.startTime).format("LT")}
        </Text>
        <Text style={styles.description}>{this.props.data.description}</Text>
        <Text style={styles.presented}>Presented By:</Text>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
          underlayColor="#e6e6e6"
          activeOpacity={0.7}
        >
          <React.Fragment>
            <Image
              style={styles.speaker}
              source={{ uri: this.props.data.speaker.image }}
            />
            <Text style={styles.speakerName}>
              {this.props.data.speaker.name}
            </Text>
          </React.Fragment>
        </TouchableHighlight>

        <View>
          {this.props.faveIds.includes(this.props.data.id) ? (
            <TouchableOpacity
              onPress={() => {
                this.props.methods.deleteFave(this.props.data.id);
              }}
            >
              <LinearGradient
                colors={["#9963ea", "#8797D6"]}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.button}
              >
                <Text style={styles.buttonTitle}>Remove From Faves</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                this.props.methods.createFave(this.props.data.id);
              }}
            >
              <LinearGradient
                colors={["#9963ea", "#8797D6"]}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.button}
              >
                <Text style={styles.buttonTitle}>Add To Faves</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.modalContainer}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <TouchableHighlight
              onPress={() => this.setState({ modalVisible: false })}
            >
              <Ionicons
                style={styles.modalIcon}
                color={"#fff"}
                name={modalIconName}
              />
            </TouchableHighlight>
            <Text style={styles.modalTitle}>About the Speaker</Text>
            <View style={styles.modalContent}>
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

Session.propTypes = {};
export default Session;
