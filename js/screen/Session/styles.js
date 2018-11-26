import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  location: {
    color: "#999"
  },
  heart: {
    position: "absolute",
    right: 8,
    top: 10
  },
  title: {
    fontSize: 27,
    paddingTop: 10
  },
  startTime: {
    color: "#cf392a",
    paddingTop: 10
  },
  description: {
    fontSize: 16,
    paddingTop: 10
  },
  speaker: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  presented: {
    paddingTop: 10
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
    lineHeight: 15 * 1.5
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
    alignSelf: "center"
  }
});

export default styles;
