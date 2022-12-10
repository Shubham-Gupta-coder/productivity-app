import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Books from './screens/Books';
import Home from './screens/Home';
import NewTask from './screens/NewTask';
import Notes from './screens/Notes';
import Tasks from './screens/Tasks';

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="newtask" component={NewTask} options={{title:"New Task"} } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

