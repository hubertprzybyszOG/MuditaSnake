import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Logo } from "@/components/logo";
import { SnakeLogo } from "@/components/snake-logo";
import { ThemedView } from "@/components/themed-view";
import styles from "./SplashScreen.styles";

export default function SplashScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <SnakeLogo />
          <Logo />
          <Text style={styles.subtitle}>Classic bite-sized arcade</Text>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}
