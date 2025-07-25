import React from "react";
import { View, ImageBackground, ScrollView, StyleSheet } from "react-native";
import Charts from "../components/Charts";

export default function ChartsScreen() {
  return (
    <ImageBackground
      source={require("../assets/handicraft_bg.jpg")}  // You can change this
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Charts />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  container: {
    padding: 16,
  },
});
