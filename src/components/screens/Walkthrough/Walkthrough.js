import React from 'react';
import {ScrollView, StyleSheet, StatusBar, Dimensions} from 'react-native';
import Slide from './Slide';
import slides from './slides';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default function Walkthrough() {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        style={styles.container}
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        {slides.map((slide) => {
          return <Slide key={slide.id} {...slide} />;
        })}
      </ScrollView>
    </>
  );
}
