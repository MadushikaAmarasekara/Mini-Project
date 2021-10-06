import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetFood from './models/getFood';

export default function App() {
  const [food,setFood] = useState([])

  useEffect(()=>{
    GetFood().then((data)=>{
      setFood(data);

    })
    .catch((e)=>{
      console.log(e);
    })

   

  },[])

  //console.log(food);
  return (
    <View style={styles.container}>
      <Text>{food.map((foodItem)=>{
        return foodItem.name
      })}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
