import React, { Component } from "react";
import Schedule from "./Schedule";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator } from "react-native";
import { formatSessionData } from "../../lib/dataFormatHelpers";

const ALL_SESSIONS = gql`
  query allSessions {
    allSessions {
      startTime
      location
      title
      description
      speaker {
        name
        image
      }
    }
  }
`;
class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };
  render() {
    return (
      <Query query={ALL_SESSIONS}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return `${error}`;
          if (data) {
            return <Schedule sessions={formatSessionData(data.allSessions)} />;
          }
        }}
      </Query>
    );
  }
}

export default SessionContainer;
