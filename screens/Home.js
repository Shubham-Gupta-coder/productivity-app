import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from '../components/Navbar'

const Home = ({navigation}) => {
  return (
      <View style={styles.main}>
          <View style={styles.container}>
              <ImageBackground source={require('../assets/bg.jpeg')} style={{ width: '100%', flex: 1, height: '100%', alignItems: 'center', justifyContent: 'center', }}>
                  <View style={styles.over}>
                  <Text style={styles.intro}>Be Productive</Text>
                  <View style={styles.card}>
                  <Text style={styles.heading}>Remaining Tasks</Text>
                  <Text style={styles.text}>
                      No Remaining Task
                  </Text>
                          <TouchableOpacity onPress={() => {
                              navigation.navigate('Tasks')
                  }} style={styles.btn}>
                      <Text style={styles.btntext}>Add A New Task</Text>
                  </TouchableOpacity>
              </View>
                  </View>
              </ImageBackground>
              
              </View>
          <Navbar/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign:"center",
    },
    btn: {
        width: "80%",
        marginHorizontal: "10%",
        padding: 20,
        backgroundColor: "blue",
        borderRadius: 20,
        justifyContent: "center",
        marginTop:20
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        width:'100%'
    },
    card: {
        width: '80%',
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
    ,
    container: {
        width:'100%',
        flex: 1,
        justifyContent: 'center',
        height: '80%',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    intro: {
        color: 'white',
        textAlign: 'center',
        fontSize: 50,
        paddingVertical:"10%",
        fontWeight:'bold'
    },
    btntext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding:10,
        fontWeight:'bold'
    },
    heading: {
        fontSize: 30,
        paddingVertical: "10%",
        textAlign: 'center',
        color: 'blue',
        fontWeight:'bold',
    },
    over: {
        backgroundColor: '#00000066',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        
    },
})