import { Pressable, StyleSheet, Text, View } from "react-native";

import { ButtonRadius, Fonts } from "@/constants/theme";

type SnakeMenuProps = {
  onStartPress: () => void;
};

export default function SnakeMenu({ onStartPress }: SnakeMenuProps) {
  return (
    <View style={[styles.container, styles.centeredScreen]}>
      <Text style={styles.title}>Snake</Text>
      <View
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={styles.snakeIcon}
      >
        <View style={[styles.snakeSegment, styles.snakeHead]}>
          <View style={styles.eyeRow}>
            <View style={styles.eye} />
            <View style={styles.eye} />
          </View>
        </View>
        <View style={[styles.snakeSegment, styles.snakeBody]} />
        <View style={[styles.snakeSegment, styles.snakeBody]} />
        <View style={[styles.snakeSegment, styles.snakeTail]} />
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="New game"
        onPress={onStartPress}
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
  title: {
    color: "#000000",
    fontFamily: Fonts.lato.bold,
    fontSize: 28,
    textTransform: "uppercase",
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
