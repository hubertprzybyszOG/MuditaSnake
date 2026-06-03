import { ButtonRadius, Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 320,
    alignSelf: "center",
    paddingBottom: 24,
    backgroundColor: "#ffffff",
  },
  row: {
    flexDirection: "row",
    gap: 24,
  },
  button: {
    flex: 1,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ButtonRadius,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
  buttonPressed: {
    backgroundColor: "#f5f5f5",
  },
  buttonText: {
    color: Colors.textSecondary,
    fontFamily: Fonts.mono,
    fontSize: 12,
    letterSpacing: 2,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default styles;
