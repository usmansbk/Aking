import React from 'react';
import {Header} from '@components/common';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Today from './Today';
import Month from './Month';
import {useTheme} from '@config/theme';

const Tab = createMaterialTopTabNavigator();

export default function MyTask() {
  const theme = useTheme();

  return (
    <>
      <Header
        title="Work List"
        barStyle="light-content"
        backgroundColor={theme.palatte.primary.main}
        rightIcon="options"
        onPressRightIcon={() => null}
      />
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontFamily: 'Medium',
            fontSize: 18,
            textTransform: 'none',
          },
          style: {
            backgroundColor: theme.palatte.primary.main,
          },
          indicatorStyle: {
            backgroundColor: theme.palatte.primary.contrast,
            paddingHorizontal: theme.spacing.xl,
            height: 3,
            justifyContent: 'center',
            alignItems: 'center',
          },
          activeTintColor: theme.palatte.primary.contrast,
        }}>
        <Tab.Screen name="Today" component={Today} />
        <Tab.Screen name="Month" component={Month} />
      </Tab.Navigator>
    </>
  );
}
