import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import api from "../services/api";

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await api.post("/users", { email, password });
      if (response.status === 201) {
        Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
        navigation.navigate("Login");
      }

    } catch (error) {
      Alert.alert("Erro", "Não foi possível registrar o usuário.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#EAF2FF" },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: { backgroundColor: "#fff", padding: 10, borderRadius: 8, marginBottom: 10 },
  
  button: { backgroundColor: "#28A745", padding: 10, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16 },
  link: { textAlign: "center", color: "#007BFF", marginTop: 10 },
});
