import { useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { ButtonRadius, Fonts } from "@/constants/theme";

import SnakeButtons from "../SnakeButtons";
import SnakeMenu from "../SnakeMenu";
import SnakeWindow from "../SnakeWindow";

export type Direction = "up" | "right" | "down" | "left";
export type Position = {
  x: number;
  y: number;
};
export type Turn = "left" | "right";
type GamePhase = "start" | "playing" | "gameOver";

const BOARD_SIZE = 12;
const MOVE_INTERVAL_MS = 700;
const INITIAL_SNAKE: Position[] = [
  { x: 5, y: 6 },
  { x: 4, y: 6 },
  { x: 3, y: 6 },
];
const INITIAL_FOOD: Position = { x: 8, y: 6 };

const DIRECTION_OFFSET: Record<Direction, Position> = {
  up: { x: 0, y: -1 },
  right: { x: 1, y: 0 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
};

const TURN_DIRECTION: Record<Direction, Record<Turn, Direction>> = {
  up: { left: "left", right: "right" },
  right: { left: "up", right: "down" },
  down: { left: "right", right: "left" },
  left: { left: "down", right: "up" },
};

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Direction>("right");
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<GamePhase>("start");

  const occupiedCells = useMemo(
    () => new Set(snake.map((segment) => toCellKey(segment))),
    [snake]
  );

  const startGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection("right");
    setScore(0);
    setPhase("playing");
  }, []);

  const openMenu = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection("right");
    setScore(0);
    setPhase("start");
  }, []);

  const moveSnake = useCallback(
    (currentDirection: Direction) => {
      setSnake((currentSnake) => {
        const head = currentSnake[0];
        const offset = DIRECTION_OFFSET[currentDirection];
        const nextHead = { x: head.x + offset.x, y: head.y + offset.y };
        const ateFood = positionsEqual(nextHead, food);
        const nextBody = ateFood ? currentSnake : currentSnake.slice(0, -1);

        if (
          isOutsideBoard(nextHead) ||
          nextBody.some((segment) => positionsEqual(segment, nextHead))
        ) {
          setPhase("gameOver");
          return currentSnake;
        }

        const nextSnake = [nextHead, ...nextBody];

        setDirection(currentDirection);

        if (ateFood) {
          setScore((currentScore) => currentScore + 1);
          setFood(getNextFood(nextSnake));
        }

        return nextSnake;
      });
    },
    [food]
  );

  useEffect(() => {
    if (phase !== "playing") {
      return;
    }

    const intervalId = setInterval(() => {
      moveSnake(direction);
    }, MOVE_INTERVAL_MS);

    return () => {
      clearInterval(intervalId);
    };
  }, [direction, moveSnake, phase]);

  const turnSnake = useCallback(
    (turn: Turn) => {
      const nextDirection = TURN_DIRECTION[direction][turn];

      setDirection(nextDirection);
    },
    [direction]
  );

  if (phase === "start") {
    return <SnakeMenu onStartPress={startGame} />;
  }

  if (phase === "gameOver") {
    return (
      <View style={[styles.container, styles.centeredScreen]}>
        <Text style={styles.title}>Game over</Text>
        <Text style={styles.score}>Score: {score}</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="New game"
          onPress={startGame}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>New game</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Main menu"
          onPress={openMenu}
          style={styles.secondaryButton}
        >
          <Text style={styles.primaryButtonText}>Main menu</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SnakeWindow
        boardSize={BOARD_SIZE}
        food={food}
        occupiedCells={occupiedCells}
        score={score}
        snake={snake}
      />
      <SnakeButtons onTurnPress={turnSnake} />
    </View>
  );
}

function toCellKey(position: Position) {
  return `${position.x}:${position.y}`;
}

function positionsEqual(first: Position, second: Position) {
  return first.x === second.x && first.y === second.y;
}

function isOutsideBoard(position: Position) {
  return (
    position.x < 0 ||
    position.y < 0 ||
    position.x >= BOARD_SIZE ||
    position.y >= BOARD_SIZE
  );
}

function getNextFood(snake: Position[]) {
  const snakeCells = new Set(snake.map((segment) => toCellKey(segment)));

  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      const position = { x, y };

      if (!snakeCells.has(toCellKey(position))) {
        return position;
      }
    }
  }

  return INITIAL_FOOD;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "space-between",
    gap: 12,
    backgroundColor: "#ffffff",
  },
  centeredScreen: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#000000",
    fontFamily: Fonts.lato.bold,
    fontSize: 28,
    textTransform: "uppercase",
  },
  score: {
    color: "#333333",
    fontFamily: Fonts.lato.bold,
    fontSize: 18,
  },
  primaryButton: {
    minWidth: 160,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ButtonRadius,
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
  secondaryButton: {
    minWidth: 160,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ButtonRadius,
    borderWidth: 2,
    borderColor: "#666666",
    backgroundColor: "#ffffff",
  },
  primaryButtonText: {
    color: "#000000",
    fontFamily: Fonts.lato.bold,
    fontSize: 16,
    textTransform: "uppercase",
  },
});
