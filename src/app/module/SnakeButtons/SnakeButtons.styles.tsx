import { ButtonRadius, Fonts } from "@/constants/theme";
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
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
  buttonPressed: {
    backgroundColor: "#f5f5f5",
  },
  buttonText: {
    color: "#000000",
    fontFamily: Fonts.lato.bold,
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default styles;
