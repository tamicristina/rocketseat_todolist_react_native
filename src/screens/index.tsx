import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { Header } from "../components/Header";
import { styles } from "./styles";
import { Image } from "react-native";
import { Line } from "../components/Line";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputAndButtonContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Image
            style={styles.buttonImage}
            source={require("../../assets/button.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer}>
        <View style={styles.tasksHeaderCounter}>
          <Text style={styles.tasksCreated}>Criadas</Text>
          <Text style={styles.tasksCompleted}>Concluídas</Text>
        </View>
      </View>
      <Line />
    </View>
  );
}
