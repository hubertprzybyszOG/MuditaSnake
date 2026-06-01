import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { MaxContentWidth, Spacing } from "@/constants/theme";
import SnakeGame from "./module/SnakeGame";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <SnakeGame />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: Spacing.two,
    paddingTop: Spacing.two,
    alignItems: "center",
    paddingBottom: Spacing.two,
    maxWidth: MaxContentWidth,
  },
});
