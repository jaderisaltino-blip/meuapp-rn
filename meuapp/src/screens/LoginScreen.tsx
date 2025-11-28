import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import api from "../services/api";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
            console.log("Tentando login com:", email, password);
            const response = await api.get(`/users?email=${email}&password=${password}`);
            console.log("Resposta do servidor:", response.data);

            if (response.data.length > 0) {
              Alert.alert("Sucesso", "Login realizado!");
              navigation.navigate("Home");
            } else {
              Alert.alert("Erro", "Email ou senha incorretos.");
            }

          } catch (error) {
            console.error("Erro no login:", error);
            Alert.alert("Erro", "Não foi possível conectar ao servidor.");
  }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#EAF2FF" },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: { backgroundColor: "#fff", padding: 10, borderRadius: 8, marginBottom: 10 },
  
  button: { backgroundColor: "#007BFF", padding: 10, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16 },
  link: { textAlign: "center", color: "#007BFF", marginTop: 10 },
});
