import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View,Button, ScrollView,FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goal, setgoal] = useState("");
  const [arr, setarr] = useState([]);
  const [modal,setmodal] = useState(false)

  function change1(text) {
    setgoal(text)
  }
  function press1() {
    setarr([...arr,{uid: Math.random().toString(),value: goal}])
    setmodal(false)
  }
  
  function delete1(goalid){
    setarr(arr.filter((goal) => goalid != goal.uid ))
  }

  function vis1() {
    setmodal(true)
  }
  function cancel() {
    setmodal(false)
  }
  
  console.log(arr)
  return (
    <View style={styles.screen}>
      <Button onPress={vis1} title="ADD NEW GOAL..."></Button>
      <GoalInput visibility={modal} func1 = {change1} func2 = {press1} cancel={cancel}/>
      <FlatList keyExtractor={(item, index) => item.uid}
      data={arr} renderItem={itemdata => (<GoalItem delete={delete1.bind(this,itemdata.item.uid)} title={itemdata.item.value}/>)}>
      
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding: 30
  },
 
 
  

});
