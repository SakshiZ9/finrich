import React from "react";
import { View, Button, Text } from "react-native";
import { useRouter } from "expo-router";

export default function DashboardScreen({ params }) {
  const router = useRouter();

  // Parse user passed via route param, fallback to empty object
  const userStr = params?.user ?? "{}";
  const user = JSON.parse(userStr);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 25 }}>
        Welcome, {user.name || "Guest"}!
      </Text>

      <Button
        title="Sales Monitoring"
        onPress={() =>
          router.push({
            pathname: "/sales",
            params: { user: JSON.stringify(user) },
          })
        }
      />
      <View style={{ height: 12 }} />
      <Button
        title="Budgeting"
        onPress={() =>
          router.push({
            pathname: "/budget",
            params: { user: JSON.stringify(user) },
          })
        }
      />
      <View style={{ height: 12 }} />
      <Button title="Knowledge Hub" onPress={() => router.push("/knowledge")} />
      <View style={{ height: 12 }} />
      <Button
        title="Savings"
        onPress={() =>
          router.push({
            pathname: "/savings",
            params: { user: JSON.stringify(user) },
          })
        }
      />
      <View style={{ height: 12 }} />
      <Button
        title="Cashflow Tracker"
        onPress={() =>
          router.push({
            pathname: "/cashflowTracker",
            params: { user: JSON.stringify(user) },
          })
        }
      />
    </View>
  );
}
