import React, {useRef} from 'react';
import {StyleSheet, StatusBar, Dimensions, View, Animated} from 'react-native';
import {Button} from '@components/common';
import {useTheme} from '@config/theme';
import Slide from './Slide';
import slides from './slides';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    flex: 1,
  },
  footer: {
    height: height * 0.4,
    justifyContent: 'center',
  },
  footerImage: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function Walkthrough() {
  const theme = useTheme();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.palatte.background.main,
        },
      ]}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Animated.ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        style={styles.slider}
        bounces={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        showsHorizontalScrollIndicator={false}>
        {slides.map((slide, index) => {
          return <Slide key={index} {...slide} />;
        })}
      </Animated.ScrollView>
      <View style={styles.footer}>
        {slides.map((slide, index) => (
          <Animated.Image
            key={index}
            resizeMode="contain"
            source={slide.footer}
            style={[
              styles.footerImage,
              {
                opacity: scrollX.interpolate({
                  inputRange: [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                  ],
                  outputRange: [0, 1, 0],
                  extrapolate: 'clamp',
                }),
              },
            ]}
          />
        ))}
        <View
          style={{
            padding: theme.spacing.xl,
            marginVertical: theme.spacing.xl,
          }}>
          <Button variant="primary">Get Started</Button>
          <Button variant="text" textColor="white">
            Log In
          </Button>
        </View>
      </View>
    </View>
  );
}
