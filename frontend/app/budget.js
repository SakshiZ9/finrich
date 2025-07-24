// app/budget.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";
import { useSearchParams } from "expo-router";

const API_URL = "http://172.20.10.2:5000";

export default function BudgetingScreen() {
  // Correctly destructure user param string from route
  const { user: userStr } = useSearchParams();

  // Parse JSON string safely to an object or fallback to {}
  const user = userStr ? JSON.parse(userStr) : {};

  const [expenses, setExpenses] = useState("");
  const [season, setSeason] = useState("regular");
  const [suggestion, setSuggestion] = useState("");

  const getSuggestion = async () => {
    if (!user.id) {
      Alert.alert("User data missing", "Please login first.");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/get_ml_suggestion`, {
        user_id: user.id,
        profit: user.profit,
        expenses: parseFloat(expenses) || 0,
        season,
      });

      setSuggestion(res.data.suggestion);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch suggestion");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Expenses:</Text>
      <TextInput
        value={expenses}
        onChangeText={setExpenses}
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter your expenses"
      />

      <Text style={styles.label}>Season (festival, regular, off_season, holiday):</Text>
      <TextInput
        value={season}
        onChangeText={setSeason}
        style={styles.input}
        placeholder="Enter season"
      />

      <Button title="Get AI Suggestion" onPress={getSuggestion} />
      {suggestion ? (
        <Text style={styles.suggestion}>AI Suggestion: {suggestion}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f7fa",
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "#2e70bb",
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  suggestion: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "600",
    color: "#23527c",
  },
});
