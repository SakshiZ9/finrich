// app/budget.js
import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, Text, ScrollView, StyleSheet, View } from 'react-native';
import axios from "axios";
import { useSearchParams } from "expo-router";

const API_URL = "http://172.20.10.2:5000";

export default function BudgetingScreen() {
  const [userId, setUserId] = useState('');
  const [initialFund, setInitialFund] = useState('');
  const [region, setRegion] = useState('');
  const [orders, setOrders] = useState('');
  const [timeline, setTimeline] = useState('');
  const [response, setResponse] = useState('');

  const generatePlan = async () => {
  try {
    const res = await axios.post(`${API_URL}/generate-plan`, {
      user_id: userId,
      initial_fund: initialFund,
      region,
      orders,
      timeline,
    });
    setResponse(res.data.budget_plan || "No plan generated");
  } catch (error) {
    console.error("Error generating plan:", error);
    setResponse("Failed to generate budget plan. Please try again.");
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Budget Planner</Text>

        <TextInput style={styles.input} placeholder="User ID" keyboardType="numeric" onChangeText={setUserId} />
        <TextInput style={styles.input} placeholder="Initial Fund" keyboardType="numeric" onChangeText={setInitialFund} />
        <TextInput style={styles.input} placeholder="Region" onChangeText={setRegion} />
        <TextInput style={styles.input} placeholder="Number of Orders" keyboardType="numeric" onChangeText={setOrders} />
        <TextInput style={styles.input} placeholder="Timeline (months)" keyboardType="numeric" onChangeText={setTimeline} />

        <Button title="Generate Budget Plan" onPress={generatePlan} />

        {response ? (
          <View style={styles.result}>
            <Text style={styles.resultTitle}>Budget Plan:</Text>
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
  resultTitle: { fontWeight: 'bold', marginBottom: 5 }
});

