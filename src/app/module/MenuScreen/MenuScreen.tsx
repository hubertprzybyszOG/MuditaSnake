import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Logo } from "@/components/logo";
import { SnakeLogo } from "@/components/snake-logo";
import { ButtonRadius, Fonts } from "@/constants/theme";

export default function MenuScreen() {
  return (
    <View style={[styles.container, styles.centeredScreen]}>
      <SnakeLogo />
      <Logo />
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="New game"
        onPress={() => router.push("/game")}
        style={styles.primaryButton}
      >
        <Text style={styles.primaryButtonText}>New game</Text>
      </Pressable>
    </View>
  );
}

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
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
  primaryButtonText: {
    color: "#000000",
    fontFamily: Fonts.lato.bold,
    fontSize: 16,
    textTransform: "uppercase",
  },
});
