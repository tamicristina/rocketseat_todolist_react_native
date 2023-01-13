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

export default function Home() {
  const [createdTasksCounter, setCreatedTasksCounter] = useState(0);
  const [completedTasksCounter, setcompletedTasksCounter] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [registeredTask, setRegisteredTask] = useState<string[]>([]);
  const [checkBoxData, setCheckBoxData] = useState<ICheckBox[]>([
    {
      task: "",
      checked: false,
    },
  ]);

  function logTask() {
    setRegisteredTask((prevState) => [...prevState, taskName]);
    setTaskName("");
  }

  useMemo(() => {
    setCreatedTasksCounter(registeredTask.length);
  }, [registeredTask]);

  useMemo(() => {
    registeredTask.map((task) => {
      setCheckBoxData((prevState) => [
        ...prevState,
        {
          task: task,
          checked: false,
        },
      ]);
    });
  }, [registeredTask]);

  const changeCheckboxFlag = (index: number) => {
    const newData = [...checkBoxData];

    newData[index].checked = !newData[index].checked;
    setCheckBoxData(newData);
  };

  useEffect(() => {
    setcompletedTasksCounter(
      () => checkBoxData.filter((data, index) => data.checked === true).length
    );
  }, [checkBoxData]);

  const deleteTask = (taskToDelete: string) => {
    Alert.alert("Remover", `Remover tarefa ${taskToDelete}?`, [
      {
        text: "Sim",
        onPress: () =>
          setRegisteredTask(() =>
            registeredTask.filter((task) => task !== taskToDelete)
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
        <FlatList
          data={registeredTask}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <View style={styles.taskContainer} key={item}>
              <Checkbox
                value={checkBoxData[index].checked}
                onValueChange={() => changeCheckboxFlag(index)}
                color={false ? "#5E60CE" : undefined}
                style={styles.taskCheckBox}
              />
              <View style={styles.taskTextContainer}>
                <Text
                  style={[
                    styles.taskText,
                    checkBoxData[index].checked && styles.textWithRisk,
                  ]}
                >
                  {item}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.trashIconContainer}
                onPress={() => deleteTask(item)}
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
