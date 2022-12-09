import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();
  return (
      <View style={styles.main}>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Home')}>
              <Image source={require('../assets/home.png')} style={{ width: 40, height: 40,marginBottom:10 }} />
              <Text>Home</Text>
              </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Notes')}>
              <Image source={require('../assets/notes.png')} style={{ width: 40, height: 40,marginBottom:10 }} />
              <Text>Notes</Text>
              </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Tasks')}>
              <Image source={require('../assets/task.png')} style={{ width: 40, height: 40,marginBottom:10 }} />
              <Text>Tasks</Text>
              </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Books')}>
              <Image source={require('../assets/books.png')} style={{ width: 40, height: 40,marginBottom:10 }} />
              <Text>Books</Text>
              </TouchableOpacity>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    main: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        paddingVertical:10,
    }
})