import { router } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BackHandler, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SnakeButtons from "./SnakeButtons";
import { BOARD_SIZE, PREVIEW_SNAKE } from "./SnakeGameScreen.const";
import styles from "./SnakeGameScreen.styles";
import SnakeWindow from "./SnakeWindow";
import type { Direction, Position, Turn } from "./game-types";

const MOVE_INTERVAL_MS = 500;
const MOVE_INTERVAL_INCREMENT_MS = 5;
const BOARD_CELL_COUNT = BOARD_SIZE * BOARD_SIZE;

type GameEndReason = "completed" | "lost";

export default function SnakeGameScreen() {
  const [snake, setSnake] = useState<Position[]>(() => [...PREVIEW_SNAKE]);
  const snakeRef = useRef<Position[]>([...PREVIEW_SNAKE]);
  const [food, setFood] = useState<Position>(() =>
    getRandomFood(snakeRef.current)
  );
  const [gameEndReason, setGameEndReason] = useState<GameEndReason | null>(
    null
  );
  const directionRef = useRef<Direction>("right");
  const foodRef = useRef(food);

  const occupiedCells = useMemo(
    () => new Set(snake.map((segment) => getCellKey(segment))),
    [snake]
  );
  const score = snake.length - PREVIEW_SNAKE.length;
  const moveIntervalMs = MOVE_INTERVAL_MS + score * MOVE_INTERVAL_INCREMENT_MS;

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

  useEffect(() => {
    if (gameEndReason) {
      router.replace({
        pathname: "/game-over",
        params: { result: gameEndReason, score: String(score) },
      });
    }
  }, [gameEndReason, score]);

  const handleTurnPress = useCallback(
    (turn: Turn) => {
      if (gameEndReason) {
        return;
      }

      directionRef.current = getTurnedDirection(directionRef.current, turn);
    },
    [gameEndReason]
  );

  useEffect(() => {
    if (gameEndReason) {
      return;
    }

    const intervalId = setInterval(() => {
      const currentSnake = snakeRef.current;
      const nextHead = getNextHead(currentSnake[0], directionRef.current);

      if (isOutsideBoard(nextHead)) {
        setGameEndReason("lost");

        return;
      }

      const hasEatenFood = isSamePosition(nextHead, foodRef.current);
      const collisionSegments = hasEatenFood
        ? currentSnake
        : currentSnake.slice(0, -1);

      if (
        collisionSegments.some((segment) => isSamePosition(segment, nextHead))
      ) {
        setGameEndReason("lost");

        return;
      }

      const nextSnake = hasEatenFood
        ? [nextHead, ...currentSnake]
        : [nextHead, ...currentSnake.slice(0, -1)];

      snakeRef.current = nextSnake;
      setSnake(nextSnake);

      if (hasEatenFood) {
        if (nextSnake.length === BOARD_CELL_COUNT) {
          setGameEndReason("completed");

          return;
        }

        const nextFood = getRandomFood(nextSnake);
        foodRef.current = nextFood;
        setFood(nextFood);
      }
    }, moveIntervalMs);

    return () => clearInterval(intervalId);
  }, [gameEndReason, moveIntervalMs]);

  return (
    <SafeAreaView
      edges={["top", "right", "bottom", "left"]}
      style={styles.safeArea}
    >
      <View style={styles.container}>
        <SnakeWindow
          boardSize={BOARD_SIZE}
          food={food}
          occupiedCells={occupiedCells}
          score={score}
          snake={snake}
        />
        <SnakeButtons onTurnPress={handleTurnPress} />
      </View>
    </SafeAreaView>
  );
}

function getCellKey(position: Position) {
  return `${position.x}:${position.y}`;
}

function getNextHead(head: Position, direction: Direction): Position {
  switch (direction) {
    case "up":
      return { x: head.x, y: head.y - 1 };
    case "right":
      return { x: head.x + 1, y: head.y };
    case "down":
      return { x: head.x, y: head.y + 1 };
    case "left":
      return { x: head.x - 1, y: head.y };
  }
}

function getTurnedDirection(direction: Direction, turn: Turn): Direction {
  const directions: Direction[] = ["up", "right", "down", "left"];
  const directionIndex = directions.indexOf(direction);
  const turnOffset = turn === "right" ? 1 : -1;
  const nextIndex =
    (directionIndex + turnOffset + directions.length) % directions.length;

  return directions[nextIndex];
}

function getRandomFood(snake: Position[]): Position {
  const occupiedCells = new Set(snake.map((segment) => getCellKey(segment)));
  const availableCells: Position[] = [];

  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      const position = { x, y };

      if (!occupiedCells.has(getCellKey(position))) {
        availableCells.push(position);
      }
    }
  }

  if (availableCells.length === 0) {
    return snake[0];
  }

  return availableCells[Math.floor(Math.random() * availableCells.length)];
}

function isOutsideBoard(position: Position) {
  return (
    position.x < 0 ||
    position.x >= BOARD_SIZE ||
    position.y < 0 ||
    position.y >= BOARD_SIZE
  );
}

function isSamePosition(firstPosition: Position, secondPosition: Position) {
  return (
    firstPosition.x === secondPosition.x && firstPosition.y === secondPosition.y
  );
}
