import React, { Component } from "react";
import realm, {
  createFave,
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

  createFave(id) {
    realm.write(() => {
      const favedOn = new Date();
      realm.create("Faves", { id, favedOn });
    });
  }

  queryAllFaves() {
    realm.write(() => {
      let favs = realm.objects("Faves");
      this.setState({ faveIds: favs });
    });
  }

  deleteFaves(id) {
    realm.write(() => {
      realm.delete("Faves", { id: id }).then(() => {
        let favs = realm.objects("Faves");
        this.setState({ faveIds: favs });
      });
    });
  }

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          allFaves: this.allFaves,
          removeFave: this.removeFave,
          addFave: this.addFave
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export { FavesProvider };
export default FavesContext;
