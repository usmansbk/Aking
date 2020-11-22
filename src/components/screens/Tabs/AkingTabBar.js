// https://reactnavigation.org/docs/bottom-tab-navigator/
import React, {useEffect, useCallback} from 'react';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
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
  fabContainer: {
    width: 56,
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
  },
});

export default function AkingTabBar({state, descriptors, navigation}) {
  const theme = useTheme();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  useEffect(() => {
    try {
      changeNavigationBarColor(theme.palatte.secondary.dark, false);
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
          paddingHorizontal: theme.spacing.m,
        },
      ]}>
      <TabButton
        navigation={navigation}
        route={routes[0]}
        isFocused={state.index === 0}
        descriptors={descriptors}
      />
      <TabButton
        navigation={navigation}
        route={routes[1]}
        isFocused={state.index === 1}
        descriptors={descriptors}
      />
      <View style={styles.fabContainer}>
        <FAB style={[styles.fab, {marginTop: theme.spacing.space(-2)}]} />
      </View>
      <TabButton
        navigation={navigation}
        route={routes[2]}
        isFocused={state.index === 2}
        descriptors={descriptors}
      />
      <TabButton
        navigation={navigation}
        route={routes[3]}
        isFocused={state.index === 3}
        descriptors={descriptors}
      />
    </View>
  );
}

const TabButton = ({isFocused, descriptors, navigation, route}) => {
  const theme = useTheme();
  const {options} = descriptors[route.key];
  const {name, key} = route;
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
  const color = isFocused
    ? theme.palatte.tabBar.activeTintColor
    : theme.palatte.tabBar.inactiveTintColor;

  const onPress = useCallback(() => {
    const event = navigation.emit({
      type: 'tabPress',
      target: key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  }, [isFocused, navigation, key, route.name]);

  const onLongPress = useCallback(() => {
    navigation.emit({
      type: 'tabLongPress',
      target: key,
      canPreventDefault: true,
    });
  }, [navigation, key]);

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
            marginVertical: theme.spacing.l,
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
