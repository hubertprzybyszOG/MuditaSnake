import { DefaultTheme, ThemeProvider } from "expo-router";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { Colors } from "@/constants/theme";
import HomeScreen from ".";

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
  return (
    <ThemeProvider value={eInkNavigationTheme}>
      <AnimatedSplashOverlay />
      {/* <AppTabs /> */}
      <HomeScreen />
    </ThemeProvider>
  );
}
