import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ForecastPanel = () => {
  const [scenario, setScenario] = useState('best');

  const forecastData = {
    best: [30000, 35000, 40000, 45000],
    worst: [15000, 18000, 20000, 22000],
    custom: [25000, 27000, 29000, 31000],
  };

  const data = {
    labels: ['Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        data: forecastData[scenario],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forecast</Text>
      <Picker
        selectedValue={scenario}
        style={styles.picker}
        onValueChange={(itemValue) => setScenario(itemValue)}
      >
        <Picker.Item label="Best Case" value="best" />
        <Picker.Item label="Worst Case" value="worst" />
        <Picker.Item label="Custom" value="custom" />
      </Picker>

      <BarChart
        data={data}
        width={screenWidth - 32}
        height={220}
        yAxisLabel="₹"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    elevation: 2,
    marginBottom: 32,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 12,
  },
  chart: {
    borderRadius: 12,
  },
});

export default ForecastPanel;
