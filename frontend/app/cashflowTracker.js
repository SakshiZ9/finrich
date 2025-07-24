import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
// import BalanceCard from './BalanceCard';
// import SummaryCards from './SummaryCards';
// import TransactionTabs from './TransactionTabs';
// import CashFlowChart from './CashFlowChart';
// import ForecastPanel from './ForecastPanel';

const CashFlowDashboardScreen = () => {
    console.log("CashFlowDashboardScreen rendered");
  return (
    <View />
    // <ScrollView style={styles.container}>
    //   <BalanceCard />
    //   <SummaryCards />
    //   <TransactionTabs />
    //   <CashFlowChart />
    //   <ForecastPanel />
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
});

export default CashFlowDashboardScreen;
