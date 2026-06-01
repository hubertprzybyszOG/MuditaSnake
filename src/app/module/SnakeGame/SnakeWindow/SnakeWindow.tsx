import { StyleSheet, Text, View } from "react-native";

import { Fonts } from "@/constants/theme";

import type { Position } from "../SnakeGame";

type SnakeWindowProps = {
  boardSize: number;
  food: Position;
  occupiedCells: Set<string>;
  score: number;
  snake: Position[];
};

export function SnakeWindow({
  boardSize,
  food,
  occupiedCells,
  score,
  snake,
}: SnakeWindowProps) {
  const head = snake[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Snake</Text>
        <Text style={styles.score}>Punkty: {score}</Text>
      </View>

      <View style={styles.board}>
        {Array.from({ length: boardSize }).map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {Array.from({ length: boardSize }).map((__, columnIndex) => {
              const position = { x: columnIndex, y: rowIndex };
              const cellKey = `${position.x}:${position.y}`;
              const isHead =
                head.x === position.x && head.y === position.y;
              const isSnake = occupiedCells.has(cellKey);
              const isFood =
                food.x === position.x && food.y === position.y;

              return (
                <View
                  key={cellKey}
                  style={[
                    styles.cell,
                    isSnake && styles.snakeCell,
                    isHead && styles.headCell,
                    isFood && styles.foodCell,
                  ]}
                />
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
    backgroundColor: "#ffffff",
  },
  header: {
    width: "100%",
    maxWidth: 260,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#000000",
    fontFamily: Fonts.lato.bold,
    fontSize: 22,
    letterSpacing: 0.5,
  },
  score: {
    color: "#333333",
    fontFamily: Fonts.lato.bold,
    fontSize: 14,
  },
  board: {
    width: "100%",
    maxWidth: 260,
    aspectRatio: 1,
    borderWidth: 3,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d9d9d9",
    backgroundColor: "#ffffff",
  },
  snakeCell: {
    backgroundColor: "#000000",
  },
  headCell: {
    backgroundColor: "#000000",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  foodCell: {
    backgroundColor: "#666666",
  },
});
