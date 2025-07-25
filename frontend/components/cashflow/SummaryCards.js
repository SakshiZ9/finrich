import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SummaryCards = () => {

  const [data,setData] = useState([]);

  useEffect(()=> {
    const fetchData = async() => {
    const response = await axios.get("http://192.168.63.212:5000/cashflow/cashflow_summary");
    setData(response.data);
  }
  fetchData();
  },[]);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={[styles.card, { borderLeftColor: item.color }]}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={[styles.value, { color: item.color }]}>{item.value}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginRight: 12,
    borderLeftWidth: 4,
    width: 140,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SummaryCards;
