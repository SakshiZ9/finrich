import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import axios from "axios";

const API_URL = "http://172.20.10.5:5000";

export default function SavingsScreen() {
  const [savingsAmount, setSavingsAmount] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const generateSavingsAdvice = async () => {
    if (!savingsAmount || isNaN(savingsAmount)) {
      setResponse("Please enter a valid numeric savings amount.");
      return;
    }

    setLoading(true);
    setResponse('');
    try {
      const res = await axios.post(`${API_URL}/generate-savings`, {
        savings_amount: savingsAmount,
      });
      setResponse(res.data.savings_plan || "No suggestions generated");
    } catch (error) {
      console.error("Error generating savings suggestions:", error);
      setResponse("❌ Failed to generate savings suggestions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/handicraft_bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <Text style={styles.header}>💡 Savings & Investment Advisor</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your savings amount"
            keyboardType="numeric"
            value={savingsAmount}
            onChangeText={setSavingsAmount}
          />

          <TouchableOpacity style={styles.button} onPress={generateSavingsAdvice} disabled={loading}>
            <Text style={styles.buttonText}>{loading ? "Generating..." : "Get Suggestions"}</Text>
          </TouchableOpacity>

          {loading && (
            <ActivityIndicator size="large" color="#A47148" style={{ marginTop: 20 }} />
          )}

          {response ? (
            <View style={styles.resultCard}>
              <Text style={styles.resultTitle}>📈 Suggestions:</Text>
              <Text style={styles.resultText}>{response}</Text>
            </View>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 250, 240, 0.92)',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6B4226',
    marginBottom: 24,
    textAlign: 'center',
    textShadowColor: "#e9c79e",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#d2b48c',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#A47148',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6B4226',
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
});
