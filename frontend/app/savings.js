// app/savings.js
import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, Text, ScrollView, StyleSheet, View } from 'react-native';
import axios from "axios";

const API_URL = "http://172.20.10.5:5000";

export default function SavingsScreen() {
  const [savingsAmount, setSavingsAmount] = useState('');
  const [response, setResponse] = useState('');

  const generateSavingsAdvice = async () => {
    try {
      const res = await axios.post(`${API_URL}/generate-savings`, {
        savings_amount: savingsAmount,
      });
      setResponse(res.data.savings_plan || "No suggestions generated");
    } catch (error) {
      console.error("Error generating savings suggestions:", error);
      setResponse("Failed to generate savings suggestions. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}> Your Savings & Investment Suggestions</Text>

        <TextInput
          style={styles.input}
          placeholder="Savings Amount"
          keyboardType="numeric"
          onChangeText={setSavingsAmount}
        />

        <Button title="Get Suggestions" onPress={generateSavingsAdvice} />

        {response ? (
          <View style={styles.result}>
            <Text style={styles.resultTitle}>Suggestions:</Text>
            <Text>{response}</Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 },
  result: { marginTop: 20 },
  resultTitle: { fontWeight: 'bold', marginBottom: 5 },
});
