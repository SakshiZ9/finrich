import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Alert,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

const API_URL = "http://172.20.10.5:5000";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [phone, setPhone] = useState("");
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
      setIsRegister(true);
      handleRegister();
    }
  };

  const handleRegister = async () => {
    if (!email || !name || !age || !occupation || !aadhaar || !phone) {
      Alert.alert("Please fill all fields.");
      return;
    }
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
      handleLogin();
    } catch (error) {
      Alert.alert("Registration failed", "Please try again later.");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/handicraft_bg.jpg")} // Add a rustic/texture image in your assets
      style={styles.bg}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🎨 Handicraft Finance Portal</Text>
        <Text style={styles.subtitle}>Login or Register to Continue</Text>

        <Text style={styles.label}>Email</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                  placeholder="Enter your password"
                  secureTextEntry
                />

        {isRegister && (
          <>
            <Text style={styles.label}>Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.input}
              placeholder="Your full name"
            />

            <Text style={styles.label}>Age</Text>
            <TextInput
              value={age}
              onChangeText={setAge}
              style={styles.input}
              placeholder="Your age"
              keyboardType="numeric"
            />

            <Text style={styles.label}>Occupation</Text>
            <TextInput
              value={occupation}
              onChangeText={setOccupation}
              style={styles.input}
              placeholder="e.g. Potter, Weaver"
            />

            <Text style={styles.label}>Aadhaar Number</Text>
            <TextInput
              value={aadhaar}
              onChangeText={setAadhaar}
              style={styles.input}
              placeholder="12-digit Aadhaar"
              keyboardType="numeric"
              maxLength={12}
            />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              style={styles.input}
              placeholder="10-digit phone"
              keyboardType="phone-pad"
              maxLength={10}
            />
          </>
        )}

        <View style={styles.buttonContainer}>
          <Button
            title={isRegister ? "Register & Login" : "Login"}
            color="#8B4513"
            onPress={isRegister ? handleRegister : handleLogin}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "rgba(255,248,240,0.85)", // slight tint over background
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4E342E",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6D4C41",
    textAlign: "center",
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: "#5D4037",
    marginBottom: 6,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D7CCC8",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
