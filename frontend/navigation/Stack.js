import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const StackNavigation = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
  );
}

export default StackNavigation;