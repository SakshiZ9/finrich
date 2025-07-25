import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import BalanceCard from '../components/cashflow/BalanceCard';
import SummaryCards from '../components/cashflow/SummaryCards';
import TransactionTabs from '../components/cashflow/TransactionTabs';
import CashFlowChart from '../components/cashflow/CashFlowChart';
import ForecastPanel from './../components/cashflow/ForecastPanel';

// Pass websiteColors as a prop to all components
const CashFlowDashboardScreen = () => {
    console.log("CashFlowDashboardScreen rendered");
  return (
    <ScrollView style={styles.container}>
        <BalanceCard/>
        <SummaryCards />
        <TransactionTabs />
        <CashFlowChart />
        <ForecastPanel />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default CashFlowDashboardScreen;
