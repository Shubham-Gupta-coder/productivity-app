import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewTask = ({ navigation }) => {
    const [text, setText] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [month, setMonth] = useState("")

    const finalDate = () => {
        let task = {
            text: text,
            time: time,
            date: date,
            month: month,
        }
        const storeData = async () => {
            try {
                await AsyncStorage.setItem(
                    'task',
                    JSON.stringify(task)
                );
                await navigation.navigate("Tasks")

            } catch (error) {
                // Error saving data
            }
        }
        if (time !== "" && date !== "" && month !== "" && text !== "") {
            storeData();
        }
        else {
            Alert.alert(
                "No Date Set",
                "PLease Enter Time, Date And month before Submitting ",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );

        }
        if (text == "") {
            Alert.alert(
                "Task not Entered",
                "Please enter the task before Sumbit",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );

        }
    }
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 20, padding: 20, borderColor: 'blue', textAlign: 'center', color: 'blue', fontWeight: 'bold', borderRadius: 20, borderWidth: 2 }}>Add A New Task</Text>
            <View style={{ width: '80%', marginLeft: '10%', marginTop: 10 }}>
                <Text style={{ margin: 10, fontSize: 20 }}>Enter Yout Task Here</Text>
                <TextInput
                    style={{ padding: 20, borderRadius: 20, borderWidth: 2, borderColor: 'black', }}
                    placeholder="Task Here"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                /></View>
            <View style={{ width: '80%', marginLeft: '10%', marginTop: 10 }}>
                <Text style={{ margin: 10, fontSize: 20 }}>Final Time and Date</Text>
                <TextInput
                    style={{ padding: 20, borderRadius: 20, borderWidth: 2, borderColor: 'black', }}
                    placeholder="Time ex: 12:00"
                    onChangeText={newTime => setTime(newTime)}
                    defaultValue={time}
                />
                <TextInput
                    style={{ padding: 20, borderRadius: 20, borderWidth: 2, borderColor: 'black', marginVertical: 20 }}
                    placeholder="Date ex: 31"
                    onChangeText={newTime => setDate(newTime)}
                    defaultValue={date}
                />
                <TextInput
                    style={{ padding: 20, borderRadius: 20, borderWidth: 2, borderColor: 'black', }}
                    placeholder="Month ex: 12"
                    onChangeText={newTime => setMonth(newTime)}
                    defaultValue={month}
                />
            </View>
            <TouchableOpacity onPress={() => finalDate()} style={styles.btn}>
                <Text style={styles.txt}>Add Tasks</Text>
            </TouchableOpacity>

        </View>
    )
}

export default NewTask

const styles = StyleSheet.create({
    btn: {
        width: '80%',
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 20,
        marginLeft: '10%',
        marginTop: 10
    },
    txt: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
})