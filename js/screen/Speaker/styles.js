import { StyleSheet, Platform } from "react-native";
const montserratLight = Platform.select({
  ios: "Montserrat-light",
  android: "Montserrat-Light"
});
const montserrat = Platform.select({
  ios: "Montserrat",
  android: "Montserrat-Regular"
});
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  backButton: {
    color: "white"
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    marginHorizontal: 20,
    marginVertical: 50
  },
  modalTitle: {
    fontFamily: montserratLight
  },
  profile: {
    alignItems: "center",
    marginVertical: 20
  },
  bio: {
    color: "black",
    width: "90%",
    paddingLeft: 15,
    lineHeight: 20,
    marginVertical: 20,
    fontFamily: montserratLight
  },
  name: {
    color: "black",
    paddingTop: 10,
    fontFamily: montserratLight
  },
  speaker: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  modalIcon: {
    fontSize: 24,
    position: "absolute",
    left: 0,
    color: "black"
  },
  modalTitle: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: montserrat
  },
  speaker: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  button: {
    padding: 5,
    borderRadius: 25,
    marginHorizontal: 30,
    marginVertical: 20
  },
  buttonTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 14.5,
    lineHeight: 15 * 1.5,
    fontFamily: montserrat
  }
});

export default styles;
