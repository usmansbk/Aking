import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, Text} from '@components/common';
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
      screenOptions={({route: {name}}) => {
        let iconName;
        let label = name;
        if (name === 'MyTask') {
          iconName = 'check';
          label = 'My Task';
        } else if (name === 'Menu') {
          iconName = 'menu';
        } else if (name === 'Quick') {
          iconName = 'list';
        } else {
          iconName = 'person';
        }
        return {
          tabBarIcon: ({color, size}) => {
            return <Icon name={iconName} color={color} size={size} />;
          },
          tabBarLabel: ({color}) => (
            <Text variant="tabLabel" style={{color}}>
              {label}
            </Text>
          ),
        };
      }}
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
