import React, { Component } from "react";
import Schedule from "./Schedule";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator } from "react-native";
import { formatSessionData } from "../../lib/dataFormatHelpers";
import FavesContext from "../../context/FavesContext/FavesProvider";

const GET_SCHEDULE = gql`
  query allSessions {
    allSessions {
      startTime
      title
      location
      id
    }
  }
`;

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query query={GET_SCHEDULE}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return `${error}`;
          if (data) {
            return (
              <FavesContext.Consumer>
                {({ faveIds }) => (
                  <Schedule
                    sessions={formatSessionData(data.allSessions)}
                    navigation={this.props.navigation}
                    faveIds={faveIds}
                  />
                )}
              </FavesContext.Consumer>
            );
          }
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
