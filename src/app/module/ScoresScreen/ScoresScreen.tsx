import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import styles from "./ScoresScreen.styles";

const SCORES_STORAGE_KEY = "snake:scores";

type StoredScore = {
  date: string;
  score: number;
};

export default function ScoresScreen() {
  const [scores, setScores] = useState<StoredScore[]>([]);

  useFocusEffect(
    useCallback(() => {
      void getStoredScores().then((storedScores) => {
        setScores(sortScores(storedScores));
      });
    }, [])
  );

  const handleDeleteScore = useCallback((scoreIndex: number) => {
    setScores((currentScores) => {
      const nextScores = currentScores.filter(
        (_, index) => index !== scoreIndex
      );

      void saveScores(nextScores);

      return nextScores;
    });
  }, []);

  return (
    <View style={[styles.container, styles.centeredScreen]}>
      <View style={styles.scoresCard}>
        <Text style={styles.title}>Best scores</Text>
        {scores.length > 0 ? (
          <ScrollView
            contentContainerStyle={styles.scoresList}
            style={styles.scoresScroll}
          >
            {scores.map((score, index) => (
              <View key={`${score.date}-${index}`} style={styles.scoreRow}>
                <Text style={styles.scorePosition}>{index + 1}.</Text>
                <View style={styles.scoreDetails}>
                  <Text style={styles.scoreValue}>Score: {score.score}</Text>
                  <Text style={styles.scoreDate}>{score.date}</Text>
                </View>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`Delete score ${score.score}`}
                  onPress={() => handleDeleteScore(index)}
                  style={styles.deleteButton}
                >
                  <Text style={styles.deleteButtonText}>x</Text>
                </Pressable>
              </View>
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.emptyScores}>No scores yet</Text>
        )}
      </View>
    </View>
  );
}

async function getStoredScores(): Promise<StoredScore[]> {
  const scoresJson = await AsyncStorage.getItem(SCORES_STORAGE_KEY);

  if (!scoresJson) {
    return [];
  }

  try {
    const scores = JSON.parse(scoresJson);

    return Array.isArray(scores) ? scores.filter(isStoredScore) : [];
  } catch {
    return [];
  }
}

async function saveScores(scores: StoredScore[]) {
  await AsyncStorage.setItem(SCORES_STORAGE_KEY, JSON.stringify(scores));
}

function isStoredScore(score: unknown): score is StoredScore {
  if (!score || typeof score !== "object") {
    return false;
  }

  const storedScore = score as Partial<StoredScore>;

  return (
    typeof storedScore.date === "string" &&
    typeof storedScore.score === "number" &&
    Number.isFinite(storedScore.score)
  );
}

function sortScores(scores: StoredScore[]) {
  return [...scores].sort((firstScore, secondScore) => {
    return secondScore.score - firstScore.score;
  });
}
