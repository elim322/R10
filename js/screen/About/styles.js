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
    justifyContent: "center",
    padding: 10
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
    maxHeight: "10%",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontFamily: montserrat
  },
  body: {
    fontSize: 20,
    fontFamily: montserratLight
  }
});
export default styles;
