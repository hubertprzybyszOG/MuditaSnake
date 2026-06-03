import { Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    gap: 20,
    backgroundColor: "#ffffff",
    paddingTop: 8,
  },
  header: {
    alignItems: "center",
    gap: 6,
    width: "100%",
  },
  title: {
    color: "#000000",
    fontFamily: Fonts.lato.bold,
    fontSize: 28,
    letterSpacing: 0.2,
  },
  score: {
    color: "#000000",
    fontFamily: Fonts.lato.regular,
    fontSize: 16,
  },
  board: {
    width: "100%",
    maxWidth: 320,
    aspectRatio: 1,
    borderWidth: 3,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  cellBorderRight: {
    borderRightWidth: 1,
    borderRightColor: "#000000",
  },
  cellBorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  snakeFill: {
    ...StyleSheet.absoluteFill,
  },
  food: {
    width: "68%",
    height: "68%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
  foodCore: {
    width: "42%",
    height: "42%",
    backgroundColor: "#000000",
  },
});

export default styles;
