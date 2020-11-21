import React from 'react';
import {ScrollView, View, StyleSheet, Image} from 'react-native';
import Slide from './Slide';
import slides from './slides';

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default function Walkthrough() {
  return (
    <ScrollView horizontal>
      {slides.map((slide) => {
        return <Slide key={slide.id} {...slide} />;
      })}
    </ScrollView>
  );
}
