import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Image, Text } from "react-native";

export function TaskBook() {
  return (
    <View style={styles.taskBookContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/Clipboard.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.taskBookTextOne}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.taskBookTextTwo}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
