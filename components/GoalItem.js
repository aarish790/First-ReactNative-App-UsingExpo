import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";

const GoalItem = (props) => {
    return (
      <TouchableOpacity onPress={props.delete.bind(this,props.id)}>
        <View style={styles.item}>
        <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      marginTop: 10,
      borderColor: "black",
      backgroundColor: "skyblue",
      borderWidth: 2
      
    }
    
  
  });
  

export default GoalItem
