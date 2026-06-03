import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Logo } from "@/components/logo";
import { SnakeLogo } from "@/components/snake-logo";
import styles from "./MenuScreen.styles";

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
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Best scores"
        onPress={() => router.push("/scores")}
        style={styles.primaryButton}
      >
        <Text style={styles.primaryButtonText}>Best scores</Text>
      </Pressable>
    </View>
  );
}
