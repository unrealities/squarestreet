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
    height: 40,
    width: "9%"
  },
  cellGridContainer: {
    alignContent: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  cellText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
