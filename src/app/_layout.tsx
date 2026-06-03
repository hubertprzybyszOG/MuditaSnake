import { useFonts } from "expo-font";
import { DefaultTheme, Slot, ThemeProvider } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SnakeBackgroundPattern } from "@/components/snake-background-pattern";
import { Colors } from "@/constants/theme";

const eInkNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.text,
    background: Colors.background,
    card: Colors.backgroundElement,
    text: Colors.text,
    border: Colors.text,
    notification: Colors.backgroundSelected,
  },
};

export default function TabLayout() {
  const [loaded, error] = useFonts({
    Lato: require("@/assets/fonts/Lato-Regular.ttf"),
    "Lato-Italic": require("@/assets/fonts/Lato-Italic.ttf"),
    "Lato-Thin": require("@/assets/fonts/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("@/assets/fonts/Lato-ThinItalic.ttf"),
    "Lato-Light": require("@/assets/fonts/Lato-Light.ttf"),
    "Lato-LightItalic": require("@/assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Bold": require("@/assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("@/assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Black": require("@/assets/fonts/Lato-Black.ttf"),
    "Lato-BlackItalic": require("@/assets/fonts/Lato-BlackItalic.ttf"),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={eInkNavigationTheme}>
        <SnakeBackgroundPattern>
          <Slot />
        </SnakeBackgroundPattern>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
