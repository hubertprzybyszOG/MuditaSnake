import type { Turn } from "../game-types";

export interface SnakeButtonsProps {
  onTurnPress: (turn: Turn) => void;
}

export const BUTTONS: Array<{ turn: Turn; label: string }> = [
  { turn: "left", label: "LEFT" },
  { turn: "right", label: "RIGHT" },
];
