import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Image, Text } from "react-native";

interface Props {
  taskName?: string;
}

export function Task({ taskName }: Props) {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{taskName}</Text>
    </View>
  );
}
