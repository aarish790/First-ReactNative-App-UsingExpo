import React from 'react';
import {View,Text,StyleSheet,TextInput,Button,Modal} from "react-native";

const GoalInput = (props) => {
    return (
      <Modal visible={props.visibility} animationType="slide">
      <View style={styles.root}>
      <TextInput placeholder="Course Goal" style={styles.input} onChangeText={props.func1}/>
      <View style={styles.pos}>
      <View style={styles.button}>
      <Button title="ADD" onPress={props.func2} style={{height: 20,width:30}}/>
      </View>
      <View style={styles.button}>
      <Button title="CANCEL" onPress={props.cancel} color="#F44336" style={{height: 20,width:30}} />
      </View>
      </View>
      </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    screen : {
      padding: 30
    },
    root: {paddingBottom : 10,
      paddingTop: 40,
      paddingLeft: 2,
      flex: 1,
      justifyContent: "center",
      alignItems:"center"},
    input: {borderWidth: 1,
      width:260,
      height:40,
      paddingLeft:7,
      borderBottomColor:"black",
      marginBottom: 10 
    },
    text: {
      paddingLeft: 5,
      flexDirection: "column"
    },
    pos: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "60%"
    },
    button: {
      width: "40%"
    }
    
  
  });
  

export default GoalInput
