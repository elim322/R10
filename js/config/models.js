import Realm from "realm";

const Faves = {
  name: "Faves",
  primaryKey: "id",
  properties: {
    id: "int",
    faved_on: "date"
  }
};

const realm = new Realm({ schema: [Faves] });

export const createFaves = id => {
  realm.write(() => {
    realm.create("Faves", { id: id, faved_on: new Date() });
  });
};
export const removeFave = id => {
  let fave = realm.objects("Faves").filtered(`id ==$0`, id);
  realm.write(() => {
    realm.delete(fave);
  });
};

export const queryAllFaves = () => {
  return realm.objects("Faves");
};

export default realm;
