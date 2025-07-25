import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function DashboardScreen({ params }) {
  const router = useRouter();
  const userStr = params?.user ?? "{}";
  const user = JSON.parse(userStr);

  const handleNavigate = (path) => {
    router.push({
      pathname: path,
      params: { user: JSON.stringify(user) },
    });
  };

  return (
    <ImageBackground
      source={require("../assets/handicraft_bg.jpg")} // your jute image
      style={styles.bg}
      resizeMode="cover"
    >
      {/* Add dark overlay */}
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>🎨 Welcome, Harsh!</Text>
          <Text style={styles.subtitle}>Your artisan dashboard awaits...</Text>

          {[
            { title: "🧾 Sales Monitoring", path: "/sales" },
            { title: "📊 Budgeting", path: "/budget" },
            { title: "📚 Knowledge Hub", path: "/knowledge" },
            { title: "💰 Savings", path: "/savings" },
          ].map(({ title, path }) => (
            <TouchableOpacity
              key={path}
              style={styles.button}
              onPress={() => handleNavigate(path)}
            >
              <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // dark semi-transparent overlay
  },
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 16,
    color: "#e0d7cd",
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: "#3E2723",
    fontWeight: "600",
  },
});
