import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, Alert } from "react-native";
import axios from "axios";
import { useSearchParams } from "expo-router";

const API_URL = "http://172.20.10.2:5000";

export default function SalesScreen() {
  const { user: userStr } = useSearchParams();
  const user = userStr ? JSON.parse(userStr) : null;

  const [amount, setAmount] = useState("");
  const [promotionSpent, setPromotionSpent] = useState("");
  const [season, setSeason] = useState("regular");
  const [feedback, setFeedback] = useState("");
  const [sales, setSales] = useState([]);

  useEffect(() => {
    if (user && user.id) {
      fetchSales();
    }
  }, [user]);

  const fetchSales = async () => {
    try {
      const res = await axios.get(`${API_URL}/get_sales/${user.id}`);
      setSales(res.data);
    } catch (error) {
      setSales([]);
      Alert.alert("Error", "Could not fetch sales data.");
    }
  };

  const addSale = async () => {
    if (!amount) {
      Alert.alert("Validation", "Please enter the sale amount.");
      return;
    }
    try {
      await axios.post(`${API_URL}/add_sale`, {
        user_id: user.id,
        amount: parseFloat(amount),
        promotion_spent: parseFloat(promotionSpent) || 0,
        season,
        feedback,
      });
      setAmount("");
      setPromotionSpent("");
      setFeedback("");
      setSeason("regular");
      fetchSales();
    } catch (error) {
      Alert.alert("Error", "Failed to add sale. Please try again.");
    }
  };

  if (!user) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
        <Text>User data missing. Please login again.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Add New Sale</Text>
      
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 8, padding: 8 }}
      />
      
      <TextInput
        placeholder="Promotion Spent"
        value={promotionSpent}
        onChangeText={setPromotionSpent}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 8, padding: 8 }}
      />

      <TextInput
        placeholder="Season (festival, regular, ...)"
        value={season}
        onChangeText={setSeason}
        style={{ borderWidth: 1, marginBottom: 8, padding: 8 }}
      />

      <TextInput
        placeholder="Feedback"
        value={feedback}
        onChangeText={setFeedback}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
      />

      <Button title="Add Sale" onPress={addSale} />

      <Text style={{ marginVertical: 16, fontWeight: "bold" }}>Past Sales</Text>

      <FlatList
        data={sales}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Text>
            ₹{item.amount} | Promo: ₹{item.promotion_spent ?? item.Promotion} | {item.season} | {item.feedback}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
