import * as React from 'react';
import {  View } from 'react-native';
import SignIn from './screens/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{
            headerShown: false,

            title: 'Welcome'}}
        />
        <Stack.Screen name="signin" component={SignIn}  options={{headerShown:false}}/>
        <Stack.Screen name="home" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    
   
  </NavigationContainer>
  );
}
