import { StyleSheet } from "react-native";
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
    paddingLeft: 5
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
    fontSize: 16
  },
  location: {
    paddingLeft: 5,
    color: "#999999"
  }
});

export default styles;
