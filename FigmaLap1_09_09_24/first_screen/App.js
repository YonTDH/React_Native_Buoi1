import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text,Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 ,backgroundColor :'#00CCF9' }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <View style={  styles.circle} />
      </View>
      <View style={styles.container}>
        <Text style ={styles.text}>GROW </Text>
      <Text style ={styles.text}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.container}>
      <Text style = {{fontWeight : 'bold',fontSize : 17}}>We will help you to grow your bussiness using</Text>

        <Text style = {{fontWeight : 'bold',fontSize : 17}}>We online server</Text>
      </View>
      <View style={{ flex: 1 ,justifyContent : 'space-around' , alignItems : 'center',flexDirection : 'row',borderRadius : 5,}}>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button}>

        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  circle: {
    borderWidth: 15,
    borderRadius: 80,
    width: 150,
    height: 150,
    borderColor: 'black', // You can adjust the border color here
    backgroundColor: 'transparent',
  }, button: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#E3C000',

  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontWeight : 'bold'
  },
  text :{
    fontSize : 30,
    fontWeight : 'bold',
  },
});
