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
          <View style={styles.card}>
            <Text style={styles.header}>💰 Budget Planner</Text>
            <View style={styles.formGroup}>
              <TextInput style={styles.input} placeholder="User ID" keyboardType="numeric" onChangeText={setUserId} value={userId} />
              <TextInput style={styles.input} placeholder="Initial Fund" keyboardType="numeric" onChangeText={setInitialFund} value={initialFund} />
              <TextInput style={styles.input} placeholder="Region" onChangeText={setRegion} value={region} />
              <TextInput style={styles.input} placeholder="Number of Orders" keyboardType="numeric" onChangeText={setOrders} value={orders} />
              <TextInput style={styles.input} placeholder="Timeline (months)" keyboardType="numeric" onChangeText={setTimeline} value={timeline} />
            </View>
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
          </View>
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
    paddingHorizontal: 0,
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  card: {
    backgroundColor: 'rgba(255, 248, 225, 0.97)',
    borderRadius: 22,
    paddingVertical: 32,
    paddingHorizontal: 22,
    shadowColor: "#A47148",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 20,
    elevation: 8,
    width: '98%',
    maxWidth: 400,
    marginTop: -30, // negative spacing to lift card closer to header
    marginBottom: 12,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6B4226',
    marginBottom: 14,
    textAlign: 'center',
    textShadowColor: "#e9c79e",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 0.2,
  },
  formGroup: {
    marginBottom: 0, // tight grouping
    gap: -8, // negative spacing between inputs (if supported by your react-native version)
  },
  input: {
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: -2, // negative spacing between fields
    borderWidth: 1,
    borderColor: '#d2b48c',
    fontSize: 16,
    shadowColor: "#A47148",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 1,
    elevation: 1,
  },
  button: {
    backgroundColor: '#A47148',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 18,
    shadowColor: "#A47148",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.4,
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
    marginTop: 10,
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