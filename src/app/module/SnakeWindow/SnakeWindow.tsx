import { StyleSheet, Text, View } from "react-native";

import { Logo } from "@/components/logo";
import { SnakeSegment } from "@/components/snake-logo";
import { Fonts } from "@/constants/theme";

import type { Direction, Position } from "../game-types";

type SnakeWindowProps = {
  boardSize: number;
  food: Position;
  occupiedCells: Set<string>;
  score: number;
  snake: Position[];
};

export default function SnakeWindow({
  boardSize,
  food,
  occupiedCells,
  score,
  snake,
}: SnakeWindowProps) {
  const head = snake[0];
  const headDirection = getHeadDirection(head, snake[1]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <Text style={styles.score}>Score: {score}</Text>
      </View>

      <View style={styles.board}>
        {Array.from({ length: boardSize }).map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {Array.from({ length: boardSize }).map((__, columnIndex) => {
              const position = { x: columnIndex, y: rowIndex };
              const cellKey = `${position.x}:${position.y}`;
              const isHead = head.x === position.x && head.y === position.y;
              const isSnake = occupiedCells.has(cellKey);
              const isFood = food.x === position.x && food.y === position.y;
              const isLastColumn = columnIndex === boardSize - 1;
              const isLastRow = rowIndex === boardSize - 1;

              return (
                <View
                  key={cellKey}
                  style={[
                    styles.cell,
                    !isLastColumn && styles.cellBorderRight,
                    !isLastRow && styles.cellBorderBottom,
                  ]}
                >
                  {isFood && !isSnake ? (
                    <View style={styles.food}>
                      <View style={styles.foodCore} />
                    </View>
                  ) : null}
                  {isSnake ? (
                    <SnakeSegment
                      direction={isHead ? headDirection : undefined}
                      isHead={isHead}
                      style={styles.snakeFill}
                    />
                  ) : null}
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

function getHeadDirection(head: Position, neck?: Position): Direction {
  if (!neck) {
    return "right";
  }

  if (head.x > neck.x) {
    return "right";
  }

  if (head.x < neck.x) {
    return "left";
  }

  if (head.y > neck.y) {
    return "down";
  }

  return "up";
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    gap: 20,
    backgroundColor: "#ffffff",
    paddingTop: 8,
  },
  header: {
    alignItems: "center",
    gap: 6,
    width: "100%",
  },
  title: {
    color: "#000000",
    fontFamily: Fonts.lato.bold,
    fontSize: 28,
    letterSpacing: 0.2,
  },
  score: {
    color: "#000000",
    fontFamily: Fonts.lato.regular,
    fontSize: 16,
  },
  board: {
    width: "100%",
    maxWidth: 320,
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  cellBorderRight: {
    borderRightWidth: 1,
    borderRightColor: "#000000",
  },
  cellBorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  snakeFill: {
    ...StyleSheet.absoluteFill,
  },
  food: {
    width: "68%",
    height: "68%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
  foodCore: {
    width: "42%",
    height: "42%",
    backgroundColor: "#000000",
  },
});
