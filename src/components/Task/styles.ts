import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    alignItems: "center",
    height: 64,
    width: 327,
    backgroundColor: "#262626",
    marginTop: 20,
    borderRadius: 8,
    flexDirection: "row",
  },
  taskCheckBox: {
    marginLeft: 12,
    borderRadius: 12,
    width: 18,
    height: 18,
    borderColor: "#4EA8DE",
  },
  taskTextContainer: {
    width: 260,
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 12,
    paddingBottom: 12,
  },
  taskText: {
    color: "#F2F2F2",
    fontSize: 14,
  },
  textWithRisk: {
    color: "#808080",
    fontSize: 14,
    textDecorationLine: "line-through",
  },

  trashIconContainer: {
    padding: 9,
  },
});
