import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#009aff",
    flex: 1,
    font: 24,
    justifyContent: "center",
  },
  cellContainer: {
    height: 50,
    width: 50
  },
  cellGridContainer: {
    alignContent: "stretch",
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  cellText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
