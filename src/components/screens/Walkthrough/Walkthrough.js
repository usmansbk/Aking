import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Slide from './Slide';
import slides from './slides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Walkthrough() {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      {slides.map((slide) => {
        return <Slide key={slide.id} {...slide} />;
      })}
    </ScrollView>
  );
}
