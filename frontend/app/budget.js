import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Alert,
  ImageBackground,
} from 'react-native';
import axios from "axios";
import * as Animatable from 'react-native-animatable';

const API_URL = "http://172.20.10.5:5000";

export default function BudgetingScreen() {
  const [userId, setUserId] = useState('');
  const [initialFund, setInitialFund] = useState('');
  const [region, setRegion] = useState('');
  const [orders, setOrders] = useState('');
  const [timeline, setTimeline] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const validateInputs = () => {
    if (!userId || !initialFund || !region || !orders || !timeline) {
      Alert.alert("Input Error", "Please fill out all fields.");
      return false;
    }
    if (isNaN(userId) || isNaN(initialFund) || isNaN(orders) || isNaN(timeline)) {
      Alert.alert("Input Error", "User ID, Initial Fund, Orders and Timeline must be numeric.");
      return false;
    }
    return true;
  };

  const generatePlan = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    setResponse('');
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
      setResponse("❌ Failed to generate budget plan. Please try again.");
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
          <Text style={styles.header}>💰 Budget Planner</Text>

          <TextInput style={styles.input} placeholder="User ID" keyboardType="numeric" onChangeText={setUserId} value={userId} />
          <TextInput style={styles.input} placeholder="Initial Fund" keyboardType="numeric" onChangeText={setInitialFund} value={initialFund} />
          <TextInput style={styles.input} placeholder="Region" onChangeText={setRegion} value={region} />
          <TextInput style={styles.input} placeholder="Number of Orders" keyboardType="numeric" onChangeText={setOrders} value={orders} />
          <TextInput style={styles.input} placeholder="Timeline (months)" keyboardType="numeric" onChangeText={setTimeline} value={timeline} />

          <TouchableOpacity style={styles.button} onPress={generatePlan} disabled={loading}>
            <Text style={styles.buttonText}>{loading ? "Generating..." : "Generate Budget Plan"}</Text>
          </TouchableOpacity>

          {loading && (
            <ActivityIndicator size="large" color="#A47148" style={{ marginTop: 20 }} />
          )}

          {response ? (
            <Animatable.View animation="fadeInUp" duration={600} style={styles.resultCard}>
              <Text style={styles.resultTitle}>📊 Budget Plan:</Text>
              <Text style={styles.resultText}>{response}</Text>
            </Animatable.View>
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
    fontSize: 28,
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
