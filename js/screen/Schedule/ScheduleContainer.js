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
      title
      location
    }
  }
`;

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query query={ALL_SESSIONS}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return `${error}`;
          if (data) {
            return <Schedule data={formatSessionData(data.allSessions)} />;
          }
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
