import React from 'react';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
  View,
  Image,
} from 'react-native';
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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        style={styles.slider}
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        {slides.map((slide) => {
          return <Slide key={slide.id} {...slide} />;
        })}
      </ScrollView>
      <View style={styles.footer}>
        {slides.map((slide) => (
          <Image
            resizeMode="contain"
            source={slide.footer}
            style={styles.footerImage}
          />
        ))}
        <View
          style={[
            styles.buttons,
            {
              padding: theme.spacing.xl,
              marginVertical: theme.spacing.xl,
            },
          ]}>
          <Button variant="primary">Get Started</Button>
          <Button variant="text" textColor="white">
            Log In
          </Button>
        </View>
      </View>
    </View>
  );
}
