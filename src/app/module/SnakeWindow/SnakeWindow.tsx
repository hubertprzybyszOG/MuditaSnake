import { StyleSheet, Text, View } from "react-native";

import { Fonts } from "@/constants/theme";

import type { Direction, Position } from "../SnakeGame/SnakeGame";

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
        <Text style={styles.title}>Snake</Text>
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

              return (
                <View
                  key={cellKey}
                  style={[
                    styles.cell,
                    (rowIndex + columnIndex) % 2 === 0 && styles.cellRaised,
                  ]}
                >
                  {isFood && !isSnake ? (
                    <View style={styles.food}>
                      <View style={styles.foodCore} />
                    </View>
                  ) : null}
                  {isSnake ? (
                    <View
                      style={[
                        styles.snakeSegment,
                        isHead ? styles.headCell : styles.snakeCell,
                      ]}
                    >
                      {isHead ? (
                        <View
                          style={[styles.eyeRow, getEyeRowStyle(headDirection)]}
                        >
                          <View style={styles.eye} />
                          <View style={styles.eye} />
                        </View>
                      ) : null}
                    </View>
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

function getEyeRowStyle(direction: Direction) {
  switch (direction) {
    case "up":
      return styles.eyeRowUp;
    case "right":
      return styles.eyeRowRight;
    case "down":
      return styles.eyeRowDown;
    case "left":
      return styles.eyeRowLeft;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 12,
    backgroundColor: "#ffffff",
  },
  header: {
    width: "100%",
    maxWidth: 304,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 2,
  },
  title: {
    color: "#000000",
    fontFamily: Fonts.lato.bold,
    fontSize: 24,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  score: {
    color: "#333333",
    fontFamily: Fonts.lato.bold,
    fontSize: 14,
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },
  board: {
    width: "100%",
    maxWidth: 304,
    aspectRatio: 1,
    gap: 3,
    padding: 7,
    borderWidth: 4,
    borderColor: "#000000",
    borderRadius: 24,
    backgroundColor: "#d7d7d7",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    gap: 3,
  },
  cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#c8c8c8",
    backgroundColor: "#f8f8f8",
  },
  cellRaised: {
    backgroundColor: "#ffffff",
  },
  snakeSegment: {
    width: "82%",
    height: "82%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 7,
    backgroundColor: "#111111",
  },
  snakeCell: {
    borderRadius: 6,
  },
  headCell: {
    backgroundColor: "#000000",
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#000000",
  },
  eyeRow: {
    position: "absolute",
    flexDirection: "row",
    gap: 3,
  },
  eyeRowUp: {
    top: 3,
  },
  eyeRowRight: {
    right: 3,
    flexDirection: "column",
  },
  eyeRowDown: {
    bottom: 3,
  },
  eyeRowLeft: {
    left: 3,
    flexDirection: "column",
  },
  eye: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#ffffff",
  },
  food: {
    width: "72%",
    height: "72%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 999,
    backgroundColor: "#ffffff",
  },
  foodCore: {
    width: "42%",
    height: "42%",
    borderRadius: 999,
    backgroundColor: "#000000",
  },
});
