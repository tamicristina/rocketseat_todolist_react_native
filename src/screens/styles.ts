import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },

  inputAndButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
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
});
