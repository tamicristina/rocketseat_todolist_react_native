import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../components/Header";
import { styles } from "./styles";
import { Image } from "react-native";

export default function Home() {
  return (
    <>
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
      </View>
    </>
  );
}
