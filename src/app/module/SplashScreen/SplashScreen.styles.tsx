import { Colors, Fonts, Spacing } from "@/constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "transparent",
  },
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    gap: Spacing.three,
  },
  subtitle: {
    color: Colors.textSecondary,
    fontFamily: Fonts.mono,
    fontSize: 12,
    letterSpacing: 2,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default styles;
