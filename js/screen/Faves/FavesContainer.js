import React, { Component } from "react";
import Faves from "./Faves";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { FavesContext } from "../../context/FavesContext/FavesProvider";
import { ActivityIndicator } from "react-native";

const GET_FAVES = gql`
  query($filter: SessionFilter) {
    allSessions(filter: $filter) {
      id
      title
      startTime
      location
      speaker {
        name
      }
    }
  }
`;

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <Query query={GET_FAVES} variables={{ filter: { id_in: faveIds } }}>
            {({ loading, error, data }) => {
              if (loading) return <ActivityIndicator />;
              if (error) return `${error}`;
              if (data) {
                return <Faves sessions={formatSessionData(data.allSessions)} />;
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
