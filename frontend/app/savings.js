import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import axios from "axios";
import { useSearchParams } from "expo-router";

const API_URL = "http://172.20.10.2:5000";

export default function SavingsScreen() {
  const { user: userStr } = useSearchParams();
  const user = userStr ? JSON.parse(userStr) : null;

  const [savings, setSavings] = useState(user?.savings?.toString() || "");
  const [message, setMessage] = useState("");

  const updateSavings = async () => {
    if (!user) {
      Alert.alert("User data missing", "Please login to update savings.");
      return;
    }
    if (!savings) {
      Alert.alert("Please enter your savings amount.");
      return;
    }
    try {
      await axios.post(`${API_URL}/update_savings`, {
        user_id: user.id,
        savings: parseFloat(savings),
      });
      setMessage("Savings Updated!");
    } catch (error) {
      Alert.alert("Error", "Failed to update savings. Please try again.");
    }
  };

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
        <Text>User data missing. Please login again.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Total Profit: ₹{user.profit}</Text>
      <TextInput
        placeholder="Current Savings"
        value={savings}
        onChangeText={setSavings}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <Button title="Update Savings" onPress={updateSavings} />
      {message ? <Text style={{ marginTop: 12, color: "green" }}>{message}</Text> : null}
    </View>
  );
}
