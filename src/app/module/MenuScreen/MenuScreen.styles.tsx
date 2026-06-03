import { ButtonRadius, Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "space-between",
    gap: 12,
    backgroundColor: "#ffffff",
  },
  centeredScreen: {
    alignItems: "center",
    justifyContent: "center",
  },
  snakeIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },
  snakeSegment: {
    width: 26,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -5,
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#111111",
  },
  snakeHead: {
    marginLeft: 0,
    borderRadius: 999,
  },
  snakeBody: {
    borderRadius: 8,
  },
  snakeTail: {
    width: 22,
    height: 22,
    borderRadius: 6,
  },
  eyeRow: {
    flexDirection: "row",
    gap: 5,
  },
  eye: {
    width: 5,
    height: 5,
    borderRadius: 999,
    backgroundColor: "#ffffff",
  },
  primaryButton: {
    minWidth: 160,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ButtonRadius,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
  primaryButtonText: {
    color: Colors.textSecondary,
    fontFamily: Fonts.mono,
    fontSize: 12,
    letterSpacing: 2,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default styles;
