import React, { Component } from "react";
import About from "./About";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import { ActivityIndicator } from "react-native";

const ALL_CONDUCTS = gql`
  query Conduct {
    allConducts {
      title
      description
    }
  }
`;

class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <Query query={ALL_CONDUCTS}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return `${error}`;
          if (data) {
            return <About data={data.allConducts} />;
          }
        }}
      </Query>
    );
  }
}

export default AboutContainer;
