import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TodoListScreen from '../Screens/TodoListScreen';
import NotesScreen from '../Screens/NotesScreen';
import { COLORS } from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabNavigations = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: COLORS.accent,
        },

        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'Georgia',
          fontWeight: '300',
        },

        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: '#ddd',

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Tasks') {
            iconName = focused
              ? 'checkmark-circle'
              : 'checkmark-circle-outline';
          } else if (route.name === 'Notes') {
            iconName = focused
              ? 'document-text'
              : 'document-text-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Tasks" component={TodoListScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigations;

const styles = StyleSheet.create({});
