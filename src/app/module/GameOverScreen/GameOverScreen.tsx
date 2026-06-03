import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { BackHandler, Pressable, Text, View } from "react-native";

import { SnakeLogo } from "@/components/snake-logo";
import styles from "./GameOverScreen.styles";

export default function GameOverScreen() {
  const { score } = useLocalSearchParams<{ score?: string }>();

  useEffect(() => {
    const backSubscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        router.replace("/menu");

        return true;
      }
    );

    return () => backSubscription.remove();
  }, []);

  return (
    <View style={[styles.container, styles.centeredScreen]}>
      <SnakeLogo />
      <Text style={styles.title}>Game over</Text>
      <Text style={styles.score}>Score: {score ?? 0}</Text>
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
