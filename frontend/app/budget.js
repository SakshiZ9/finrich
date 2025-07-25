import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, Text, ScrollView, StyleSheet, View, ActivityIndicator } from "react-native";
import axios from "axios";

const API_URL = "http://172.20.10.5:5000";

// Table rendering component, receives array of orders

function OrdersTable(plan) {
  // Check if plan has keys to display
  plan = plan.plan ;
  if (plan.length === 0) return <Text>No Plan Data</Text>;

  // Define headers with display labels and corresponding keys to lookup in plan
  const headers = [
    { label: "Raw Material Cost", key: "raw_material_cost" },
    { label: "Machine Cost", key: "machine_cost" },
    { label: "Tool Cost", key: "tool_cost" },
    { label: "Transport Cost", key: "transport_cost" },
    { label: "Labour Cost", key: "labour_cost" },
    { label: "Profit Margin", key: "profit_margin" }
  ];

  const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
    maxHeight: 100,
  },
  contentContainer: {
    paddingHorizontal: 5,
  },
  tableContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    minWidth: 700, // To make horizontal scroll noticeable on small widths
  },
  tableRowHeader: {
    flexDirection: "row",
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: "700",
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 8,
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 8,
  },
  noDataText: {
    textAlign: "center",
    padding: 20,
    fontSize: 16,
    color: "#999",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // for Android shadow
  },
})

  return (
    <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.tableContainer}>
        {/* Table Header */}
        <View style={styles.tableRowHeader}>
          {headers.map((h) => (
            <Text key={h.key} style={[styles.tableHeaderCell, styles.shadow]}>
              {h.label}
            </Text>
          ))}
        </View>

        {/* Single Data Row */}
        <View style={[styles.tableRow, styles.shadow]}>
          {headers.map((h) => (
            <Text key={h.key} style={styles.tableCell}>
              {plan[h.key] !== undefined ? plan[h.key] : "-"}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );

};


export default function BudgetingScreen() {
  const [userId, setUserId] = useState('');
  const [initialFund, setInitialFund] = useState('');
  const [region, setRegion] = useState('');
  const [orders, setOrders] = useState('');
  const [timeline, setTimeline] = useState('');
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const generatePlan = async () => {
    setPlan(null);
    setErrorMsg("");
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/generate-plan`, {
        user_id: userId,
        initial_fund: initialFund,
        region,
        orders,
        timeline,
      });
      let raw = res.data.budget_plan;
      let parsedPlan = null;
      if (typeof raw === "string") {
        try {
          
          console.log("Entered String") // Parse the JSON string
          parsedPlan = JSON.parse(raw);
          console.log("Parsed Plan:", parsedPlan);
        } catch {
          setErrorMsg("Failed to parse plan from backend.");
          console.log("Entered Object") // Parse the JSON string

        }
      } else if (typeof raw === "object") {
        parsedPlan = raw;
      }
      setPlan(parsedPlan || null);
      if (!parsedPlan) setErrorMsg("No plan generated.");
    } catch (error) {
      console.error("Error generating plan:", error);
      setErrorMsg(
        error?.response?.data?.error || "Failed to generate budget plan. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text style={styles.header}>Budget Planner</Text>

        <TextInput
          style={styles.input}
          placeholder="User ID"
          keyboardType="numeric"
          onChangeText={setUserId}
          value={userId}
        />
        <TextInput
          style={styles.input}
          placeholder="Initial Fund"
          keyboardType="numeric"
          onChangeText={setInitialFund}
          value={initialFund}
        />
        <TextInput
          style={styles.input}
          placeholder="Region"
          onChangeText={setRegion}
          value={region}
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

        {loading && <ActivityIndicator size="large" style={{ marginTop: 15 }} />}
        {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

        {plan && (
          <View style={styles.result}>
            <Text style={styles.resultTitle}>Budget Plan:</Text>
            <OrdersTable plan={plan} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 6
  },
  result: { marginTop: 20 },
  resultTitle: { fontWeight: "bold", fontSize: 18, marginBottom: 10 },
  errorText: { color: "red", marginBottom: 10, marginTop: 10 },

  tableRowHeader: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },
  tableHeaderCell: {
    fontWeight: "bold",
    padding: 8,
    minWidth: 110,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#ccc"
  },
  tableRow: {
    flexDirection: "row"
  },
  evenRow: {
    backgroundColor: "#fafafa"
  },
  oddRow: {
    backgroundColor: "#fff"
  },
  tableCell: {
    padding: 8,
    minWidth: 110,
    borderRightWidth: 1,
    borderColor: "#ccc",
    textAlign: "center"
  }
});