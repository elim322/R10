import React, { Component } from "react";
import realm, {
  createFaves,
  deleteFaves,
  queryAllFaves
} from "../../config/models";
const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }
  getFavedSessionsIds() {
    const getAllFaves = realm.objects("Faves");
    this.setState({ faveIds: getAllFaves });
  }

  componentDidMount() {
    this.getFavedSessionsIds();
  }

  render() {
    return (
      <FavesContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
  // more code will go here!
}
export { FavesProvider };
export default FavesContext;
