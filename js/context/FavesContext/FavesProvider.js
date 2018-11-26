import React, { Component } from "react";
import realm from "../../config/models";
const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }

  componentDidMount() {
    this.getFavedSessionIds();
  }
  getFavedSessionIds = () => {
    try {
      this.setState({ faveIds: this.getFaves() });
    } catch (err) {
      console.log(err);
    }
  };
  getFaves = () => {
    return realm.objects("Faves").map(elem => elem.id);
  };
  createFave(id) {
    console.log(realm);
    try {
      console.log(new Date());
      realm.write(() => {
        realm.create("Faves", { id: id, faved_on: new Date() });
      });
      this.queryAllFaves();
    } catch (e) {
      console.log(e);
    }
  }
  deleteFave(id) {
    try {
      realm.write(() => {
        const deleteId = realm.objects("Faves").filtered(`id ==$0`, id);
        realm.delete(deleteId);
      });
      this.queryAllFaves();
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          queryAllFaves: this.getFavedSessionIds,
          deleteFave: this.deleteFave,
          createFave: this.createFave
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export { FavesProvider };
export default FavesContext;
