import { Stack, useRouter, useSegments } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Layout() {
  const segments = useSegments();
  // segments is an array of route parts, e.g. ['login']
  const currentScreen = segments[segments.length - 1];

  // Screens to hide header on
  const hideHeaderScreens = ["login", "register"];

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#A47148",
          borderBottomWidth: 0,
          shadowColor: "transparent",
        },
        headerTintColor: "#fff8e1",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{
              fontSize: 22,
              marginRight: 8,
              color: "#fff8e1",
              fontWeight: "bold"
            }}>
              🪡
            </Text>
            <Text style={{
              fontSize: 20,
              color: "#fff8e1",
              fontWeight: "bold",
              letterSpacing: 1
            }}>
              Handicraft App
            </Text>
          </View>
        ),

        // Hide header on login/register
        headerShown: !hideHeaderScreens.includes(currentScreen),
      }}
    />
  );
}