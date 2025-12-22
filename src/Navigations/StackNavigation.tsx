import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import TabNavigations from './TabNavigations';


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Login'  component={LoginScreen}/>
   <Stack.Screen name="HomeTabs" component={TabNavigations} />
     </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})