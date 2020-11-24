import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Text from '../Text';
import Icon from '../Icon';
import {useTheme} from '@config/theme';
import {
  formatMonth,
  formatDay,
  isSameDay,
  isDateMarked,
  getDate,
  getRowIndex,
  getWeekDates,
  nextMonth,
  previousMonth,
} from './utils';

const {height} = Dimensions.get('window');

const DAY_SIZE = 48;
const MAX_CALENDAR_HEIGHT = height * 0.38 + 8;
const MIN_CALENDAR_HEIGHT = MAX_CALENDAR_HEIGHT / 8 + 12;
const MIN_SWIPE_HORIZONTAL = 16;
const MIN_DRAG_VERTICAL = 8;

const styles = StyleSheet.create({
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  day: {
    width: DAY_SIZE,
    height: DAY_SIZE,
    borderRadius: DAY_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    position: 'absolute',
    bottom: 4,
  },
});

export default function CalendarHOC(props) {
  const theme = useTheme();
  return <Calendar theme={theme} {...props} />;
}

// PanResponder in Functional component doesn't allow us to manipulate useState
// so we switch to Class component
class Calendar extends React.Component {
  anim = new Animated.Value(0);

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderTerminationRequest: () => true,
    onPanResponderGrant: () => {
      this.anim.setOffset(this.anim._value);
    },
    onPanResponderMove: (_, gestureState) => {
      const {dy} = gestureState;
      if (Math.abs(dy) > MIN_DRAG_VERTICAL) {
        this.anim.setValue(dy + MIN_DRAG_VERTICAL);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      this.anim.flattenOffset();
      if (Math.abs(gestureState.dy) > Math.abs(gestureState.dx)) {
        if (Math.abs(gestureState.dy) > MIN_DRAG_VERTICAL) {
          Animated.spring(this.anim, {
            toValue:
              gestureState.dy > 0 ? MAX_CALENDAR_HEIGHT : MIN_CALENDAR_HEIGHT,
            useNativeDriver: false,
            bounciness: 0,
          }).start();
        }
      } else if (Math.abs(gestureState.dx) > MIN_SWIPE_HORIZONTAL) {
        if (gestureState.dx > 0) {
          this.setState({
            date: previousMonth(this.state.date),
          });
        } else {
          this.setState({
            date: nextMonth(this.state.date),
          });
        }
      }
    },
  });

  _expandAnimation = () => {
    Animated.spring(this.anim, {
      toValue:
        this.anim._value > MIN_CALENDAR_HEIGHT
          ? MIN_CALENDAR_HEIGHT
          : MAX_CALENDAR_HEIGHT,
      useNativeDriver: false,
      bounciness: 0,
    }).start();
  };

  constructor(props) {
    super(props);
    this.state = {
      date: getDate(),
    };
  }

  render() {
    const {theme, markedDates} = this.props;
    const {date} = this.state;
    return (
      <View
        style={[
          {
            backgroundColor: theme.palatte.background.main,
            elevation: theme.shape.elevation,
            paddingBottom: theme.spacing.s,
          },
        ]}>
        <MonthHeader
          date={date}
          onPress={this._expandAnimation}
          expand={this.anim.interpolate({
            inputRange: [MIN_CALENDAR_HEIGHT, MAX_CALENDAR_HEIGHT],
            outputRange: ['0deg', '180deg'],
            extrapolate: 'clamp',
          })}
        />
        <WeekHeader />
        <Animated.View
          style={[
            styles.weeks,
            {
              height: this.anim.interpolate({
                inputRange: [MIN_CALENDAR_HEIGHT, MAX_CALENDAR_HEIGHT],
                outputRange: [MIN_CALENDAR_HEIGHT, MAX_CALENDAR_HEIGHT],
                extrapolate: 'clamp',
              }),
            },
          ]}
          {...this.panResponder.panHandlers}>
          <ScrollView scrollEnabled={false}>
            <Animated.View
              style={{
                top: this.anim.interpolate({
                  inputRange: [MIN_CALENDAR_HEIGHT, MAX_CALENDAR_HEIGHT],
                  outputRange: [-MIN_CALENDAR_HEIGHT * getRowIndex(date), 0],
                  extrapolate: 'clamp',
                }),
              }}>
              <Weeks
                dots={markedDates}
                date={date}
                onDateChange={(newDate) => this.setState({date: newDate})}
              />
            </Animated.View>
          </ScrollView>
        </Animated.View>
      </View>
    );
  }
}

function MonthHeader({onPress, date = new Date(), expand}) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.monthHeader, {paddingVertical: theme.spacing.l}]}>
      <Text variant="sectionHeader" style={{marginRight: theme.spacing.s}}>
        {formatMonth(date)}
      </Text>
      <Animated.View
        style={{
          transform: [
            {
              rotateX: expand,
            },
          ],
        }}>
        <Icon name={'chevron-up'} size={14} />
      </Animated.View>
    </TouchableOpacity>
  );
}

function WeekHeader() {
  return (
    <View style={styles.weekHeader}>
      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index, array) => (
        <View style={styles.day} key={index}>
          <Text
            variant="sectionHeader"
            color={index === array.length - 1 ? 'primary' : 'sectionHeader'}>
            {day}
          </Text>
        </View>
      ))}
    </View>
  );
}

function Weeks({date, onDateChange = () => null, dots = []}) {
  const weeks = getWeekDates(date);
  return weeks.map((week, index) => (
    <Week
      key={index}
      week={week}
      date={date}
      onDateChange={onDateChange}
      dots={dots}
    />
  ));
}

function Week({week = [], date, onDateChange, dots = []}) {
  return (
    <View style={styles.weekRow}>
      {week.map((day, index) => (
        <Day
          key={index}
          day={day}
          isCurrentDate={isSameDay(date, day.date)}
          onPress={onDateChange}
          dot={isDateMarked(dots, day.date)}
        />
      ))}
    </View>
  );
}

function Day({day, isCurrentDate, onPress, dot}) {
  const theme = useTheme();
  let colors = theme.palatte.date;

  if (day.isToday) {
    colors = theme.palatte.today;
  }
  if (isCurrentDate) {
    colors = theme.palatte.selectedDay;
  }

  return (
    <RectButton
      onPress={() => onPress(day.date)}
      style={[
        styles.day,
        {
          marginBottom: theme.spacing.xs,
          backgroundColor: colors.backgroundColor,
        },
      ]}>
      <Text
        variant="sectionHeader"
        color={day.sameMonth ? 'main' : 'sectionHeader'}
        style={{
          color: day.sameMonth ? colors.text : theme.palatte.text.sectionHeader,
        }}>
        {formatDay(day.date)}
      </Text>
      {dot && (
        <View style={styles.dot}>
          <Icon name="dot" size={5} />
        </View>
      )}
    </RectButton>
  );
}
