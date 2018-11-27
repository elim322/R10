import React, { Component } from "react";
import Speaker from "./Speaker";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Speaker"
  };
  render() {
    console.log(this.props.navigation.getParam("speaker"));
    return (
      <Speaker
        speaker={this.props.navigation.getParam("speaker")}
        navigation={this.props.navigation}
      />
    );
  }
}

export default SessionContainer;
