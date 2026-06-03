import { Text, View } from "react-native";

import { Logo } from "@/components/logo";
import { SnakeSegment } from "@/components/snake-logo";

import type { Direction, Position } from "../game-types";
import styles from "./SnakeWindow.styles";
import { SnakeWindowProps } from "./SnakeWindow.types";

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
