# Trocas por componentes nativos Expo      

## LinearGradient
### npx expo install expo-linear-gradient
### https://docs.expo.dev/versions/latest/sdk/linear-gradient/

## Icons
### https://docs.expo.dev/guides/icons/
### import { Feather } from '@expo/vector-icons';
# TasksList
#                     <Feather 
#                      name="check-square"


## 1
# Home - contador
## 2
## TodoInput
# TextInput 
        //TODO - use value, onChangeText and onSubmitEditing props

        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
# TouchableOpacity
        //TODO - onPress prop
        onPress={handleAddNewTask}
#   function handleAddNewTask() {
    if (!task) 
      return;
    
    addTask(task);
    setTask('');
## 3
# Home - handleAddTask
  function handleAddTask(newTaskTitle: string) {
    const newTask ={
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }
    setTasks(oldTasks => [...oldTasks, newTask]);
## 4
# TasksList.tsx
    <FlatList
      // data={tasks}


## 5
# Removendo todo
# 2º TouchableOpacity
              onPress={() => removeTask(item.id) }
# Home
  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);

## 6 Marcando e desmarcando um todo como done
# TasksList.txt - 1º TouchableOpacity
    //TODO - use onPress (toggle task) prop
    <TouchableOpacity
      onPress={() => toggleTaskDone(item.id)}

    <View 
      //TODO - use style prop 
      style={item.done ? styles.taskMarkerDone: styles.taskMarker}   


    <Text 
      //TODO - use style prop
      style={item.done ? styles.taskTextDone : styles.taskText}
# Home - handleToggleTaskDone
  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const updatedTasks = tasks.map(task => ({ ...task }))    
    setTasks(updatedTasks)


    // const updatedTasks = [...tasks];
    // const foundItem = updatedTasks.find(item => item.id === id);
    // if (!foundItem) 
    //   return;

    // foundItem.done = !foundItem.done;
    // setTasks(updatedTasks)
    // console.log(tasks)





# desafioChapterI-rn
