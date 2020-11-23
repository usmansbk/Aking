// https://reactnavigation.org/docs/material-top-tab-navigator
import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from '@components/common';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Today from './Today';
import Month from './Month';
import {useTheme} from '@config/theme';
import {IconButton, Text, Icon} from '@components/common';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const Tab = createMaterialTopTabNavigator();

const options = [
  {
    text: 'Incomplete Tasks',
    id: 'incomplete',
  },
  {
    text: 'Completed Task',
    id: 'completed',
  },
  {
    text: 'All Tasks',
    id: 'all',
  },
];

export default function MyTask() {
  const theme = useTheme();
  const menuRef = useRef(null);
  const [option, setOption] = useState('incomplete');

  return (
    <>
      <Header
        title="Work List"
        barStyle="light-content"
        backgroundColor={theme.palatte.primary.main}
        rightIcon={() => {
          return (
            <Menu ref={menuRef}>
              <IconButton
                name="options"
                onPress={() => menuRef.current.open()}
              />
              <MenuTrigger />
              <MenuOptions
                customStyles={{
                  optionWrapper: {
                    padding: theme.spacing.l,
                  },
                  optionsContainer: {
                    borderRadius: theme.shape.radius,
                  },
                }}>
                {options.map((currentOption, index) => (
                  <MenuOption
                    key={index}
                    onSelect={() => setOption(currentOption.id)}>
                    <MenuItem
                      text={currentOption.text}
                      marked={currentOption.id === option}
                    />
                  </MenuOption>
                ))}
              </MenuOptions>
            </Menu>
          );
        }}
      />
      <Tab.Navigator
        initialRouteName="Today"
        swipeEnabled={false}
        backBehavior="initialRoute"
        tabBarOptions={{
          labelStyle: {
            fontFamily: 'Medium',
            fontSize: 18,
            textTransform: 'none',
          },
          style: {
            backgroundColor: theme.palatte.primary.main,
            elevation: 0,
          },
          indicatorStyle: {
            backgroundColor: theme.palatte.primary.contrast,
            paddingHorizontal: theme.spacing.xl,
            height: 3,
            width: 100,
            left: 50,
          },
          activeTintColor: theme.palatte.primary.contrast,
        }}>
        <Tab.Screen name="Today" component={Today} />
        <Tab.Screen name="Month" component={Month} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const MenuItem = ({text, marked}) => {
  const theme = useTheme();
  return (
    <View style={styles.optionContainer}>
      <Text variant="optionText">{text}</Text>
      {marked && <Icon name="mark" size={16} color={theme.colors.green} />}
    </View>
  );
};
