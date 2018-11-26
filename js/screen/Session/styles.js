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
  container: {
    padding: 10
  },
  location: {
    color: "#999",
    fontFamily: montserratLight
  },
  heart: {
    position: "absolute",
    right: 8,
    top: 10
  },
  title: {
    fontSize: 27,
    paddingTop: 10,
    fontFamily: montserrat
  },
  startTime: {
    color: "#cf392a",
    paddingTop: 10
  },
  description: {
    fontSize: 16,
    paddingTop: 10,
    fontFamily: montserratLight
  },
  speaker: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  presented: {
    paddingTop: 10,
    fontFamily: montserrat
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 25,
    alignItems: "center"
  },
  buttonTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 14.5,
    lineHeight: 15 * 1.5,
    fontFamily: montserrat
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  modalContent: {
    marginTop: 50
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
  }
});

export default styles;
