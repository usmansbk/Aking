// https://reactnavigation.org/docs/bottom-tab-navigator/
import React, {useEffect} from 'react';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import {changeNavigationBarColor} from 'react-native-navigation-bar-color';
import {Text, Icon, FAB} from '@components/common';
import {useTheme} from '@config/theme';

const BUTTON_SIZE = 48;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function AkingTabBar({state, descriptors, navigation}) {
  const theme = useTheme();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  useEffect(() => {
    try {
      changeNavigationBarColor(theme.palatte.secondary.dark, true);
    } catch (e) {
      console.log(e);
    }
  }, [theme.palatte.secondary.dark]);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const routes = state.routes;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.palatte.secondary.dark,
          paddingVertical: theme.spacing.xs,
        },
      ]}>
      {routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const {name} = route;
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
        const isFocused = state.index === index;
        const color = isFocused
          ? theme.palatte.tabBar.activeTintColor
          : theme.palatte.tabBar.inactiveTintColor;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
            canPreventDefault: true,
          });
        };

        return (
          <TabButton
            key={index}
            isFocused={isFocused}
            iconName={iconName}
            label={label}
            onPress={onPress}
            onLongPress={onLongPress}
            options={options}
            color={color}
          />
        );
      })}
    </View>
  );
}

const TabButton = ({
  onPress,
  onLongPress,
  isFocused,
  options,
  iconName,
  color,
  label,
}) => {
  const theme = useTheme();
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}>
      <View
        style={[
          styles.tabButton,
          {
            margin: theme.spacing.l,
            padding: theme.spacing.m,
          },
        ]}>
        <Icon name={iconName} size={BUTTON_SIZE / 2} color={color} />
        <Text variant="tabLabel" style={{color, marginTop: theme.spacing.xs}}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
