import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from '../components/Navbar'

const Tasks = ({navigation}) => {
    return (
      <View style={styles.main}>
    <View style={styles.container}>
                <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 20, fontWeight: 'blod', }}>Complete or Add Your Tasks</Text>
                <TouchableOpacity onPress={()=> navigation.navigate("newtask")} style={styles.btn}>
                    <Text style={styles.txt}>Add Tasks</Text>
                </TouchableOpacity>
            </View>
            <Navbar/>
        </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        height: '80%',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent: 'space-around',
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        width:'100%'
    },
    btn: {
        width: '80%',
        backgroundColor: 'blue',
        padding: 20,
        borderRadius:20
    },
    txt: {
        textAlign: 'center',
        fontSize: 20,
        color:'white'
    }
})