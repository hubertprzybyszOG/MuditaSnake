import type { Turn } from "../game-types";

export interface SnakeButtonsProps {
  onTurnPress: (turn: Turn) => void;
}

const BUTTONS: Array<{ turn: Turn; label: string }> = [
  { turn: "left", label: "LEFT" },
  { turn: "right", label: "RIGHT" },
];

export default BUTTONS;
