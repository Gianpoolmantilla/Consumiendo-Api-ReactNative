import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View,Image,Linking  } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './Header';



export default function App() {
  
   const [query, setQuery] = useState([])  
  useEffect(() => {
    
    fetch('https://www.freetogame.com/api/games')
      .then((response) => response.json().then((data) => setQuery(data)))     
     console.log(query);
  },[]);




  return (
    <View style={styles.container}>
      <Header/>  
      <FlatList 
      data= {query}
      keyExtractor={(item) => item.id.toString()}
      renderItem ={
        ({item}) =>
        <Text 
        style={styles.baseText}
        onPress={() => Linking.openURL(item.game_url)}
        
        >
          { item.title} 
        <Image
             
             style={styles.tinyLogo}
             source={{url :item.thumbnail}}
      />
      </Text>
 
         
      }     
     
      /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    margin : 75,
    marginTop : 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: "Cochin",
    textAlign : 'center',
    fontSize: 25,
    color: 'blue',
    fontWeight: 'bold',
  },
 

  tinyLogo: {
    paddingTop:20,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius :200/2
  },
  
});
