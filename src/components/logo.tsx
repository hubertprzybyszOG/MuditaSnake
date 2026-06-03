import { StyleSheet, Text, type TextProps } from "react-native";

import { Colors, Fonts } from "@/constants/theme";

export function Logo({ style, ...rest }: TextProps) {
  return (
    <Text
      accessibilityRole="header"
      style={[styles.title, style]}
      {...rest}
    >
      Snake Game
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.text,
    fontFamily: Fonts.lato.black,
    fontSize: 38,
    letterSpacing: 1,
    lineHeight: 46,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
