import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Books from './screens/Books';
import Home from './screens/Home';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

