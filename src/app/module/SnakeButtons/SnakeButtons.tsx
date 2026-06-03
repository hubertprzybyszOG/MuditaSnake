import { Pressable, Text, View } from "react-native";

import styles from "./SnakeButtons.styles";
import { BUTTONS, SnakeButtonsProps } from "./SnakeButtons.types";

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
