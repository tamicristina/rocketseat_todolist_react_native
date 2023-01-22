import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },

  inputAndButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "red",
    borderTopWidth: 8,
    height: 100,
  },

  input: {
    backgroundColor: "#262626",
    color: "#808080",
    fontSize: 16,
    height: 54,
    width: 271,
    borderRadius: 6,
    marginLeft: 24,
    marginRight: 4,
    padding: 16,
  },
  buttonContainer: {
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonImage: {
    width: 16,
  },

  tasksContainer: {
    alignItems: "center",
    marginTop: 32,
  },

  tasksHeaderCounter: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 327,
  },
  tasksAndCounterContainer: {
    flexDirection: "row",
  },
  tasksCreated: {
    color: "#4EA8DE",
    fontWeight: "bold",
    paddingRight: 8,
  },

  tasksCounterContainer: {
    backgroundColor: "#333333",
    width: 27,
    height: 21,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  tasksCounter: {
    color: "#D9D9D9",
    fontWeight: "bold",
  },
  tasksCompleted: {
    color: "#8284FA",
    fontWeight: "bold",
    paddingRight: 8,
  },
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
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 12,
    paddingBottom: 12,
  },
  taskText: {
    color: "#F2F2F2",
    fontSize: 14,
    flexWrap: "wrap",
  },
  textWithRisk: {
    color: "#808080",
    fontSize: 14,
    textDecorationLine: "line-through",
  },

  trashIconContainer: {
    paddingRight: 12,
  },
});
