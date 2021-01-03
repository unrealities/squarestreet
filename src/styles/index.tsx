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
    width: "8.3%"
  },
  cellGridContainer: {
    alignContent: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  cellGridHeader: {
    flexDirection: "row",
    textAlign: "center",
    width: "100%"
  },
  cellHeader: {
    font: 32,
    height: 40,
    width: "8.3%"
  },
  cellText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
