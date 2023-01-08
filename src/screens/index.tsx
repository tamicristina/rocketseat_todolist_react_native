import React, { useMemo, useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { Header } from "../components/Header";
import { styles } from "./styles";
import { Image } from "react-native";
import { Line } from "../components/Line";
import { TaskBook } from "../components/TaskBook";
import Checkbox from "expo-checkbox";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  const [createdTasksCounter, setCreatedTasksCounter] = useState(0);
  const [completedTasksCounter, setcompletedTasksCounter] = useState(0);
  const [registeredTask, setRegisteredTask] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function logTask() {
    setRegisteredTask((prevState) => [...prevState, taskName]);
    setTaskName("");
  }

  const handleChange = () => {
    if (isChecked === false) {
      setIsChecked(true);
      setcompletedTasksCounter(completedTasksCounter + 1);
    }

    if (isChecked === true) {
      setIsChecked(false);
      setcompletedTasksCounter(completedTasksCounter - 1);
    }
  };
  const createTasks =
    registeredTask.length <= 0 ? (
      <TaskBook />
    ) : (
      registeredTask.map((task) => (
        <View style={styles.taskContainer} key={task}>
          <Checkbox
            value={isChecked}
            onValueChange={handleChange}
            color={isChecked ? "#5E60CE" : undefined}
            style={styles.taskCheckBox}
          />
          <View style={styles.taskTextContainer}>
            <Text style={[styles.taskText, isChecked && styles.textWithRisk]}>
              {task}
            </Text>
          </View>
          <View style={styles.trashIconContainer}>
            <Feather name="trash-2" size={20} color="#808080" />
          </View>
        </View>
      ))
    );

  useMemo(() => {
    setCreatedTasksCounter(registeredTask.length);
  }, [registeredTask]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputAndButtonContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={logTask}>
          <Image
            style={styles.buttonImage}
            source={require("../../assets/button.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}>
        <View style={styles.tasksHeaderCounter}>
          <View style={styles.tasksAndCounterContainer}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.tasksCounterContainer}>
              <Text style={styles.tasksCounter}>{createdTasksCounter}</Text>
            </View>
          </View>
          <View style={styles.tasksAndCounterContainer}>
            <Text style={styles.tasksCompleted}>Concluídas</Text>
            <View style={styles.tasksCounterContainer}>
              <Text style={styles.tasksCounter}>{completedTasksCounter}</Text>
            </View>
          </View>
        </View>
        <Line />
        {createTasks}
      </View>
    </View>
  );
}
