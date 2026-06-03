import { ButtonRadius, Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "space-between",
    gap: 12,
    backgroundColor: "transparent",
  },
  centeredScreen: {
    alignItems: "center",
    justifyContent: "center",
  },
  scoresCard: {
    width: "80%",
    maxHeight: 280,
    gap: 12,
  },
  title: {
    color: "#000000",
    fontFamily: Fonts.lato.bold,
    fontSize: 24,
    textAlign: "center",
    textTransform: "uppercase",
  },
  scoresScroll: {
    alignSelf: "stretch",
  },
  scoresList: {
    gap: 8,
    paddingVertical: 4,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: ButtonRadius,
    borderWidth: 1,
    borderColor: "#000000",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  scorePosition: {
    width: 32,
    color: Colors.textSecondary,
    fontFamily: Fonts.mono,
    fontSize: 12,
    letterSpacing: 2,
    textAlign: "center",
  },
  scoreDetails: {
    flex: 1,
    gap: 2,
  },
  scoreValue: {
    color: Colors.textSecondary,
    fontFamily: Fonts.mono,
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  scoreDate: {
    color: Colors.textSecondary,
    fontFamily: Fonts.mono,
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  deleteButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ButtonRadius,
    borderWidth: 1,
    borderColor: "#000000",
  },
  deleteButtonText: {
    color: Colors.textSecondary,
    fontFamily: Fonts.mono,
    fontSize: 12,
    letterSpacing: 2,
    lineHeight: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  emptyScores: {
    color: "#000000",
    fontFamily: Fonts.lato.regular,
    fontSize: 16,
    textAlign: "center",
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
