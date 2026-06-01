import { Pressable, StyleSheet, Text, View } from "react-native";

import { ButtonRadius, Fonts } from "@/constants/theme";

import type { Turn } from "../SnakeGame/SnakeGame";

type SnakeButtonsProps = {
  onTurnPress: (turn: Turn) => void;
};

const BUTTONS: Array<{ turn: Turn; label: string }> = [
  { turn: "left", label: "Left" },
  { turn: "right", label: "Right" },
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
            style={styles.button}
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
    alignItems: "center",
    gap: 6,
    backgroundColor: "#ffffff",
    marginBottom: 32,
  },
  row: {
    flexDirection: "row",
    gap: 16,
  },
  button: {
    minWidth: 112,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ButtonRadius,
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
  buttonText: {
    color: "#000000",
    fontFamily: Fonts.lato.bold,
    fontSize: 16,
    textTransform: "uppercase",
  },
});
