import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@components/common';
import {useTheme} from '@config/theme';
import MyTask from './MyTask';
import Menu from './Menu';
import Quick from './Quick';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="MyTask"
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const name = route.name;
          let iconName;
          if (name === 'MyTask') {
            iconName = 'check';
          } else if (name === 'Menu') {
            iconName = 'menu';
          } else if (name === 'Quick') {
            iconName = 'list';
          } else {
            iconName = 'person';
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.palatte.tabBar.activeTintColor,
        inactiveTintColor: theme.palatte.tabBar.inactiveTintColor,
        style: {
          backgroundColor: theme.palatte.secondary.dark,
        },
      }}>
      <Tab.Screen name="MyTask" component={MyTask} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Quick" component={Quick} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
