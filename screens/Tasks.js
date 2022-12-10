import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from '../components/Navbar'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tasks = ({ navigation }) => {
    const [val, setval] = useState({})
    const [width, setwidth] = useState("0")
    let _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('task');
            if (value !== null) {
                // We have data!!
                setval(JSON.parse(value));
                setwidth("90")
                console.log(val)
            }
            else {
                // No data
                setval({});
                setwidth("0")
                console.log(val)

            }
        } catch (error) {
            // Error retrieving data
        }
    };
    let removeItem = async () => {
        try {
            await AsyncStorage.removeItem('task');
            await _retrieveData()
        } catch (error) {
            // Error retrieving data
        }
    };
    setInterval(() => {
        _retrieveData()
    }, 2000000)

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 20, fontWeight: 'blod', }}>Complete or Add Your Tasks</Text>
                <ScrollView style={{ width: `${width}%`, margin: '5%', }}>
                    <View style={{ width: '100%', padding: 20, backgroundColor: '#3030ff', borderRadius: 10, flex: 1, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>{val.text} </Text>
                            <Text style={{ color: 'white', marginTop: 10 }}>Due Date: {val.time} hrs {val.date}/{val.month}</Text>
                        </View>
                        <TouchableOpacity onPress={() => removeItem()}>
                            <Image source={require('../assets/tick-symbol-icon.png')} style={{ width: 40, height: 40 }} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate("newtask")} style={styles.btn}>
                    <Text style={styles.txt}>Add Tasks</Text>
                </TouchableOpacity>
            </View>
            <Navbar />
        </View>
    )
}

export default Tasks

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        height: '80%',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent: 'space-around',
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    },
    btn: {
        width: '80%',
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 20
    },
    txt: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
})