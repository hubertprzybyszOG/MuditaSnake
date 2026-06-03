import type { Position } from "../game-types";

export interface SnakeWindowProps {
  boardSize: number;
  food: Position;
  occupiedCells: Set<string>;
  score: number;
  snake: Position[];
}
