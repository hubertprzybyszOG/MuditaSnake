import { router } from "expo-router";
import { useEffect } from "react";

import SplashScreen from "./module/SplashScreen/SplashScreen";

export default function SplashPage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/menu");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return <SplashScreen />;
}
