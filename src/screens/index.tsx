import React, { useEffect, useMemo, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Alert,
} from "react-native";
import { Header } from "../components/Header";
import { styles } from "./styles";
import { Image } from "react-native";
import { Line } from "../components/Line";
import { TaskBook } from "../components/TaskBook";
import Checkbox from "expo-checkbox";
import { Feather } from "@expo/vector-icons";
import { ICheckBox } from "../interfaces";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const [createdTasksCounter, setCreatedTasksCounter] = useState(0);
  const [completedTasksCounter, setcompletedTasksCounter] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [registeredTask, setRegisteredTask] = useState<ICheckBox[]>([]);

  function logTask() {
    setRegisteredTask((prevState) => [
      ...prevState,
      {
        task: taskName,
        checked: false,
      },
    ]);

    setTaskName("");
  }

  useMemo(() => {
    setCreatedTasksCounter(registeredTask.length);
  }, [registeredTask]);

  const changeCheckboxFlag = (index: number) => {
    const newData = [...registeredTask];

    newData[index].checked = !newData[index].checked;
    setRegisteredTask(newData);
  };

  useEffect(() => {
    setcompletedTasksCounter(
      registeredTask.filter((data) => data.checked === true).length
    );
  }, [registeredTask]);

  const deleteTask = (taskToDelete: string) => {
    Alert.alert("Remover", `Remover tarefa ${taskToDelete}?`, [
      {
        text: "Sim",
        onPress: () =>
          setRegisteredTask(() =>
            registeredTask.filter((task) => task.task !== taskToDelete)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Header />

      <LinearGradient
        colors={["#1A1A1A", "#0D0D0D"]}
        style={styles.inputAndButtonContainer}
        locations={[0.38, 0.35]}
      >
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
      </LinearGradient>
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
        <FlatList
          data={registeredTask}
          keyExtractor={(item) => item.task}
          renderItem={({ item, index }) => (
            <View style={styles.taskContainer} key={item.task}>
              <Checkbox
                value={registeredTask[index].checked}
                onValueChange={() => changeCheckboxFlag(index)}
                color={false ? "#5E60CE" : undefined}
                style={styles.taskCheckBox}
              />
              <View style={styles.taskTextContainer}>
                <Text
                  style={[
                    styles.taskText,
                    registeredTask[index].checked && styles.textWithRisk,
                  ]}
                >
                  {item.task}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.trashIconContainer}
                onPress={() => deleteTask(item.task)}
              >
                <Feather name="trash-2" size={20} color="#808080" />
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <TaskBook />}
        />
      </View>
    </View>
  );
}
