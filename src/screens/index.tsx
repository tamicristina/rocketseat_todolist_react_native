import React, { useMemo, useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { Header } from "../components/Header";
import { styles } from "./styles";
import { Image } from "react-native";
import { Line } from "../components/Line";
import { TaskBook } from "../components/TaskBook";
import { Task } from "../components/Task";

export default function Home() {
  const [createdTasksCounter, setCreatedTasksCounter] = useState(0);
  const [completedTasksCounter, setcompletedTasksCounter] = useState(0);
  const [registeredTask, setRegisteredTask] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");

  function logTask() {
    setRegisteredTask((prevState) => [...prevState, taskName]);
    setTaskName("");
  }

  const createTasks =
    registeredTask.length <= 0 ? (
      <TaskBook />
    ) : (
      registeredTask.map((task) => <Task key={task} taskName={task} />)
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
