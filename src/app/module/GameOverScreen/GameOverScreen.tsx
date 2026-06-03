import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { SnakeLogo } from "@/components/snake-logo";
import styles from "./GameOverScreen.styles";

export default function GameOverScreen() {
  return (
    <View style={[styles.container, styles.centeredScreen]}>
      <SnakeLogo />
      <Text style={styles.title}>Game over</Text>
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
