import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTask from './MyTask';
import Menu from './Menu';
import Quick from './Quick';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyTask" component={MyTask} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Quick" component={Quick} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
