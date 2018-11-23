import React, { Component } from "react";
import AppNavigator from "./navigation/RootStackNavigator";
import { FavesProvider } from "./context/FavesContext/FavesProvider";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";

// i  see u have realm version 2.19
// try downgrading to  "realm": "^2.15.3"
// urs is "realm": "^2.19.1"

// change replace urs then reinstall node modules and relink
// might b a problem with the newer version

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <AppNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
