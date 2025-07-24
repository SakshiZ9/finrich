import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

const API_URL = "http://172.20.10.2:5000";

export default function LoginScreen() {
  const router = useRouter();

  // Form states
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  // Login handler
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
      setIsRegister(true);
    }
  };

  // Register handler
  const handleRegister = async () => {
    if (!email || !name || !age || !occupation || !aadhaar || !phone) {
      Alert.alert("Please fill all fields.");
      return;
    }

    // Basic validation examples (optional)
    if (isNaN(Number(age)) || Number(age) <= 0) {
      Alert.alert("Please enter a valid age.");
      return;
    }
    if (!/^\d{12}$/.test(aadhaar)) {
      Alert.alert("Aadhaar number must be 12 digits.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      Alert.alert("Phone number must be 10 digits.");
      return;
    }

    try {
      await axios.post(`${API_URL}/register`, {
        name,
        email,
        age: Number(age),
        occupation,
        aadhaar,
        phone,
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

          <Text>Age:</Text>
          <TextInput
            value={age}
            onChangeText={setAge}
            style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            keyboardType="numeric"
          />

          <Text>Occupation:</Text>
          <TextInput
            value={occupation}
            onChangeText={setOccupation}
            style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
          />

          <Text>Aadhaar Number:</Text>
          <TextInput
            value={aadhaar}
            onChangeText={setAadhaar}
            style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            keyboardType="numeric"
            maxLength={12}
          />

          <Text>Phone Number:</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            keyboardType="phone-pad"
            maxLength={10}
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
