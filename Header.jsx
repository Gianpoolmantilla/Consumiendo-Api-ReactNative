import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View,Image,Linking  } from 'react-native';
import { useEffect, useState } from 'react';



export default function Header() {  
  return (
    <View style={styles.contentHeader}>
      <Text style={styles.baseHeader}>Consumo de api - ApiFreeTogame</Text>    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    contentHeader: {
        marginBottom : 50,
        marginTop : 10,
    },
     
  baseHeader: {
    fontFamily: "Cochin",
    textAlign : 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
 

 
});
