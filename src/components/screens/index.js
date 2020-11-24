import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Walkthrough from './Walkthrough';
import Authentication from './Authentication';
import Tabs from './Tabs';
import NewTask from './NewTask';
import NewQuickNote from './NewTask';
import NewCheckList from './NewTask';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
      <Stack.Screen name="SignIn" component={Authentication.SignIn} />
      <Stack.Screen name="SignUp" component={Authentication.SignUp} />
      <Stack.Screen
        name="ForgotPassword"
        component={Authentication.ForgotPassword}
      />
      <Stack.Screen
        name="ResetPassword"
        component={Authentication.ResetPassword}
      />
      <Stack.Screen name="Success" component={Authentication.Success} />
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="NewTask" component={NewTask} />
      <Stack.Screen name="NewQuickNote" component={NewQuickNote} />
      <Stack.Screen name="NewCheckList" component={NewCheckList} />
    </Stack.Navigator>
  );
}
