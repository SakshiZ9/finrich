import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;

const CashFlowChart = () => {
  const [view, setView] = useState('monthly');
  const [chartData, setChartData] = useState(null);


  useEffect(() => {
      axios.get(`http://192.168.63.212:5000/cashflow/chart_data`)
        .then(response => {
          setChartData(response.data);
        })
        .catch(error => {
          console.error('Error fetching chart data:', error);
        });
    },[]);

  
  if (!chartData) return <p>Loading...</p>;
  const selectedData = chartData[view];


  // const chartData = {
  //   daily: {
  //     labels: ['Jul 20', 'Jul 21', 'Jul 22', 'Jul 23', 'Jul 24', 'Jul 25'],
  //     data: [5000, 7000, 6000, 8000, 7500, 9000],
  //   },
  //   weekly: {
  //     labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  //     data: [20000, 25000, 18000, 30000],
  //   },
  //   monthly: {
  //     labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
  //     data: [22000, 27000, 25000, 30000, 35000],
  //   },
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cash Flow Over Time</Text>

      <View style={styles.toggleContainer}>
        {['daily', 'weekly', 'monthly'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.toggleButton, view === option && styles.activeButton]}
            onPress={() => setView(option)}
          >
            <Text style={[styles.toggleText, view === option && styles.activeText]}>
              {option.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <LineChart
        data={{
          labels: selectedData.labels,
          datasets: [{ data: selectedData.data }],
        }}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#2196f3',
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  toggleButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  activeButton: {
    backgroundColor: '#2196f3',
  },
  toggleText: {
    color: '#555',
    fontWeight: '500',
  },
  activeText: {
    color: '#fff',
  },
  chart: {
    borderRadius: 12,
  },
});

export default CashFlowChart;
