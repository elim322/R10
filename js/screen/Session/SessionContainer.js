import React, { Component } from "react";
import Session from "./Session";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator } from "react-native";
import FavesContext from "../../context/FavesContext/FavesProvider";

const ONE_SESSION = gql`
  query Session($id: ID!) {
    Session(id: $id) {
      startTime
      location
      title
      description
      id
      speaker {
        name
        image
        id
        url
        bio
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
      <Query
        query={ONE_SESSION}
        variables={{ id: this.props.navigation.getParam("id") }}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return `${error}`;
          if (data) {
            return (
              <FavesContext.Consumer>
                {values => (
                  <Session
                    data={data.Session}
                    methods={values}
                    faveIds={values.faveIds}
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

export default SessionContainer;
