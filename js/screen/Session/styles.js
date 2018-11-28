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
    fontSize: 24,
    paddingTop: 5,
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
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20
  },
  speaker: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  speakerName: {
    marginLeft: 10
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "#e6e6e6",
    marginBottom: 20
  },
  presented: {
    paddingTop: 10,
    fontFamily: montserrat
  },
  button: {
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
  }
});

export default styles;
