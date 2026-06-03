import { Pressable, StyleSheet, Text, View } from "react-native";

import { ButtonRadius, Fonts } from "@/constants/theme";

import type { Turn } from "../game-types";

type SnakeButtonsProps = {
  onTurnPress: (turn: Turn) => void;
};

const BUTTONS: Array<{ turn: Turn; label: string }> = [
  { turn: "left", label: "LEFT" },
  { turn: "right", label: "RIGHT" },
];

export default function SnakeButtons({ onTurnPress }: SnakeButtonsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {BUTTONS.map((button) => (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Turn snake ${button.label.toLowerCase()}`}
            key={button.turn}
            onPress={() => onTurnPress(button.turn)}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>{button.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

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
