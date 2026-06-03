import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Logo } from "@/components/logo";
import { SnakeLogo } from "@/components/snake-logo";
import { ThemedView } from "@/components/themed-view";
import { Colors, Fonts, Spacing } from "@/constants/theme";

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
