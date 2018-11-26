import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator, Text } from "react-native";
import Speaker from "./Speaker";

const GET_SPEAKER = gql`
  query allSpeakers {
    allSpeakers {
      image
      bio
      url
      name
    }
  }
`;
class SpeakerContainer extends Component {
  static navigationOptions = {
    title: "Speaker"
  };
  render() {
    return (
      <Query query={GET_SPEAKER}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>error</Text>;
          if (data) {
            console.log(data);
            return <Speaker data={data.Speaker} />;
          }
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;
