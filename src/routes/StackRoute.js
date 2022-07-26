import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { colors } from '../constants/style';
import { Results } from '../screens/Results';

const Stack = createNativeStackNavigator();

export const StackRoute = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen options={ScreenOptions('ATEM')} name="Home" component={Home}  />
      <Stack.Screen options={ScreenOptions('Results')} name="Results" component={Results}  />
    </Stack.Navigator>
  ) 
}

const ScreenOptions = (title) => {
  return {
    title, 
    headerStyle: {backgroundColor: colors.primary}, 
    headerTintColor: 'white'
  }
}