import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export function Line() {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.line}></View>
    </View>
  );
}
