import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Text } from "react-native";
import Checkbox from "expo-checkbox";
import { Feather } from "@expo/vector-icons";

interface Props {
  taskName?: string;
}

export function Task({ taskName }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.taskContainer}>
      <Checkbox
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? "#5E60CE" : undefined}
        style={styles.taskCheckBox}
      />
      <View style={styles.taskTextContainer}>
        <Text style={[styles.taskText, isChecked && styles.textWithRisk]}>
          {taskName}
        </Text>
      </View>
      <View style={styles.trashIconContainer}>
        <Feather name="trash-2" size={20} color="#808080" />
      </View>
    </View>
  );
}
