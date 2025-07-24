import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, Text, ScrollView, StyleSheet, View } from "react-native";
import axios from "axios";

const API_URL = "http://172.20.10.2:5000";

export default function BudgetingScreen() {
  const [name, setName] = useState('Riya'); // Hardcoded for example
  const [age, setAge] = useState('23');
  const [occupation, setOccupation] = useState('Painter');

  const [initialFund, setInitialFund] = useState('');
  const [orders, setOrders] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budgetPlan, setBudgetPlan] = useState(null);
  const [error, setError] = useState('');

  const generatePlan = async () => {
    setError('');
    setBudgetPlan(null);

    try {
      const res = await axios.post(`${API_URL}/generate-plan`, {
        name,
        age,
        occupation,
        initial_fund: Number(initialFund),
        orders: Number(orders),
        timeline: Number(timeline),
      });
      setBudgetPlan(res.data.budget_plan_table);
    } catch (error) {
      setError(error.response?.data?.error || "Failed to generate budget plan. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Budget Planner</Text>

        <TextInput style={styles.input} placeholder="Name" onChangeText={setName} value={name} />
        <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" onChangeText={setAge} value={age} />
        <TextInput style={styles.input} placeholder="Occupation" onChangeText={setOccupation} value={occupation} />

        <TextInput
          style={styles.input}
          placeholder="Initial Fund"
          keyboardType="numeric"
          onChangeText={setInitialFund}
          value={initialFund}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Orders"
          keyboardType="numeric"
          onChangeText={setOrders}
          value={orders}
        />
        <TextInput
          style={styles.input}
          placeholder="Timeline (months)"
          keyboardType="numeric"
          onChangeText={setTimeline}
          value={timeline}
        />

        <Button title="Generate Budget Plan" onPress={generatePlan} />

        {error ? <Text style={{ color: "red", marginTop: 10 }}>{error}</Text> : null}

        {budgetPlan && (
          <View style={styles.result}>
            <Text style={styles.resultTitle}>Budget Plan:</Text>
            <View style={styles.table}>
              {budgetPlan.map((item, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={styles.tableCell}>{item.cost_type}</Text>
                  <Text style={styles.tableCell}>{item.amount}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 8 },
  result: { marginTop: 20 },
  resultTitle: { fontWeight: "bold", marginBottom: 10, fontSize: 18 },
  table: { borderWidth: 1, borderColor: "#ccc" },
  tableRow: { flexDirection: "row", paddingVertical: 8, borderBottomWidth: 1, borderColor: "#ccc" },
  tableCell: { flex: 1, textAlign: "center" },
});
