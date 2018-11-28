import React, { Component } from "react";
import Speaker from "./Speaker";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Speaker"
  };
  render() {
    const speaker = this.props.navigation.getParam("speaker");
    return <Speaker speaker={speaker} navigation={this.props.navigation} />;
  }
}

export default SessionContainer;
