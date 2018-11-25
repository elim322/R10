import Realm from "realm";

const Faves = {
  name: "Faves",
  primaryKey: "id",
  properties: {
    id: "string",
    faved_on: "date"
  }
};

const realm = new Realm({ schema: [Faves] });

export default realm;
