const BOARD_SIZE = 12;

const PREVIEW_SNAKE = [
  { x: 5, y: 6 },
  { x: 4, y: 6 },
  { x: 3, y: 6 },
] as const;

const PREVIEW_FOOD = { x: 8, y: 6 };

const PREVIEW_OCCUPIED_CELLS = new Set(
  PREVIEW_SNAKE.map((segment) => `${segment.x}:${segment.y}`)
);

export { BOARD_SIZE, PREVIEW_FOOD, PREVIEW_OCCUPIED_CELLS, PREVIEW_SNAKE };
