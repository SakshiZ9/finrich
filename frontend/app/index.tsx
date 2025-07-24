import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

const API_URL = "http://172.20.10.2:5000";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [profit, setProfit] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = async () => {
    if (!email) {
      Alert.alert("Please enter your email.");
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/login`, { email });
      router.replace({
        pathname: "/dashboard",
        params: { user: JSON.stringify(res.data) },
      });
    } catch (error) {
      // Could improve by checking error response status
      setIsRegister(true);
    }
  };

  const handleRegister = async () => {
    if (!email || !name || !businessType || !profit) {
      Alert.alert("Please fill all fields.");
      return;
    }
    try {
      await axios.post(`${API_URL}/register`, {
        name,
        email,
        business_type: businessType,
        profit: parseFloat(profit),
      });
      // After successful registration, attempt login
      handleLogin();
    } catch (error) {
      Alert.alert("Registration failed", "Please try again later.");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 15 }}>Login or Register</Text>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      {isRegister && (
        <>
          <Text>Name:</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
          />
          <Text>Business Type:</Text>
          <TextInput
            value={businessType}
            onChangeText={setBusinessType}
            style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
          />
          <Text>Current Profit:</Text>
          <TextInput
            value={profit}
            onChangeText={setProfit}
            style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            keyboardType="numeric"
          />
        </>
      )}
      <Button
        title={isRegister ? "Register & Login" : "Login"}
        onPress={isRegister ? handleRegister : handleLogin}
      />
    </View>
  );
}
