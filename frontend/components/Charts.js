import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Charts = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profit Flow Chart</Text>
      <View style={styles.chartPlaceholder}>
        <Text style={styles.placeholderText}>[Profit Chart Placeholder]</Text>
      </View>

      <Text style={styles.title}>Runway Visualization</Text>
      <View style={styles.chartPlaceholder}>
        <Text style={styles.placeholderText}>[Runway Visualization Placeholder]</Text>
      </View>

      <Text style={styles.title}>Revenue Growth Rate</Text>
      <View style={styles.chartPlaceholder}>
        <Text style={styles.placeholderText}>[Revenue Growth Chart Placeholder]</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  chartPlaceholder: {
    height: 200,
    width: screenWidth - 32,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  placeholderText: {
    color: '#999',
    fontStyle: 'italic',
  },
});

export default Charts;
