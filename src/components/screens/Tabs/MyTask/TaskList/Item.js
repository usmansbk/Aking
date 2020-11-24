import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@config/theme';
import {Text, CheckBox, Icon} from '@components/common';
import moment from 'moment';

const {width} = Dimensions.get('window');
const ITEM_HEIGHT = 70;
const SHIFT = -(width * 0.4);
const DELTA_DRAG = SHIFT * 0.2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: ITEM_HEIGHT,
    alignItems: 'center',
    position: 'relative',
  },
  animatedView: {
    zIndex: 1,
  },
  title: {
    fontFamily: 'Medium',
    fontSize: 16,
    lineHeight: 24,
  },
  subtitle: {
    fontFamily: 'Medium',
    fontSize: 16,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  status: {
    height: '30%',
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_HEIGHT,
    height: ITEM_HEIGHT,
  },
  actionBox: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  right: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default function Item({title, time, completed}) {
  const theme = useTheme();
  const slideX = useRef(new Animated.Value(0)).current;
  const [checked, setCheck] = useState(completed);

  // Here we handle the swiping animation
  const pan = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        slideX.setOffset(slideX._value);
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < DELTA_DRAG) {
          slideX.setValue(gestureState.dx - DELTA_DRAG);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        slideX.flattenOffset();
        const {dx} = gestureState;
        if (SHIFT < dx) {
          Animated.spring(slideX, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const close = () => {
    Animated.timing(slideX, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const onEdit = () => {
    close();
  };

  const onDelete = () => {
    close();
  };

  const completedStyle = checked
    ? {
        textDecorationLine: 'line-through',
        color: theme.palatte.text.lineThrough,
      }
    : {};

  return (
    <View>
      <Animated.View
        {...pan.panHandlers}
        style={[
          styles.animatedView,
          {
            transform: [
              {
                translateX: slideX.interpolate({
                  inputRange: [SHIFT - DELTA_DRAG, 0],
                  outputRange: [SHIFT, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <RectButton
          style={[
            styles.container,
            {
              paddingLeft: theme.spacing.m,
              elevation: theme.shape.elevation,
              backgroundColor: theme.palatte.background.main,
              borderRadius: theme.shape.radius,
            },
          ]}
          onPress={() => console.log('open item')}>
          <CheckBox checked={checked} onPress={setCheck} />
          <View
            style={[
              styles.body,
              {
                paddingLeft: theme.spacing.m,
              },
            ]}>
            <Text numberOfLines={1} style={[styles.title, completedStyle]}>
              {title}
            </Text>
            <Text
              style={[
                styles.subtitle,
                {
                  color: theme.palatte.text.gray,
                },
                completedStyle,
              ]}>
              {moment(time).format('hh:mm a')}
            </Text>
          </View>
          <Status completed={checked} />
        </RectButton>
      </Animated.View>
      <View style={styles.actionBox}>
        <Action icon="pen" onPress={onEdit} />
        <Action icon="trash" onPress={onDelete} />
      </View>
    </View>
  );
}

function Status({completed}) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.status,
        {
          width: theme.spacing.s,
          backgroundColor: completed ? theme.colors.red : theme.colors.blue,
        },
      ]}
    />
  );
}

function Action({onPress, icon}) {
  const theme = useTheme();
  return (
    <RectButton
      onPress={onPress}
      style={[
        styles.actionContainer,
        {
          backgroundColor: theme.palatte.background.main,
          marginRight: theme.spacing.xs,
        },
      ]}>
      <Icon name={icon} color={theme.palatte.primary.main} />
    </RectButton>
  );
}
