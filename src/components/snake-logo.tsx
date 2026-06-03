import { StyleSheet, View, type StyleProp, type ViewProps, type ViewStyle } from "react-native";

import { Colors } from "@/constants/theme";

const CELL = 18;
const GAP = 2;

// Tail at bottom-left, head at top-right — classic arcade zigzag
const SNAKE_GRID = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0],
  [1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0],
];

const HEAD_ROW = 0;
const HEAD_COL = 4;

const GRID_WIDTH = SNAKE_GRID[0].length * CELL + (SNAKE_GRID[0].length - 1) * GAP;
const GRID_HEIGHT = SNAKE_GRID.length * CELL + (SNAKE_GRID.length - 1) * GAP;

export type SnakeEyeDirection = "up" | "right" | "down" | "left";

type SnakeSegmentProps = {
  direction?: SnakeEyeDirection;
  isHead?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function SnakeSegment({
  direction = "right",
  isHead = false,
  style,
}: SnakeSegmentProps) {
  return (
    <View style={[styles.segment, style]}>
      {isHead ? <View style={[styles.eye, eyePosition[direction]]} /> : null}
    </View>
  );
}

const eyePosition = StyleSheet.create({
  up: {
    right: 3,
    top: 3,
  },
  right: {
    right: 3,
    top: 3,
  },
  down: {
    bottom: 3,
    right: 3,
  },
  left: {
    left: 3,
    top: 3,
  },
});

export function SnakeLogo({ style, ...rest }: ViewProps) {
  return (
    <View
      accessibilityLabel="Snake logo"
      style={[styles.logo, style]}
      {...rest}
    >
      {SNAKE_GRID.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (!cell) {
            return null;
          }

          const isHead = rowIndex === HEAD_ROW && colIndex === HEAD_COL;

          return (
            <SnakeSegment
              key={`${rowIndex}-${colIndex}`}
              isHead={isHead}
              style={[
                styles.logoCell,
                {
                  left: colIndex * (CELL + GAP),
                  top: rowIndex * (CELL + GAP),
                },
              ]}
            />
          );
        }),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: GRID_HEIGHT,
    position: "relative",
    width: GRID_WIDTH,
  },
  logoCell: {
    height: CELL,
    position: "absolute",
    width: CELL,
  },
  segment: {
    backgroundColor: Colors.backgroundSelected,
    height: "100%",
    width: "100%",
  },
  eye: {
    backgroundColor: Colors.background,
    height: 4,
    position: "absolute",
    width: 4,
  },
});
