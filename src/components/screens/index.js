import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Walkthrough from './Walkthrough';
import Authentication from './Authentication';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
      <Stack.Screen name="SignIn" component={Authentication.SignIn} />
      <Stack.Screen
        name="ForgotPassword"
        component={Authentication.ForgotPassword}
      />
    </Stack.Navigator>
  );
}
