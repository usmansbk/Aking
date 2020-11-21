import React, {useRef} from 'react';
import {StyleSheet, StatusBar, Dimensions, View, Animated} from 'react-native';
import {Button} from '@components/common';
import {useTheme} from '@config/theme';
import Slide from './Slide';
import Pagination from './Pagination';
import slides from './slides';

const {width, height} = Dimensions.get('window');
const FOOTER_HEIGHT = height * 0.4;
const IMAGE_HEIGHT = height * 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    flex: 1,
  },
  footer: {
    justifyContent: 'flex-end',
    height: FOOTER_HEIGHT,
  },
  footerImage: {
    ...StyleSheet.absoluteFillObject,
    width,
    height: IMAGE_HEIGHT,
  },
  buttons: {
    height: height * 0.3,
    justifyContent: 'center',
  },
});

export default function Walkthrough({navigation}) {
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
        pagingEnabled
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
      <Pagination
        currentIndex={Animated.divide(scrollX, width)}
        pages={slides.length}
      />
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
                  inputRange: [(index - 1) * width, index * width],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
              },
            ]}
          />
        ))}
        <View
          style={[
            styles.buttons,
            {
              padding: theme.spacing.xl,
            },
          ]}>
          <Button
            variant="primary"
            onPress={() => navigation.navigate('SignUp')}>
            Get Started
          </Button>
          <Button
            variant="text"
            textColor="white"
            onPress={() => navigation.navigate('SignIn')}>
            Log In
          </Button>
        </View>
      </View>
    </View>
  );
}
