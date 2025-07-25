import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const BalanceCard = () => {

  const [balance, setBalance] = useState(0);

  useEffect(() => {
      const fetchBalance = async() => {
      const response = await axios.get('http://192.168.63.212:5000/cashflow/balance');
      setBalance(response.data.balance); // Ensure balance is formatted to 2 decimal places
  }
  fetchBalance();
  },[]);

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Current Balance</Text>
      <Text style={styles.amount}>₹ {balance}</Text>
      <Text style={styles.trend}>▲ 5% from last month</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e9d8c9ff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: '#888',
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  trend: {
    fontSize: 14,
    color: '#4caf50',
    marginTop: 4,
  },
});

export default BalanceCard;
