import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("../../../assets/Logo.png")}
      />
    </View>
  );
}
