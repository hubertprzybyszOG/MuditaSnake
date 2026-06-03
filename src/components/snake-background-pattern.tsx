import type { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

const TRAIL_PIXELS = [
  { left: 28, top: 82 },
  { left: 52, top: 106 },
  { left: 76, top: 106 },
  { left: 100, top: 130 },
  { left: 124, top: 154 },
  { left: 148, top: 154 },
  { left: 172, top: 178 },
  { right: 92, bottom: 156 },
  { right: 68, bottom: 132 },
  { right: 44, bottom: 132 },
  { right: 20, bottom: 108 },
];

const BORDER_PIXELS = [
  { left: 18, top: 42 },
  { left: 44, top: 42 },
  { left: 70, top: 42 },
  { left: 96, top: 42 },
  { right: 16, top: 72 },
  { right: 16, top: 98 },
  { right: 16, top: 124 },
  { right: 42, top: 124 },
  { right: 68, top: 124 },
  { right: 68, top: 150 },
  { right: 68, top: 176 },
  { left: 18, bottom: 52 },
  { left: 18, bottom: 78 },
  { left: 44, bottom: 78 },
  { left: 70, bottom: 78 },
];

const DOT_PIXELS = [
  { left: 32, top: 236 },
  { right: 44, top: 266 },
  { left: 82, top: 326 },
  { right: 118, top: 356 },
  { left: 64, bottom: 148 },
  { right: 96, bottom: 104 },
  { left: 164, bottom: 64 },
  { right: 36, bottom: 48 },
  { left: 212, top: 92 },
];

const APPLES = [
  { left: 38, bottom: 178 },
  { right: 48, top: 214 },
  { left: 118, top: 404 },
];

const HEAD_PIXELS = [
  { right: -12, bottom: 214 },
  { right: 20, bottom: 214 },
  { right: 52, bottom: 214 },
  { right: -12, bottom: 246 },
  { right: 20, bottom: 246 },
  { right: -12, bottom: 278 },
  { right: 20, bottom: 278 },
];

export function SnakeBackgroundPattern({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <View
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        pointerEvents="none"
        style={styles.pattern}
      >
        {TRAIL_PIXELS.map((pixel, index) => (
          <View
            key={`trail-${index}`}
            style={[styles.patternPixel, styles.trailPixel, pixel]}
          />
        ))}
        {BORDER_PIXELS.map((pixel, index) => (
          <View
            key={`border-${index}`}
            style={[styles.patternPixel, styles.borderPixel, pixel]}
          />
        ))}
        {DOT_PIXELS.map((pixel, index) => (
          <View key={`dot-${index}`} style={[styles.dotPixel, pixel]} />
        ))}
        {APPLES.map((apple, index) => (
          <View key={`apple-${index}`} style={[styles.apple, apple]}>
            <View style={styles.appleStem} />
          </View>
        ))}
        {HEAD_PIXELS.map((pixel, index) => (
          <View
            key={`head-${index}`}
            style={[styles.headPixel, index === 1 && styles.headEye, pixel]}
          />
        ))}
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  pattern: {
    ...StyleSheet.absoluteFill,
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
  patternPixel: {
    height: 18,
    position: "absolute",
    width: 18,
  },
  trailPixel: {
    backgroundColor: "#000000",
    opacity: 0.07,
  },
  borderPixel: {
    backgroundColor: "#000000",
    opacity: 0.1,
  },
  dotPixel: {
    backgroundColor: "#000000",
    height: 8,
    opacity: 0.08,
    position: "absolute",
    width: 8,
  },
  apple: {
    backgroundColor: "#000000",
    borderRadius: 5,
    height: 18,
    opacity: 0.08,
    position: "absolute",
    width: 18,
  },
  appleStem: {
    backgroundColor: "#000000",
    height: 6,
    left: 10,
    position: "absolute",
    top: -5,
    width: 4,
  },
  headPixel: {
    backgroundColor: "#000000",
    height: 32,
    opacity: 0.035,
    position: "absolute",
    width: 32,
  },
  headEye: {
    opacity: 0.09,
  },
});
