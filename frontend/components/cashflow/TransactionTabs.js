import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// const transactions = {
//   income: [
//     { id: '1', category: 'Sales', amount: '₹ 30,000', date: 'Jul 20' },
//     { id: '2', category: 'Online Orders', amount: '₹ 45,000', date: 'Jul 18' },
//   ],
//   expense: [
//     { id: '3', category: 'Raw Materials', amount: '₹ 20,000', date: 'Jul 19' },
//     { id: '4', category: 'Rent', amount: '₹ 30,000', date: 'Jul 15' },
//   ],
// };

const TransactionTabs = () => {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
      const fetchTransactions = async() => {
      const response = await axios.get('http://192.168.63.212:5000/cashflow/transactions');
      setTransactions(response.data); 
    }
    fetchTransactions();
  },[]);



  const [activeTab, setActiveTab] = useState('income');

  return (
    <View style={styles.container}>
      <View style={styles.tabRow}>
        {['income', 'expense'].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={[styles.tab, activeTab === tab && styles.activeTab]}>
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={transactions[activeTab]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#2196f3',
  },
  tabText: {
    color: '#555',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  transaction: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
  },
  category: {
    fontSize: 16,
    fontWeight: '600',
  },
  amount: {
    fontSize: 16,
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default TransactionTabs;
