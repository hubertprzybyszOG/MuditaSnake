import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SnakeButtons from "../SnakeButtons";
import SnakeWindow from "../SnakeWindow";

const BOARD_SIZE = 12;

const PREVIEW_SNAKE = [
  { x: 5, y: 6 },
  { x: 4, y: 6 },
  { x: 3, y: 6 },
] as const;

const PREVIEW_FOOD = { x: 8, y: 6 };

const PREVIEW_OCCUPIED_CELLS = new Set(
  PREVIEW_SNAKE.map((segment) => `${segment.x}:${segment.y}`),
);

export default function SnakeGameScreen() {
  return (
    <SafeAreaView edges={["top", "right", "bottom", "left"]} style={styles.safeArea}>
      <View style={styles.container}>
        <SnakeWindow
          boardSize={BOARD_SIZE}
          food={PREVIEW_FOOD}
          occupiedCells={PREVIEW_OCCUPIED_CELLS}
          score={0}
          snake={[...PREVIEW_SNAKE]}
        />
        <SnakeButtons onTurnPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 32,
  },
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "space-between",
    gap: 12,
    backgroundColor: "#ffffff",
  },
});
