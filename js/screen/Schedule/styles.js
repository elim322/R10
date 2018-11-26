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
    flex: 1,
    alignItems: "flex-start"
  },
  heart: {
    position: "absolute",
    right: 8,
    top: 23
  },
  header: {
    fontWeight: "bold",
    backgroundColor: "#e6e6e6",
    height: 25,
    paddingTop: 5,
    paddingLeft: 5,
    fontFamily: montserrat
  },
  content: {
    paddingTop: 5,
    paddingBottom: 5
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "#e6e6e6"
  },
  title: {
    paddingLeft: 5,
    fontWeight: "400",
    fontSize: 16,
    fontFamily: montserrat
  },
  location: {
    paddingLeft: 5,
    color: "#999999",
    fontFamily: montserratLight
  }
});

export default styles;
