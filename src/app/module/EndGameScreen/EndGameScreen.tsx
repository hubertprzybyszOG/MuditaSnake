import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { BackHandler, Pressable, Text, View } from "react-native";

import { SnakeLogo } from "@/components/snake-logo";
import styles from "./EndGameScreen.styles";

const SCORES_STORAGE_KEY = "snake:scores";

type StoredScore = {
  date: string;
  score: number;
};

export default function EndGameScreen() {
  const { result, score } = useLocalSearchParams<{
    result?: string;
    score?: string;
  }>();
  const parsedScore = Number(score ?? 0);
  const numericScore = Number.isFinite(parsedScore) ? parsedScore : 0;
  const [bestScore, setBestScore] = useState(numericScore);
  const hasCompletedGame = result === "completed";

  useEffect(() => {
    if (numericScore === 0) {
      void getStoredScores().then((scores) => {
        setBestScore(getBestScore(scores));
      });

      return;
    }

    const storedScore = {
      date: formatScoreDate(new Date()),
      score: numericScore,
    };

    void saveScore(storedScore).then((scores) => {
      setBestScore(getBestScore(scores));
    });
  }, [numericScore]);

  useEffect(() => {
    const backSubscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        router.replace("/menu");

        return true;
      }
    );

    return () => backSubscription.remove();
  }, []);

  return (
    <View style={[styles.container, styles.centeredScreen]}>
      <SnakeLogo />
      <Text style={styles.title}>
        {hasCompletedGame ? "End game" : "Game over"}
      </Text>
      <Text style={styles.score}>Your score: {numericScore}</Text>
      <Text style={styles.score}>Best score: {bestScore}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="New game"
        onPress={() => router.push("/game")}
        style={styles.primaryButton}
      >
        <Text style={styles.primaryButtonText}>New game</Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Home"
        onPress={() => router.push("/menu")}
        style={styles.primaryButton}
      >
        <Text style={styles.primaryButtonText}>Home</Text>
      </Pressable>
    </View>
  );
}

async function saveScore(score: StoredScore) {
  const scores = await getStoredScores();
  const nextScores = [...scores, score];

  await AsyncStorage.setItem(SCORES_STORAGE_KEY, JSON.stringify(nextScores));

  return nextScores;
}

async function getStoredScores(): Promise<StoredScore[]> {
  const scoresJson = await AsyncStorage.getItem(SCORES_STORAGE_KEY);

  if (!scoresJson) {
    return [];
  }

  try {
    const scores = JSON.parse(scoresJson);

    return Array.isArray(scores) ? scores : [];
  } catch {
    return [];
  }
}

function formatScoreDate(date: Date) {
  const day = formatDatePart(date.getDate());
  const month = formatDatePart(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = formatDatePart(date.getHours());
  const minutes = formatDatePart(date.getMinutes());

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function formatDatePart(value: number) {
  return String(value).padStart(2, "0");
}

function getBestScore(scores: StoredScore[]) {
  return scores.reduce(
    (bestScore, currentScore) => Math.max(bestScore, currentScore.score),
    0
  );
}
